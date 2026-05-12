"use client";

import { useFormContext } from "react-hook-form";
import {
  PROPERTY_SIZES,
  type BookingFormValues,
} from "@/lib/booking-schema";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const SUBURBS = [
  "Sydney CBD",
  "Bondi",
  "Bondi Junction",
  "Surry Hills",
  "Newtown",
  "Manly",
  "Parramatta",
  "Chatswood",
  "Mosman",
  "Baulkham Hills",
  "Liverpool",
  "Cronulla",
  "Hornsby",
  "Ryde",
  "Strathfield",
];

function ErrorMessage({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-sm text-destructive">{message}</p>;
}

export function StepProperty() {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<BookingFormValues>();

  const size = watch("propertySize");

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-2xl text-primary">
          Property details
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          A few details about the space so we can match the right team.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div className="sm:col-span-2 space-y-1.5">
          <Label htmlFor="bk-address">Street address</Label>
          <Input
            id="bk-address"
            placeholder="123 Example St"
            {...register("address")}
          />
          <ErrorMessage message={errors.address?.message} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="bk-suburb">Suburb</Label>
          <Input
            id="bk-suburb"
            list="suburbs-list"
            placeholder="Start typing..."
            {...register("suburb")}
          />
          <datalist id="suburbs-list">
            {SUBURBS.map((s) => (
              <option key={s} value={s} />
            ))}
          </datalist>
          <ErrorMessage message={errors.suburb?.message} />
        </div>
      </div>

      <fieldset>
        <Label className="mb-3 block">Property size</Label>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
          {PROPERTY_SIZES.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() =>
                setValue("propertySize", p, { shouldValidate: true })
              }
              aria-pressed={size === p}
              className={cn(
                "rounded-md border px-3 py-2.5 text-sm font-medium transition-colors",
                size === p
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-input bg-background hover:bg-muted"
              )}
            >
              {p}
            </button>
          ))}
        </div>
        <ErrorMessage message={errors.propertySize?.message} />
      </fieldset>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="bk-bedrooms">Bedrooms</Label>
          <Input
            id="bk-bedrooms"
            type="number"
            min={0}
            max={10}
            {...register("bedrooms")}
          />
          <ErrorMessage message={errors.bedrooms?.message} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="bk-bathrooms">Bathrooms</Label>
          <Input
            id="bk-bathrooms"
            type="number"
            min={1}
            max={10}
            {...register("bathrooms")}
          />
          <ErrorMessage message={errors.bathrooms?.message} />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="bk-instructions">
          Special instructions{" "}
          <span className="text-muted-foreground text-xs">(optional)</span>
        </Label>
        <Textarea
          id="bk-instructions"
          rows={4}
          placeholder="Pets, parking, access codes, focus areas, allergies..."
          {...register("instructions")}
        />
        <ErrorMessage message={errors.instructions?.message} />
      </div>
    </div>
  );
}
