import { About } from "@/components/About";
import { BootcampContent } from "@/components/BootcampContent";
import { BootcampIncludes } from "@/components/BootcampIncludes";
import { Certificate } from "@/components/Certificate";
import { Faq } from "@/components/Faq";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Hosts } from "@/components/Hosts";
import { HotReviews } from "@/components/HotReviews";
import { LiveClass } from "@/components/LiveClass";
import { Requirements } from "@/components/Requirements";
import { Timer } from "@/components/Timer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales Page | Talnts Technologies Inc",
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

      <LiveClass />

      <Requirements />

      <BootcampIncludes />

      <Certificate />

      <Faq />

      <HotReviews />
    </div>
  );
}
