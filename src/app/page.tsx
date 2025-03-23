'use client';

import { motion } from 'framer-motion';
import { FormEvent } from 'react';
import Image from 'next/image';

export default function Home() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-between gap-12"
          >
            <div className="text-center md:text-left md:flex-1">
              <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                Hi, I'm <span className="text-primary-600 dark:text-primary-400">MD SHOWAIB RAHMAN TANVEER</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4">
                Engineering Student | Computer Science
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                To obtain a challenging role in the technology industry, where I can utilize my passion for learning about emerging technologies and apply my technical skills to create innovative solutions.
              </p>
              <a
                href="#contact"
                className="inline-block bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium py-3 px-8 rounded-lg transition-colors"
              >
                Get in Touch
              </a>
            </div>
            <div className="md:flex-shrink-0">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <Image
                  src="/images/profile-photo.jpg"
                  alt="MD SHOWAIB RAHMAN TANVEER"
                  fill
                  className="rounded-full object-cover shadow-2xl"
                  priority
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold">B.Sc. in Computer Science and Engineering</h3>
              <p className="text-gray-600 dark:text-gray-300">Green University of Bangladesh</p>
              <p className="text-gray-500">Expected Graduation: 2026</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold">HSC in Science</h3>
              <p className="text-gray-600 dark:text-gray-300">Adamjee Nagar MW College</p>
              <p className="text-gray-500">Result: 4.83 (2020)</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold">SSC in Science</h3>
              <p className="text-gray-600 dark:text-gray-300">A.K High School and College</p>
              <p className="text-gray-500">Result: 4.56 (2018)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Perfect Pathway",
                description: "A path finding game built using Python for my Algorithm course. The project demonstrates implementation of pathfinding algorithms.",
                tech: ["Python", "Algorithms"],
                github: "https://github.com/idontbyte69/perfect-pathway"
              },
              {
                title: "Calculator For Everyone",
                description: "A Java-based calculator with Object-Oriented Programming concepts, built for the Object-Oriented Programming course.",
                tech: ["Java", "OOP"],
                github: "https://github.com/idontbyte69/java-project---Calculator-for-everyone"
              },
              {
                title: "All in One Data Structure",
                description: "A learning program built in C for the Data Structure course, helping students understand various data structures.",
                tech: ["C", "Data Structures"],
                github: "https://github.com/idontbyte69/All-In-One-Data-Structures-using-C"
              }
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <h3 className="text-xl font-semibold mb-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                  </a>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                  >
                    View on GitHub
                    <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white dark:bg-gray-800">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold">Computer Operator</h3>
              <p className="text-gray-600 dark:text-gray-300">Faijan Solutions</p>
              <p className="text-gray-500">August, 2020 to Present</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold">Data Entry Specialist & Web Service Management Officer</h3>
              <p className="text-gray-600 dark:text-gray-300">Rang Bangladesh</p>
              <p className="text-gray-500">February, 2023 to May, 2023</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold">Data Entry Specialist</h3>
              <p className="text-gray-600 dark:text-gray-300">Upwork</p>
              <p className="text-gray-500">April, 2018 to February, 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Leadership',
                  'Communication',
                  'Problem Solving',
                  'Organizing & Management',
                  'Graphics Design',
                  'Web Development'
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-sm"
                  >
                    <span className="font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Certifications</h3>
              <div className="space-y-4">
                {[
                  'Workshop on Python Programming in a Pragmatic Approach',
                  'Cholera Vaccination',
                  'JavaScript Algorithms and Data Structures',
                  'Responsive Web Design'
                ].map((cert) => (
                  <div
                    key={cert}
                    className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm"
                  >
                    <span className="font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 bg-white dark:bg-gray-800">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Leadership & Activities</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold">President</h3>
              <p className="text-gray-600 dark:text-gray-300">Green University Computer Club (GUCC), 2025</p>
              <p className="text-gray-500">Leadership & Policy Making</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold">Intern Data Collector</h3>
              <p className="text-gray-600 dark:text-gray-300">Green University Center for International Affairs – GCIA</p>
              <p className="text-gray-500">Collecting data of Foreign Universities & Organizing MOU</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold">Joint General Secretary</h3>
              <p className="text-gray-600 dark:text-gray-300">Green University Computer Club (GUCC), 2023-24</p>
              <p className="text-gray-500">Leadership & Creative thinking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                HN-1779, Road-09, Medinabag, Rayerbag Kadamtoli Dhaka-1236<br />
                Cell: 01569-104401, 0164-333-2243<br />
                Email: srtanveer.cse@gmail.com
              </p>
              <div className="flex justify-center space-x-6">
                <a href="https://www.linkedin.com/in/showaibrahmantanveer-cse-bd" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">LinkedIn</a>
                <a href="https://codeforces.com/profile/i_dont_byte" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">Codeforces</a>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent dark:bg-gray-700"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent dark:bg-gray-700"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent dark:bg-gray-700"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium py-3 px-8 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
