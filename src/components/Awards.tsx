import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const awards = [
  {
    image: "/awards/best-project-award.jpeg",
    title: "Best Project Award",
    description: "Integrated Design Project Poster Presentation, Fall 2024 Dept of CSE, GUB"
  },
  {
    image: "/awards/sti-2024-volunteer.jpg",
    title: "STI 2024",
    description: "Volunteer Certificate"
  },
  {
    image: "/awards/icpc-2022-asia-dhaka-regional-site-online-preliminary-contest.png",
    title: "ICPC 2022",
    description: "Asia Dhaka Regional Site online Preliminary Contest"
  },
  {
    image: "/awards/executive-member-gucc-pc-2022-23.png",
    title: "GUCC PC 2022-23",
    description: "Executive Member Certificate"
  },
  {
    image: "/awards/gub-cse-carnival-lead-volunteer.png",
    title: "GUB CSE CARNIVAL",
    description: "Lead Volunteer Certificate"
  },
  {
    image: "/awards/volunteer-at-idgc-2025.png",
    title: "IDGC 2025",
    description: "Volunteer Certificate"
  },
  {
    image: "/awards/organizer-at-idpc-spring-2024-organizer.png",
    title: "IDPC Spring 2024",
    description: "Organizer Certificate"
  }
];

export default function Awards() {
  const [showAll, setShowAll] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1024); // Default to desktop width
  const [selectedAward, setSelectedAward] = useState<{ image: string; title: string; description: string } | null>(null);

  const handleCardClick = (award: { image: string; title: string; description: string }) => {
    setSelectedAward(award);
  };

  const handleCloseModal = () => {
    setSelectedAward(null);
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
  const displayedAwards = showAll ? awards : awards.slice(0, initialLimit);

  return (
    <section id="awards" className="py-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center">AWARDS & HONORS</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-6 max-w-7xl mx-auto">
          {displayedAwards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleCardClick(award)}
            >
              <div className="relative h-72 w-full bg-white">
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{award.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{award.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        {awards.length > initialLimit && (
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
        {selectedAward && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={handleCloseModal} // Close modal on clicking overlay
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="relative bg-white dark:bg-gray-800 rounded-lg p-6 max-w-full max-h-full overflow-auto text-center"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal content
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
                  src={selectedAward.image}
                  alt={selectedAward.title}
                  width={800} // Set a reasonable max width for the popup image
                  height={600} // Height will adjust based on aspect ratio
                  className="object-contain mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{selectedAward.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{selectedAward.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export { awards }; 