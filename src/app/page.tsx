'use client';

import { motion } from 'framer-motion';
import { FormEvent } from 'react';
import Image from 'next/image';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';

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
            <div className="md:flex-shrink-0">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <Image
                  src="/profile-photo.jpg"
                  alt="MD SHOWAIB RAHMAN TANVEER"
                  width={320}
                  height={320}
                  className="rounded-full object-cover shadow-2xl w-full h-full"
                  priority
                />
              </div>
            </div>
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
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <a
                  href="#contact"
                  className="inline-block bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium py-3 px-8 rounded-lg transition-colors text-center"
                >
                  Get in Touch
                </a>
                <a
                  href="https://drive.google.com/file/d/1p0uKiSxEIuzWn5uq4-_j0atZ3O6YOWY9/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-2 border-primary-600 dark:border-primary-500 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white font-medium py-3 px-8 rounded-lg transition-colors text-center"
                >
                  View Resume
                </a>
              </div>
            </div>
            
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">EDUCATION</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-7xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 lg:p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg lg:text-xl font-semibold">B.Sc. in Computer Science and Engineering (CSE)</h3>
              <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300">Green University of Bangladesh</p>
              <p className="text-sm lg:text-base text-gray-500">Expected Graduation: 2026</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 lg:p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg lg:text-xl font-semibold">HSC in Science</h3>
              <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300">Adamjeenagar MW College</p>
              <p className="text-sm lg:text-base text-gray-500">Result: 4.83 (2020)</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 lg:p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg lg:text-xl font-semibold">SSC in Science</h3>
              <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300">A.K. High School and College</p>
              <p className="text-sm lg:text-base text-gray-500">Result: 4.56 (2018)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white dark:bg-gray-800">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">WORK EXPERIENCE</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-7xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 lg:p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg lg:text-xl font-semibold">Computer Operator</h3>
              <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300">Faijan Solutions</p>
              <p className="text-sm lg:text-base text-gray-500">August, 2020 to Present (Self-Employed)</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 lg:p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg lg:text-xl font-semibold">Data Entry Specialist & Web Service Management Officer</h3>
              <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300">Rang Bangladesh Ltd.</p>
              <p className="text-sm lg:text-base text-gray-500">February, 2023 to May, 2023 (Contractual)</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 lg:p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg lg:text-xl font-semibold">Data Entry Specialist</h3>
              <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300">UpWork</p>
              <p className="text-sm lg:text-base text-gray-500">April, 2018 to February, 2023 (Freelancing)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Leadership Section */}
      <section id="leadership" className="py-20 bg-white dark:bg-gray-800">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">LEADERSHIP & ACTIVITIES</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full">
                <Image
                  src="/President.png"
                  alt="President of GUCC"
                  fill
                  className="object-contain bg-[#1e293b] p-2"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
              <div className="p-4 md:p-6 bg-gray-50 dark:bg-gray-700 flex-1">
                <h3 className="text-lg md:text-xl font-semibold mb-2">President</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-1">Green University Computer Club (GUCC), 2025</p>
                <p className="text-sm md:text-base text-gray-500">Leadership & Policy Making</p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full">
                <Image
                  src="/Intern.jpg"
                  alt="Intern Data Collector"
                  fill
                  className="object-contain bg-[#1e293b] p-2"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
              <div className="p-4 md:p-6 bg-gray-50 dark:bg-gray-700 flex-1">
                <h3 className="text-lg md:text-xl font-semibold mb-2">Intern Data Collector</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-1">Green University Center for International Affairs – GCIA</p>
                <p className="text-sm md:text-base text-gray-500">Collecting data of Foreign Universities & Organizing MOU</p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full">
                <Image
                  src="/Joint General Secratary.png"
                  alt="Joint General Secretary"
                  fill
                  className="object-contain bg-[#1e293b] p-2"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
              <div className="p-4 md:p-6 bg-gray-50 dark:bg-gray-700 flex-1">
                <h3 className="text-lg md:text-xl font-semibold mb-2">Joint General Secretary</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-1">Green University Computer Club (GUCC), 2023-24(Reformed)</p>
                <p className="text-sm md:text-base text-gray-500">Decision Making & Creative thinking</p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full">
                <Image
                  src="/Joint Cultural Secretary.jpg"
                  alt="Joint Cultural Secretary"
                  fill
                  className="object-contain bg-[#1e293b] p-2"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
              <div className="p-4 md:p-6 bg-gray-50 dark:bg-gray-700 flex-1">
                <h3 className="text-lg md:text-xl font-semibold mb-2">Joint Cultural Secretary</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-1">Green University Computer Club (GUCC), 2023-24</p>
                <p className="text-sm md:text-base text-gray-500">Communication & Organizing</p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full">
                <Image
                  src="/Executive Member.jpeg"
                  alt="Executive Member"
                  fill
                  className="object-contain bg-[#1e293b] p-2"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
              <div className="p-4 md:p-6 bg-gray-50 dark:bg-gray-700 flex-1">
                <h3 className="text-lg md:text-xl font-semibold mb-2">Executive Member</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-1">Green University Computer Club Permanent Campus, 2022-23</p>
                <p className="text-sm md:text-base text-gray-500">Team-Work & Learning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Honors Section */}
      <section id="awards" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">AWARDS & HONORS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-7xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 lg:p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg lg:text-xl font-semibold">Best Project</h3>
              <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300">Integrated Design Project Poster Presentation</p>
              <p className="text-sm lg:text-base text-gray-500">Fall 2024 Dept of CSE, GUB</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 lg:p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg lg:text-xl font-semibold">Most Active Volunteer</h3>
              <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300">Cholera Campaign</p>
              <p className="text-sm lg:text-base text-gray-500">2022</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 lg:p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg lg:text-xl font-semibold">Runner up in Web Development</h3>
              <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300">Notre Dame Science Festival</p>
              <p className="text-sm lg:text-base text-gray-500">2017</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Certification Section */}
      <section id="certifications" className="py-20 bg-white dark:bg-gray-800">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">TRAINING & CERTIFICATION</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6 max-w-7xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 lg:p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg lg:text-xl font-semibold">Workshop on Python Programming in a Pragmatic Approach</h3>
              <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300">Organized by Green University Computer Club</p>
              <p className="text-sm lg:text-base text-gray-500">2022</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 lg:p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg lg:text-xl font-semibold">Cholera Vaccination</h3>
              <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300">Organized by icddr,b</p>
              <p className="text-sm lg:text-base text-gray-500">2022</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 lg:p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg lg:text-xl font-semibold">JavaScript Algorithms and Data Structures</h3>
              <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300">Issued by freeCodeCamp</p>
              <p className="text-sm lg:text-base text-gray-500">July, 2020</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 lg:p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg lg:text-xl font-semibold">Responsive Web Design</h3>
              <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300">Issued by freeCodeCamp</p>
              <p className="text-sm lg:text-base text-gray-500">June, 2020</p>
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
                HN-1779, Road-09, Modinabag, Rayerbag, Kadamtoli, Dhaka-1236<br />
                Cell/Whatsapp: 01569104401, 01643332243<br />
                Email: srtanveer.cse@gmail.com
              </p>
              <div className="flex justify-center space-x-6">
                <a href="https://github.com/idontbyte69" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">GitHub</a>
                <a href="https://www.linkedin.com/in/srtanveer" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">LinkedIn</a>
                <a href="https://codeforces.com/profile/i_dont_byte" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">Codeforces</a>
              </div>
              <div className="flex justify-center space-x-6">
                <a href="https://www.facebook.com/tanveer.vaiya01/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">Facebook</a>
                <a href="https://www.instagram.com/i_dont_byte/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">Instagram</a>
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
