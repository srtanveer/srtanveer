import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const certifications = [
  {
    image: "/awards/problem-solving-basic-hackerrank.png",
    title: "HackerRank",
    description: "Problem Solving (Basic) Certificate"
  },
  {
    image: "/awards/corporate-readiness-program-batch-3-by-utc-global-academy.jpeg",
    title: "Corporate Readiness Program",
    description: "Batch 3 By UTC Global Academy"
  },
  {
    image: "/awards/corporate-readiness-program-by-utc-global-academy.jpg",
    title: "Corporate Readiness Program",
    description: "By UTC Global Academy"
  },
  {
    image: "/awards/participation-on-workshop-on-python.png",
    title: "Workshop on Python",
    description: "Python Programming in a Pragmatic Approach"
  },
  {
    image: "/awards/participate-on-webinar-with-bongodev.png",
    title: "Webinar Participation",
    description: "Participated in Webinar with bongoDev"
  },
];

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [selectedCert, setSelectedCert] = useState<{ image: string; title: string; description: string } | null>(null);

  const handleCardClick = (cert: { image: string; title: string; description: string }) => {
    setSelectedCert(cert);
  };

  const handleCloseModal = () => {
    setSelectedCert(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const initialLimit = windowWidth < 768 ? 2 : 3; // 2 for mobile/md, 3 for lg and up
  const displayedCertifications = showAll ? certifications : certifications.slice(0, initialLimit);

  return (
    <section id="certifications" className="py-12 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center">TRAINING & CERTIFICATION</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-6 max-w-7xl mx-auto">
          {displayedCertifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleCardClick(cert)}
            >
              <div className="relative h-72 w-full bg-white">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        {certifications.length > initialLimit && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              <span>{showAll ? 'Show Less' : 'Show More'}</span>
              {showAll ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="relative bg-white dark:bg-gray-800 rounded-lg p-6 max-w-full max-h-full overflow-auto text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 text-2xl font-bold"
                aria-label="Close modal"
              >
                &times;
              </button>
              <div className="relative w-full h-auto max-h-[80vh] mb-4">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  width={800}
                  height={600}
                  className="object-contain mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{selectedCert.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{selectedCert.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 