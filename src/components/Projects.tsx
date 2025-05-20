'use client';

import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaSearch, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: "July-24",
    description: "A platform supporting victims and families affected by the events of July 24, featuring donation system and victim tracking.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/idontbyte69/July-24",
    liveUrl: "https://july24bd.vercel.app",
    image: "/july24bd.png"
  },
  {
    title: "Faijan Solution",
    description: "A comprehensive business website offering digital services including government documentation, computer solutions, and digital marketing.",
    technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
    githubUrl: "https://github.com/idontbyte69/Faijan-Solution",
    liveUrl: "https://faijansolutions.vercel.app",
    image: "/faijan solutions.png"
  },
  {
    title: "Perfect Pathway",
    description: "An interactive pathfinding simulation game with role selection and dynamic building navigation.",
    technologies: ["Python", "Algorithms", "Data Structures"],
    githubUrl: "https://github.com/idontbyte69/Perfect-Pathway",
    liveUrl: "https://perfect-pathway.vercel.app",
    image: "/Perfect Pathway.png"
  },
  {
    title: "Calculator for Everyone (Java)",
    description: "A comprehensive calculator application implemented in Java programming language with full OOP implementation.",
    technologies: ["Java", "OOP", "GUI"],
    githubUrl: "https://github.com/idontbyte69/java-project---Calculator-for-everyone",
  },
  {
    title: "All-In-One Data Structures",
    description: "A collection of common data structures implemented in C, serving as a learning resource for data structure concepts.",
    technologies: ["C", "Data Structures", "Algorithms"],
    githubUrl: "https://github.com/idontbyte69/All-In-One-Data-Structures-using-C",
  },
  {
    title: "Calculator for Everyone (C)",
    description: "C implementation of the calculator project with core functionality and efficient algorithms.",
    technologies: ["C", "Data Structures", "Algorithms"],
    githubUrl: "https://github.com/idontbyte69/calculator_for_everyone-using-C",
  }
];

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);
  
  const filteredProjects = projects.filter(project =>
    project.technologies.some(tech =>
      tech.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Show first 3 projects by default instead of random selection
  const displayedProjects = searchQuery ? filteredProjects : (showAll ? projects : projects.slice(0, 3));

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center">PROJECTS</h2>
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12 relative">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by technology (e.g., C++, Python)"
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                       bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              {project.image && (
                <div className="relative w-full h-48">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    <FaGithub className="text-xl" />
                    <span>View Code</span>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      <FaExternalLinkAlt className="text-xl" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {!searchQuery && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors"
            >
              <span>{showAll ? 'Show Less' : 'Show More'}</span>
              {showAll ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
        )}

        {/* No Results Message */}
        {searchQuery && filteredProjects.length === 0 && (
          <div className="text-center text-gray-600 dark:text-gray-400 mt-8">
            No projects found for "{searchQuery}". Try searching for a different technology.
          </div>
        )}
      </div>
    </section>
  );
} 