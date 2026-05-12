"use client";

import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import {
  bookingSchema,
  STEP_FIELDS,
  generateBookingRef,
  type BookingFormValues,
} from "@/lib/booking-schema";
import { Button } from "@/components/ui/button";
import { ProgressIndicator } from "./progress-indicator";
import { StepService } from "./step-service";
import { StepProperty } from "./step-property";
import { StepDateTime } from "./step-datetime";
import { StepContact } from "./step-contact";
import { Confirmation } from "./confirmation";

const TOTAL_STEPS = 4;

export function BookingForm() {
  const [step, setStep] = React.useState(0);
  const [submitting, setSubmitting] = React.useState(false);
  const [reference, setReference] = React.useState<string | null>(null);
  const [submitted, setSubmitted] = React.useState<BookingFormValues | null>(
    null
  );

  const methods = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    mode: "onTouched",
    defaultValues: {
      serviceType: undefined,
      frequency: undefined,
      address: "",
      suburb: "",
      propertySize: undefined,
      bedrooms: 2,
      bathrooms: 1,
      instructions: "",
      date: "",
      timeSlot: undefined,
      name: "",
      email: "",
      phone: "",
    },
  });

  async function handleNext() {
    const fields = STEP_FIELDS[step];
    const ok = await methods.trigger(fields, { shouldFocus: true });
    if (!ok) return;
    setStep((s) => Math.min(TOTAL_STEPS - 1, s + 1));
  }

  function handleBack() {
    setStep((s) => Math.max(0, s - 1));
  }

  const onSubmit = methods.handleSubmit(async (values) => {
    setSubmitting(true);
    // Simulate API call.
    await new Promise((res) => setTimeout(res, 1000));
    const ref = generateBookingRef();
    setReference(ref);
    setSubmitted(values);
    setSubmitting(false);
  });

  function reset() {
    methods.reset();
    setReference(null);
    setSubmitted(null);
    setStep(0);
  }

  // Confirmation screen
  if (reference && submitted) {
    return (
      <Confirmation
        reference={reference}
        values={submitted}
        onReset={reset}
      />
    );
  }

  const STEPS = [
    <StepService key="s1" />,
    <StepProperty key="s2" />,
    <StepDateTime key="s3" />,
    <StepContact key="s4" />,
  ];

  const isLastStep = step === TOTAL_STEPS - 1;

  return (
    <FormProvider {...methods}>
      <ProgressIndicator current={step} />

      <form
        onSubmit={(e) => {
          // Block native submission on intermediate steps.
          if (!isLastStep) {
            e.preventDefault();
            handleNext();
            return;
          }
          onSubmit(e);
        }}
        className="rounded-2xl border bg-card p-6 md:p-8 shadow-sm"
        noValidate
      >
        <div key={step} className="animate-fade-in">
          {STEPS[step]}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
          <Button
            type="button"
            variant="ghost"
            onClick={handleBack}
            disabled={step === 0 || submitting}
            className="gap-1"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back
          </Button>

          <p className="text-xs text-muted-foreground hidden sm:block">
            Step {step + 1} of {TOTAL_STEPS}
          </p>

          {isLastStep ? (
            <Button
              type="submit"
              variant="accent"
              size="lg"
              disabled={submitting}
              className="gap-1"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                  Submitting...
                </>
              ) : (
                <>
                  Confirm Booking
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </>
              )}
            </Button>
          ) : (
            <Button
              type="button"
              variant="accent"
              size="lg"
              onClick={handleNext}
              className="gap-1"
            >
              Next
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          )}
        </div>
      </form>
    </FormProvider>
  );
}
