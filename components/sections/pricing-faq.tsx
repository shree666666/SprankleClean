import { Accordion } from "@/components/ui/accordion";

const ITEMS = [
  {
    id: "what-affects-price",
    question: "What affects the final price?",
    answer: (
      <>
        Mostly home size, the type of clean (regular vs deep vs end-of-lease),
        and how often we visit. Our quote calculator reflects all of these
        — what you see is what you pay, with no surprise fees.
      </>
    ),
  },
  {
    id: "supplies-included",
    question: "Are supplies and equipment included?",
    answer: (
      <>
        Yes. Every booking includes eco-friendly products, HEPA vacuum, mop,
        and microfibre cloths. If you&apos;d prefer we use your own supplies,
        just let us know in the booking notes — the price stays the same.
      </>
    ),
  },
  {
    id: "discounts",
    question: "Are there discounts for recurring service?",
    answer: (
      <>
        Yes! Weekly clients save 20%, fortnightly 15%, and monthly 10% off the
        one-off rate. You can pause or cancel a recurring schedule any time
        without a fee.
      </>
    ),
  },
  {
    id: "tipping",
    question: "Do I need to tip my cleaner?",
    answer: (
      <>
        Tipping is never expected — our team is paid a fair living wage. If
        you&apos;d like to show appreciation, a 5-star review or a friend
        referral means the world to them.
      </>
    ),
  },
  {
    id: "payment",
    question: "How and when do I pay?",
    answer: (
      <>
        We charge your card after the clean is completed and you&apos;ve had
        a chance to inspect. We accept all major credit cards, Apple Pay, and
        Google Pay.
      </>
    ),
  },
  {
    id: "cancellation",
    question: "What&apos;s your cancellation policy?",
    answer: (
      <>
        Free reschedule or cancellation up to 24 hours before your booking.
        Inside 24 hours, a 50% fee applies to cover the team&apos;s reserved
        time.
      </>
    ),
  },
  {
    id: "guarantee",
    question: "What if I&apos;m not happy with the clean?",
    answer: (
      <>
        Every clean is backed by our 100% satisfaction guarantee. If anything
        falls short of your expectations, let us know within 24 hours and
        we&apos;ll come back and re-clean those areas free of charge.
      </>
    ),
  },
];

export function PricingFaq() {
  return <Accordion items={ITEMS} defaultOpen={["what-affects-price"]} />;
}
