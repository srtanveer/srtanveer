'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FormEvent, useState, useEffect } from 'react';
import Image from 'next/image';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Awards from '@/components/Awards';
import Certifications from '@/components/Certifications';
import emailjs from '@emailjs/browser';
import ParticlesBackground from '@/components/ParticlesBackground';
import { differenceInMonths, parse } from 'date-fns';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const formData = new FormData(e.currentTarget);
      const templateParams = {
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        message: formData.get('message'),
        to_name: 'MD SHOWAIB RAHMAN TANVEER', // Your name
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.',
      });
      
      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again..',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const leadershipCards = [
    {
      image: "/President.png",
      title: "President",
      organization: "Green University Computer Club (GUCC), 2025",
      description: "Leadership & Policy Making",
      alt: "President of GUCC"
    },
    {
      image: "/Intern.jpg",
      title: "Intern Data Collector",
      organization: "Green University Center for International Affairs – GCIA",
      description: "Collecting data of Foreign Universities & Organizing MOU",
      alt: "Intern Data Collector"
    },
    {
      image: "/Joint General Secratary.png",
      title: "Joint General Secretary",
      organization: "Green University Computer Club (GUCC), 2023-24(Reformed)",
      description: "Decision Making & Creative thinking",
      alt: "Joint General Secretary"
    },
    {
      image: "/Joint Cultural Secretary.jpg",
      title: "Joint Cultural Secretary",
      organization: "Green University Computer Club (GUCC), 2023-24",
      description: "Communication & Organizing",
      alt: "Joint Cultural Secretary"
    },
    {
      image: "/Executive Member.jpeg",
      title: "Executive Member",
      organization: "Green University Computer Club Permanent Campus, 2022-23",
      description: "Team-Work & Learning",
      alt: "Executive Member"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1024);
  const [isMounted, setIsMounted] = useState(false);
  const [showAllLeadership, setShowAllLeadership] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleCards = () => {
    const cards = [];
    const cardsToShow = isMounted && windowWidth < 1024 ? 2 : 3;
    for (let i = 0; i < cardsToShow; i++) {
      const index = (currentIndex + i) % leadershipCards.length;
      cards.push(leadershipCards[index]);
    }
    return cards;
  };

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % leadershipCards.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovered]);

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + leadershipCards.length) % leadershipCards.length);
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % leadershipCards.length);
  };

  // Helper to calculate duration in months/years
  function getDuration(start: string, end: string) {
    const parseDate = (str: string) => {
      // Handles 'Month, Year' or 'Present'
      if (str.toLowerCase().includes('present')) return new Date();
      const [month, year] = str.replace(/\(.*\)/, '').split(',').map(s => s.trim());
      if (!month || !year) return null;
      return new Date(`${month} 1, ${year}`);
    };
    const startDate = parseDate(start);
    const endDate = parseDate(end);
    if (!startDate || !endDate) return '';
    let months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
    if (months < 0) months = 0;
    const years = Math.floor(months / 12);
    const remMonths = months % 12;
    let result = '';
    if (years > 0) result += `${years} yr${years > 1 ? 's' : ''}`;
    if (remMonths > 0) result += (years > 0 ? ' ' : '') + `${remMonths} mo${remMonths > 1 ? 's' : ''}`;
    if (!result) result = 'Less than a month';
    return result;
  }

  return (
    <div className="pt-16">
      <ParticlesBackground />
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-b from-white/80 to-gray-50/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-sm">
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
                Engineering Student | Frontend Developer | Tech Enthusiast
              </p>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl text-justify">
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
                  href="/resume"
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
      <section id="about" className="py-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">EDUCATION</h2>
          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500"></div>
              
              {/* Timeline Items */}
              <div className="space-y-6">
                {/* B.Sc. in CSE */}
                <div className="relative pl-20">
                  <div className="absolute left-5 top-2 w-6 h-6 bg-indigo-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                  <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-4 hover:shadow-xl hover:scale-[1.35] transition-all duration-300 border-l-4 border-indigo-500">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">B.Sc. in Computer Science and Engineering (CSE)</h3>
                        <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400 mt-1">Green University of Bangladesh</p>
                      </div>
                      <span className="px-3 py-1 text-xs font-semibold bg-indigo-500 text-white rounded-full">Ongoing</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <p className="font-medium">Expected Graduation: 2026</p>
                    </div>
                  </div>
                </div>

                {/* HSC in Science */}
                <div className="relative pl-20">
                  <div className="absolute left-5 top-2 w-6 h-6 bg-purple-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-4 hover:shadow-xl hover:scale-[1.35] transition-all duration-300 border-l-4 border-purple-500">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">HSC in Science</h3>
                        <p className="text-base font-semibold text-purple-600 dark:text-purple-400 mt-1">Adamjeenagar MW College</p>
                      </div>
                      <span className="px-3 py-1 text-xs font-semibold bg-purple-500 text-white rounded-full">GPA 4.83 out of 5.00</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <p className="font-medium">Year: 2020</p>
                    </div>
                  </div>
                </div>

                {/* SSC in Science */}
                <div className="relative pl-20">
                  <div className="absolute left-5 top-2 w-6 h-6 bg-pink-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                  <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-4 hover:shadow-xl hover:scale-[1.35] transition-all duration-300 border-l-4 border-pink-500">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">SSC in Science</h3>
                        <p className="text-base font-semibold text-pink-600 dark:text-pink-400 mt-1">A.K. High School and College</p>
                      </div>
                      <span className="px-3 py-1 text-xs font-semibold bg-pink-500 text-white rounded-full">GPA 4.56 out of 5.00</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <p className="font-medium">Year: 2018</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">RESEARCH</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-lg hover:shadow-2xl hover:scale-[1.35] transition-all duration-300">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold">Sarcasm Analysis (Ongoing Academic Thesis)</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">
                Supervised by Dr. Md. Saiful Azad, Dean FSE & Director IQAC, Green University of Bangladesh
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 text-justify">
                Sarcasm Analysis is a challenging area within Natural Language Processing (NLP) and Sentiment Analysis. It focuses on identifying instances where text uses positive language to convey a negative or mocking sentiment. This research explores techniques to accurately detect sarcasm, which is crucial for understanding the true intent behind online communications and improving applications like opinion mining and social media analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      
      <section id="experience" className="py-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">WORK EXPERIENCE</h2>
          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-green-500 via-purple-500 to-orange-500"></div>
              
              {/* Timeline Items */}
              <div className="space-y-6">
                {/* Frontend Developer Intern */}
                <div className="relative pl-20">
                  <div className="absolute left-5 top-2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-4 hover:shadow-xl hover:scale-[1.35] transition-all duration-300 border-l-4 border-blue-500">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">Frontend Developer</h3>
                        <p className="text-base font-semibold text-blue-600 dark:text-blue-400 mt-1">Digi5 Ltd</p>
                      </div>
                      <span className="px-3 py-1 text-xs font-semibold bg-blue-500 text-white rounded-full">Internship</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <p className="font-medium">October, 2025 - Present</p>
                      <span className="hidden sm:inline">•</span>
                      <p className="italic text-gray-500 dark:text-gray-400">({getDuration('October, 2025', 'Present')})</p>
                    </div>
                  </div>
                </div>

                {/* Computer Operator */}
                <div className="relative pl-20">
                  <div className="absolute left-5 top-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-4 hover:shadow-xl hover:scale-[1.35] transition-all duration-300 border-l-4 border-green-500">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">Computer Operator</h3>
                        <p className="text-base font-semibold text-green-600 dark:text-green-400 mt-1">Faijan Solutions</p>
                      </div>
                      <span className="px-3 py-1 text-xs font-semibold bg-green-500 text-white rounded-full">Self-Employed</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <p className="font-medium">August, 2020 - Present</p>
                      <span className="hidden sm:inline">•</span>
                      <p className="italic text-gray-500 dark:text-gray-400">({getDuration('August, 2020', 'Present')})</p>
                    </div>
                  </div>
                </div>

                {/* Data Entry Specialist & Web Service Management Officer */}
                <div className="relative pl-20">
                  <div className="absolute left-5 top-2 w-6 h-6 bg-purple-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-4 hover:shadow-xl hover:scale-[1.35] transition-all duration-300 border-l-4 border-purple-500">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">Data Entry Specialist & Web Service Management Officer</h3>
                        <p className="text-base font-semibold text-purple-600 dark:text-purple-400 mt-1">Rang Bangladesh Ltd.</p>
                      </div>
                      <span className="px-3 py-1 text-xs font-semibold bg-purple-500 text-white rounded-full">Contractual</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <p className="font-medium">February, 2023 - May, 2023</p>
                      <span className="hidden sm:inline">•</span>
                      <p className="italic text-gray-500 dark:text-gray-400">({getDuration('February, 2023', 'May, 2023')})</p>
                    </div>
                  </div>
                </div>

                {/* Data Entry Specialist */}
                <div className="relative pl-20">
                  <div className="absolute left-5 top-2 w-6 h-6 bg-orange-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-4 hover:shadow-xl hover:scale-[1.35] transition-all duration-300 border-l-4 border-orange-500">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">Data Entry Specialist</h3>
                        <p className="text-base font-semibold text-orange-600 dark:text-orange-400 mt-1">UpWork</p>
                      </div>
                      <span className="px-3 py-1 text-xs font-semibold bg-orange-500 text-white rounded-full">Freelance</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <p className="font-medium">April, 2018 - February, 2023</p>
                      <span className="hidden sm:inline">•</span>
                      <p className="italic text-gray-500 dark:text-gray-400">({getDuration('April, 2018', 'February, 2023')})</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Leadership Section */}
      <section id="leadership" className="py-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">LEADERSHIP & ACTIVITIES</h2>
          <div className="relative max-w-7xl mx-auto">
            {showAllLeadership ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 md:gap-6 lg:gap-8">
                {leadershipCards.map((card, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden hover:shadow-xl hover:scale-[1.35] transition-all duration-300 flex flex-col"
                  >
                    <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full">
                      <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        className="object-contain bg-[#1e293b] p-2"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      />
                    </div>
                    <div className="p-4 md:p-6 bg-gray-50 dark:bg-gray-700 flex-1">
                      <h3 className="text-lg md:text-xl font-semibold mb-2">{card.title}</h3>
                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-1">{card.organization}</p>
                      <p className="text-sm md:text-base text-gray-500">{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                {/* Left Arrow */}
                <button
                  onClick={handlePrevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 backdrop-blur-sm"
                  aria-label="Previous slide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-800 dark:text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                {/* Right Arrow */}
                <button
                  onClick={handleNextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 backdrop-blur-sm"
                  aria-label="Next slide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-800 dark:text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="grid grid-cols-2 lg:grid-cols-3 gap-1 md:gap-6 lg:gap-8"
                  >
                    {visibleCards().map((card, index) => (
                      <motion.div
                        key={`${currentIndex}-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.3 }}
                        className={`bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden hover:shadow-xl hover:scale-[1.35] transition-all duration-300 flex flex-col ${index >= (windowWidth < 1024 ? 2 : 3) ? 'hidden' : ''}`}
                      >
                        <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full">
                          <Image
                            src={card.image}
                            alt={card.alt}
                            fill
                            className="object-contain bg-[#1e293b] p-2"
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                          />
                        </div>
                        <div className="p-4 md:p-6 bg-gray-50 dark:bg-gray-700 flex-1">
                          <h3 className="text-lg md:text-xl font-semibold mb-2">{card.title}</h3>
                          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-1">{card.organization}</p>
                          <p className="text-sm md:text-base text-gray-500">{card.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </>
            )}
            {leadershipCards.length > (windowWidth < 1024 ? 2 : 3) && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAllLeadership(!showAllLeadership)}
                  className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium py-3 px-8 rounded-lg transition-colors"
                >
                  <span>{showAllLeadership ? 'Show Less' : 'Show More'}</span>
                  {showAllLeadership ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      
      {/* Awards Section */}
      <Awards />

      {/* Training & Certification Section (with Images) */}
      <Certifications />

      {/* Experience Section */}

      {/* Training & Certification Section */}
      {/* <section id="certifications" className="py-20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
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
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
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
                <a href="https://www.facebook.com/srtanveerr/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">Facebook</a>
                <a href="https://www.instagram.com/srtanveerr/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">Instagram</a>
              </div>
            </div>
            
            {submitStatus.type && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100' 
                  : 'bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-100'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent dark:bg-gray-700"
                  required
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium py-3 px-8 rounded-lg transition-colors ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
