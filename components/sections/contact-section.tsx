import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 relative">
      <div className="absolute inset-0 overflow-hidden">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Let's Work Together
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          I'm currently available for freelance work and exciting opportunities.
          If you have a project that needs some creative touches, let's talk!
        </p>

        <Button className="animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 py-8 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-xl">
          Get In Touch
        </Button>
      </div>
    </section>
  );
}
