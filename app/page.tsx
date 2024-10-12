import { About } from "@/components/About";
import { BootcampContent } from "@/components/BootcampContent";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Hosts } from "@/components/Hosts";
import { Timer } from "@/components/Timer";
import { Metadata } from "next";

// Task Details:

// You are to implement the two pages provided on the figma design here
// The register page has a slider that is to display the images attached by the side and also the Bootcamp Sales Page. Note that all screens must be very responsive as well.
// Deadline for submission is Saturday, 11th of October 2024 at 10pm
// The core framework or technologies to be used is Typescript and Next.js

export const metadata: Metadata = {
  title: {
    default: "Sales Page | Talnts Technologies Inc",
    template: "%s | Talnts Technologies Inc",
  },
  description: "Bootcamp Sales Page",
};

export default function Home() {
  return (
    <div className="w-full flex flex-col min-h-screen font-jakarta">
      <Header />

      <Hero />

      <Timer targetDate="2024-10-31T23:59:59Z" />

      <About />

      <Hosts />

      <BootcampContent />
    </div>
  );
}
