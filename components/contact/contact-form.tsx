"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const SUBJECTS = [
  "General enquiry",
  "Get a quote",
  "Reschedule a booking",
  "Feedback / Compliment",
  "Commercial / Office",
  "Other",
] as const;

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  phone: z
    .string()
    .min(8, "Please enter a valid phone number.")
    .regex(/^[+\d][\d\s-]{6,}$/, "Numbers, spaces, dashes, optional + only."),
  subject: z.enum(SUBJECTS, { required_error: "Pick a subject." }),
  message: z.string().min(10, "Please share a few more details."),
});

type ContactValues = z.infer<typeof contactSchema>;

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-sm text-destructive">{message}</p>;
}

export function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "General enquiry",
      message: "",
    },
  });

  const onSubmit = handleSubmit(async () => {
    // Simulate API call.
    await new Promise((r) => setTimeout(r, 900));
    setSubmitted(true);
  });

  if (submitted) {
    return (
      <div className="rounded-2xl border bg-card p-8 text-center">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent/20 text-accent mx-auto">
          <CheckCircle2 className="h-7 w-7" aria-hidden />
        </div>
        <h3 className="mt-5 font-heading text-2xl text-primary">
          Message sent — thank you!
        </h3>
        <p className="mt-2 text-muted-foreground">
          We&apos;ll reply within one business day. Need an answer faster?
          Call us on{" "}
          <a
            href="tel:0255500123"
            className="text-primary font-medium hover:underline"
          >
            (02) 5550 0123
          </a>
          .
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => {
            setSubmitted(false);
            reset();
          }}
        >
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border bg-card p-6 md:p-8 shadow-sm space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="ct-name">Name</Label>
          <Input id="ct-name" placeholder="Jane Doe" {...register("name")} />
          <FieldError message={errors.name?.message} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="ct-email">Email</Label>
          <Input
            id="ct-email"
            type="email"
            placeholder="you@example.com"
            {...register("email")}
          />
          <FieldError message={errors.email?.message} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="ct-phone">Phone</Label>
          <Input
            id="ct-phone"
            type="tel"
            placeholder="04XX XXX XXX"
            {...register("phone")}
          />
          <FieldError message={errors.phone?.message} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="ct-subject">Subject</Label>
          <select
            id="ct-subject"
            {...register("subject")}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <FieldError message={errors.subject?.message} />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="ct-message">Message</Label>
        <Textarea
          id="ct-message"
          rows={5}
          placeholder="Tell us about your space, or ask any question..."
          {...register("message")}
        />
        <FieldError message={errors.message?.message} />
      </div>

      <Button
        type="submit"
        variant="accent"
        size="lg"
        className="w-full sm:w-auto gap-2"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="h-4 w-4" aria-hidden />
          </>
        )}
      </Button>
    </form>
  );
}
