import { Spotlight } from "@/components/ui/spotlight";
import { TracingBeam } from "@/components/ui/tracing-beam";

export function SkillsSection() {
  const skills = [
    {
      title: "Frontend Development",
      description:
        "Next.js, React, TypeScript, Tailwind CSS, Framer Motion, and modern animation libraries.",
      icon: "💻",
    },
    {
      title: "Backend Development",
      description:
        "Node.js, Express, MongoDB, PostgreSQL, and RESTful API design.",
      icon: "🔧",
    },
    {
      title: "UI/UX Design",
      description:
        "Figma, responsive design, accessibility, and modern interface patterns.",
      icon: "🎨",
    },
    {
      title: "DevOps & Deployment",
      description:
        "Vercel, AWS, Docker, CI/CD pipelines, and performance optimization.",
      icon: "🚀",
    },
  ];

  return (
    <section id="skills" className="relative overflow-hidden">
      <TracingBeam className="px-6">
        <div className="max-w-6xl mx-auto py-24 md:py-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">My Skills</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A combination of technical expertise and creative problem-solving
              that I bring to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-purple-500 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{skill.title}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </TracingBeam>
    </section>
  );
}
