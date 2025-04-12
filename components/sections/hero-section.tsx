import { AnimatedText } from "@/components/ui/animated-text";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* <Spotlight className="w-full h-full"> */}
      <div className="text-center px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-5xl mx-auto mt-[8rem] text-white">
          <AnimatedText
            text="Athiwat Suknok"
            className="text-4xl md:text-7xl font-bold text-center text-white mb-4"
          />
          <AnimatedText
            text="Fullstack Developer"
            className="text-2xl md:text-4xl font-medium text-center text-white mb-8"
          />
          <TextGenerateEffect
            words="Crafting beautiful, interactive web experiences with Next.js,
              TypeScript, and Tailwind CSS. Passionate about animations and
              creating engaging user interfaces."
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          />
          {/* <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Crafting beautiful, interactive web experiences with Next.js,
              TypeScript, and Tailwind CSS. Passionate about animations and
              creating engaging user interfaces.
            </p> */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-6 rounded-full border-none">
              View My Work
            </Button>
            <Link href="#contact">
              {" "}
              <Button
                variant="outline"
                className="border-white text-black hover:bg-white/10 hover:text-white text-lg px-8 py-6 rounded-full"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* </Spotlight> */}
    </section>
  );
}
