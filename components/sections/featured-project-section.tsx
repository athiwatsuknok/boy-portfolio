import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";

export function FeaturedProjectSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto py-24 md:py-32 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Featured Project
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Take a closer look at one of my favorite projects with interactive
            3D effects.
          </p>
        </div>

        <div className="flex justify-center">
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-200 dark:text-white"
              >
                Interactive Dashboard
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                A responsive analytics dashboard with real-time data
                visualization, dark/light mode, and customizable widgets.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  height="400"
                  width="600"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Dashboard Project"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold"
                >
                  View Live Demo →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-gray-800 dark:bg-white/[0.2] text-white text-xs font-bold"
                >
                  View Source Code
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </section>
  );
}
