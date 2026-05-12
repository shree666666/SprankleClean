import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about-hero";
import { OurStory } from "@/components/sections/our-story";
import { Values } from "@/components/sections/values";
import { TeamGrid } from "@/components/sections/team-grid";
import { Certifications } from "@/components/sections/certifications";
import { StatsCounter } from "@/components/sections/stats-counter";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the SparkleClean team — Sydney's most trusted cleaning crew. Trained pros, eco-friendly products, and 500+ happy clients since 2021.",
  openGraph: {
    title: "About | SparkleClean",
    description:
      "Sydney's most trusted cleaning team. Trained pros, eco-friendly products.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <FadeIn>
        <OurStory />
      </FadeIn>
      <FadeIn>
        <Values />
      </FadeIn>
      <FadeIn>
        <StatsCounter />
      </FadeIn>
      <FadeIn>
        <TeamGrid />
      </FadeIn>
      <FadeIn>
        <Certifications />
      </FadeIn>
    </>
  );
}
