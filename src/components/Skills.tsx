'use client';

import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaDatabase,
  FaPython,
  FaJava,
  FaCuttlefish,
  FaUsers,
  FaLightbulb,
  FaChartLine,
  FaPalette,
  FaCode
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiNextdotjs, 
  SiTypescript, 
  SiMongodb,
  SiExpress
} from 'react-icons/si';

const technicalSkills = [
  { name: 'C', icon: FaCuttlefish, color: '#A8B9CC', level: 95 },
  { name: 'C++', icon: FaCuttlefish, color: '#00599C', level: 90 },
  { name: 'Python', icon: FaPython, color: '#3776AB', level: 90 },
  { name: 'Java', icon: FaJava, color: '#007396', level: 65 },
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26', level: 90 },
  { name: 'CSS3', icon: FaCss3Alt, color: '#264DE4', level: 85 },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', level: 70 },
  // { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 75 },
  { name: 'React', icon: FaReact, color: '#61DAFB', level: 60 },
  // { name: 'Next.js', icon: SiNextdotjs, color: '#000000', level: 80 },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933', level: 55 },
  // { name: 'Express', icon: SiExpress, color: '#000000', level: 70 },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 40 },
  
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 90 },
  { name: 'Git', icon: FaGitAlt, color: '#F05032', level: 85 },
  { name: 'SQL', icon: FaDatabase, color: '#4479A1', level: 85 },
];

const softSkills = [
  { name: 'Leadership', icon: FaUsers, color: '#4F46E5', level: 95 },
  { name: 'Communication', icon: FaChartLine, color: '#10B981', level: 90 },
  { name: 'Problem Solving', icon: FaLightbulb, color: '#F59E0B', level: 80 },
  { name: 'Organizing & Management', icon: FaChartLine, color: '#8B5CF6', level: 85 },
  { name: 'Graphics Design', icon: FaPalette, color: '#EC4899', level: 95 },
  { name: 'Web Development', icon: FaCode, color: '#3B82F6', level: 70 },
];

const SkillBar = ({ skill }: { skill: typeof technicalSkills[0] }) => {
  const Icon = skill.icon;
  
  return (
    <div className="mb-4 md:mb-6">
      <div className="flex items-center justify-between mb-1 md:mb-2">
        <div className="flex items-center gap-1 md:gap-2">
          <Icon className="text-xl md:text-2xl" style={{ color: skill.color }} />
          <span className="font-medium text-sm md:text-base">{skill.name}</span>
        </div>
        <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-1.5 md:h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ backgroundColor: skill.color }}
        />
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
        
        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillBar skill={skill} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Soft Skills</h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillBar skill={skill} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 