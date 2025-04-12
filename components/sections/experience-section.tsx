"use client";

import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";

export function ExperienceSectionAlt() {
  const experiences = [
    {
      id: 1,
      name: "Frontend Development",
      emoji: "🚀",
      color: "from-purple-500/20 to-purple-500/5",
      hoverColor: "from-purple-500/30 to-purple-500/10",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      id: 2,
      name: "Backend Development",
      emoji: "⚙️",
      color: "from-blue-500/20 to-blue-500/5",
      hoverColor: "from-blue-500/30 to-blue-500/10",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    },
    {
      id: 3,
      name: "UI/UX Design",
      emoji: "🎨",
      color: "from-pink-500/20 to-pink-500/5",
      hoverColor: "from-pink-500/30 to-pink-500/10",
      skills: ["Figma", "Responsive Design", "Accessibility", "Animation"],
    },
    {
      id: 4,
      name: "DevOps",
      emoji: "🔧",
      color: "from-green-500/20 to-green-500/5",
      hoverColor: "from-green-500/30 to-green-500/10",
      skills: ["Vercel", "AWS", "Docker", "CI/CD"],
    },
  ];

  return (
    <section id="experience" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center py-24 md:py-32 px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">My Experience</h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-16">
          Years of hands-on experience building modern web applications and
          solving complex problems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: experience.id * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Emoji container with hover animations */}
              <motion.div
                className={`relative w-32 h-32 rounded-full bg-gradient-to-b ${experience.color} flex items-center justify-center mb-6 border border-white/10 cursor-pointer`}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 20px rgba(123, 31, 162, 0.5)",
                  backgroundImage: `linear-gradient(to bottom, var(--tw-gradient-stops))`,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
                variants={{
                  hover: {
                    backgroundImage: `linear-gradient(to bottom, ${experience.hoverColor})`,
                  },
                }}
              >
                {/* Animated emoji */}
                <motion.div
                  className="text-6xl"
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -5, 5, -5, 5, 0],
                    transition: {
                      rotate: {
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "mirror",
                        duration: 1.5,
                      },
                    },
                  }}
                >
                  {experience.emoji}
                </motion.div>

                {/* Experience badge */}
              </motion.div>

              {/* Experience details */}
              <h3 className="text-xl font-bold text-white mb-2">
                {experience.name}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-2">
                {experience.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-xs"
                    whileHover={{
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      color: "rgba(255, 255, 255, 1)",
                      scale: 1.05,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
