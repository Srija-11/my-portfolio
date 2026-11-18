"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Spatio-Temporal Gait Analysis using IMU Sensors",
    description:
      "Developed a wearable sensor-based gait analysis pipeline for real-time human movement monitoring. Implemented gait event detection to identify Heel Strike and Toe-Off events and extract spatio-temporal parameters such as stride time, cadence, stance time, swing time, and stride length.",
    technologies: [
      "Python",
      "IMU Sensors",
      "Raspberry Pi 5",
      "BLE",
      "Docker",
      "Signal Processing",
      "Vicon",
      "MediaPipe",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "Community Emergency Resource Hub",
    description:
      "Developed a web-based platform connecting individuals in need with people willing to provide emergency resources. Integrated real-time need and offer management, authentication, interactive maps, weather information, and multilingual support.",
    technologies: [
      "React",
      "JavaScript",
      "Firebase",
      "Firestore",
      "Google Maps API",
      "OpenWeatherMap API",
      "REST APIs",
    ],
    github: "https://github.com/Srija-11/Community-Resource-Hub",
    demo: "#",
  },
  {
    title: "WhatsApp Chat Analyzer",
    description:
      "Built an interactive chat analytics application that processes exported WhatsApp conversations and generates insights through message statistics, user activity analysis, timelines, word frequency, and visualizations.",
    technologies: [
      "Python",
      "Streamlit",
      "Pandas",
      "Matplotlib",
      "Data Visualization",
    ],
    github: "https://github.com/Srija-11/Whatsapp-chat-analyzer",
    demo: "https://wp-chat-analyzer-1.streamlit.app/",
  },
  {
    title: "Netflix Movie Data Analysis",
    description:
      "Performed exploratory data analysis on Netflix movie and TV show datasets to uncover trends in content distribution, genres, release patterns, and other viewing-related insights.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Data Analysis",
    ],
    github: "https://github.com/Srija-11/Netflix-movie-data-analysis",
    demo: "#",
  },
  {
    title: "Real-Time Multiplayer Chess Game",
    description:
      "Developed a real-time multiplayer chess application enabling two players to play remotely with synchronized moves and interactive gameplay.",
    technologies: [
      "JavaScript",
      "Node.js",
      "Socket.IO",
      "HTML",
      "CSS",
    ],
    github: "https://github.com/Srija-11/Chess-Game",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <p className="font-semibold text-sky-400">
          PROJECTS
        </p>

        <h2 className="mt-2 bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-5xl font-bold text-transparent">
          Featured Work
        </h2>

        <p className="mt-6 max-w-3xl text-gray-400">
          A selection of AI, Machine Learning and Full Stack projects
          demonstrating production-ready engineering skills.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">

        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-sky-400 hover:shadow-[0_0_30px_rgba(56,189,248,.2)]"
          >
            <h3 className="text-2xl font-bold">
              {project.title}
            </h3>

            <p className="mt-5 text-gray-400 leading-7">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-sky-500/20 px-3 py-1 text-sm text-sky-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex gap-6">

              <a
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 text-sky-400 hover:text-white"
              >
                <FaGithub size={18} />
                GitHub
              </a>

              <a
                href={project.demo}
                target="_blank"
                className="flex items-center gap-2 text-sky-400 hover:text-white"
              >
                <ExternalLink size={18} />
                Demo
              </a>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
