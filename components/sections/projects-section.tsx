import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Spotlight } from "@/components/ui/spotlight";

export function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with Next.js, TypeScript, and Tailwind CSS.",
      link: "#",
    },
    {
      title: "Dashboard Analytics",
      description:
        "Interactive dashboard with real-time data visualization using React and D3.",
      link: "#",
    },
    {
      title: "Social Media App",
      description:
        "Mobile-first social platform with modern animations and transitions.",
      link: "#",
    },
    {
      title: "Portfolio Template",
      description:
        "Customizable portfolio template for developers and designers.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto py-24 md:py-32 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">My Projects</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A selection of my recent work showcasing my skills in frontend and
            fullstack development.
          </p>
        </div>

        <HoverEffect
          items={projects.map((project) => ({
            title: project.title,
            description: project.description,
            link: project.link,
          }))}
        />
      </div>
    </section>
  );
}
