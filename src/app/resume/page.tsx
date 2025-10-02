"use client";

import Image from 'next/image';
import { FaEnvelope, FaPhone, FaLinkedin, FaGlobe, FaMapMarkerAlt, FaAward, FaUserGraduate, FaBriefcase, FaProjectDiagram, FaLanguage, FaCertificate, FaStar } from 'react-icons/fa';
import { projects } from '../../components/Projects';
import { awards } from '../../components/Awards';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

interface Award {
  image: string;
  title: string;
  description: string;
}

export default function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 print:bg-white print:text-black">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 py-8 px-2 md:px-6 print:block">
        {/* Sidebar */}
        <aside className="md:w-1/3 w-full bg-white/90 rounded-2xl shadow-lg p-6 flex flex-col items-center gap-6 print:bg-white print:shadow-none print:rounded-none print:p-0">
          <Image src="/profile-photo.jpg" alt="Profile" width={140} height={140} className="rounded-full border-4 border-green-300 shadow-md object-cover" />
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">MD SHOWAIB RAHMAN TANVEER</h1>
            <div className="text-green-700 font-semibold text-lg">Engineering Student</div>
            <div className="text-gray-500 text-sm">Computer Science</div>
          </div>
          <div className="w-full border-t border-gray-200 my-2" />
          <div className="flex flex-col gap-2 w-full text-sm">
            <ContactItem icon={<FaMapMarkerAlt />} text="Dhaka, Bangladesh" />
            <ContactItem icon={<FaPhone />} text="01569-104401, 0164-333-2243" />
            <ContactItem icon={<FaEnvelope />} text="srtanveer.cse@gmail.com" link="mailto:srtanveer.cse@gmail.com" />
            <ContactItem icon={<FaLinkedin />} text="linkedin.com/in/srtanveer" link="https://www.linkedin.com/in/srtanveer/" />
            <ContactItem icon={<FaGlobe />} text="srtanveer.vercel.app" link="https://srtanveer.vercel.app/" />
          </div>
          <div className="w-full border-t border-gray-200 my-2" />
          <div className="w-full">
            <SectionTitle accent>Skills</SectionTitle>
            <ul className="list-none space-y-1 mt-2 text-gray-700">
              <li>• Typing Speed & Accuracy</li>
              <li>• Excel & Data Management</li>
              <li>• Documentation Accuracy</li>
              <li>• Graphics Design (Photoshop, Canva)</li>
            </ul>
          </div>
          <div className="w-full">
            <SectionTitle accent>Languages</SectionTitle>
            <ul className="list-none space-y-1 mt-2 text-gray-700">
              <li>Bengali <span className="text-xs text-gray-500">(Native)</span></li>
              <li>English <span className="text-xs text-gray-500">(Intermediate)</span></li>
            </ul>
          </div>
          <button onClick={() => window.print()} className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg shadow print:hidden transition">Print / Save PDF</button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col gap-6">
          {/* Objective */}
          <SectionTitle icon={<FaStar className="text-yellow-400" />}>Career Objective</SectionTitle>
          <Card>
            To obtain a challenging role in the technology industry, where I can utilize my passion for learning about emerging technologies and apply my technical skills to create innovative solutions. I aspire to be a highly skilled and knowledgeable tech person who can contribute to the development of cutting-edge technology products and services while continuously learning and growing in my field.
          </Card>

          {/* Experience */}
          <SectionTitle icon={<FaBriefcase className="text-blue-500" />}>Work Experience</SectionTitle>
          <div className="flex flex-col gap-4">
            <TimelineItem
              title="Frontend Developer"
              subtitle="Digi5 Ltd"
              period="Oct 2025 – Present"
              badge="Internship"
            />
            <TimelineItem
              title="Computer Operator"
              subtitle="Faijan Solutions, Dhaka"
              period="Aug 2020 – Present"
              badge="Self Employed"
            />
            <TimelineItem
              title="Data Entry Specialist & Web Service Management Officer"
              subtitle="Rang Bangladesh Ltd., Narayanganj"
              period="Feb 2023 – May 2023"
              badge="Contractual"
            />
            <TimelineItem
              title="Data Entry Specialist"
              subtitle="Upwork"
              period="Apr 2018 – Feb 2023"
              badge="Freelance"
            />
          </div>

          {/* Projects */}
          <SectionTitle icon={<FaProjectDiagram className="text-green-500" />}>Projects</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project: Project, index: number) => (
              <ProjectCard
                key={index}
                title={project.title}
                tech={project.technologies.join(', ')}
                desc={project.description}
              />
            ))}
          </div>

          {/* Education */}
          <SectionTitle icon={<FaUserGraduate className="text-purple-500" />}>Academic Qualification</SectionTitle>
          <div className="flex flex-col gap-4">
            <BadgeItem
              title="B.Sc. in Computer Science and Engineering"
              subtitle="Green University of Bangladesh"
              period="2026 (expected)"
              badge="Not Published"
            />
            <BadgeItem
              title="HSC in Science"
              subtitle="Govt. Adamjeenagar MW College, Dhaka"
              period="2020"
              badge="4.83"
            />
            <BadgeItem
              title="SSC in Science"
              subtitle="A.K. High School and College, Dhaka"
              period="2018"
              badge="4.56"
            />
          </div>

          {/* Experience Highlights */}
          <SectionTitle icon={<FaStar className="text-yellow-400" />}>Experience Highlights</SectionTitle>
          <Card>
            <ul className="list-disc pl-6 space-y-1">
              <li>Leadership</li>
              <li>Communication</li>
              <li>Problem Solving</li>
              <li>Organizing & Management</li>
            </ul>
          </Card>

          {/* Awards & Honors */}
          <SectionTitle icon={<FaAward className="text-pink-500" />}>Awards & Honors</SectionTitle>
          <Card>
            <ul className="list-disc pl-6 space-y-1">
              {awards.map((award: Award, index: number) => (
                <li key={index}>
                  <span className="font-semibold">{award.title}</span>, {award.description}
                </li>
              ))}
            </ul>
          </Card>

          {/* Extra-Curricular Activities */}
          <SectionTitle icon={<FaStar className="text-yellow-400" />}>Extra-Curricular Activities</SectionTitle>
          <Card>
            <ul className="list-disc pl-6 space-y-1">
              <li><span className="font-semibold">President</span> at <a href="https://www.facebook.com/gucc.gub/" className="text-blue-600 underline">Green University Computer Club (GUCC)</a>, 2025
                <ul className="list-disc pl-6">
                  <li>Leadership</li>
                  <li>Policy Making</li>
                </ul>
              </li>
              <li><span className="font-semibold">Intern Data Collector</span> at <a href="https://www.gub.edu.bd/center-for-international-affairs" className="text-blue-600 underline">Green University Center for International Affairs (GCIA)</a>
                <ul className="list-disc pl-6">
                  <li>Collecting data of Foreign Universities</li>
                  <li>Organizing MOU between different universities from different countries</li>
                </ul>
              </li>
            </ul>
          </Card>

          {/* Training & Certification */}
          <SectionTitle icon={<FaCertificate className="text-indigo-500" />}>Training & Certification</SectionTitle>
          <Card>
            <ul className="list-disc pl-6 space-y-1">
              <li><span className="font-semibold">HackerRank</span>, Problem Solving (Basic) Certificate</li>
              <li><span className="font-semibold">Corporate Readiness Program</span>, Batch 3 By UTC Global Academy</li>
              <li><span className="font-semibold">Corporate Readiness Program</span>, By UTC Global Academy</li>
              <li><span className="font-semibold">Workshop on Python</span>, Python Programming in a Pragmatic Approach</li>
              <li><span className="font-semibold">Webinar Participation</span>, Participated in Webinar with bongoDev</li>
              <li><span className="font-semibold">Cholera Vaccination</span>, organized by icddr,b, 2022</li>
              <li><span className="font-semibold">JavaScript Algorithms and Data Structures</span>, issued by freeCodeCamp on July, 2020</li>
              <li><span className="font-semibold">Responsive Web Design</span>, issued by freeCodeCamp on June, 2020</li>
            </ul>
          </Card>

          {/* Declaration */}
          <SectionTitle accent>Declaration</SectionTitle>
          <Card>
            I do solemnly affirm that the information contained herein is correct to the best of my knowledge and belief. If any false or incorrect information is quoted from this curriculum vita, under signed will be liable and take full responsibility.
            <div className="flex justify-end mt-6">
              <div className="flex flex-col items-center">
                <Image src="/signature.png" alt="Signature" width={120} height={40} className="mb-1" />
                <div className="border-t border-gray-400 w-32 text-center text-sm">Signature</div>
              </div>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
}

function SectionTitle({ children, icon, accent }: { children: React.ReactNode; icon?: React.ReactNode; accent?: boolean }) {
  return (
    <div className={`flex items-center gap-2 font-bold uppercase tracking-wide text-xs md:text-sm mb-1 ${accent ? 'text-green-700' : 'text-gray-700'}`}>
      {icon && <span>{icon}</span>}
      {children}
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white/90 rounded-xl shadow p-4 md:p-6 text-gray-800 print:bg-white print:shadow-none print:rounded-none print:p-0 text-justify">
      {children}
    </div>
  );
}

function ContactItem({ icon, text, link }: { icon: React.ReactNode; text: string; link?: string }) {
  return link ? (
    <a href={link} className="flex items-center gap-2 text-gray-700 hover:text-green-700 transition">
      <span className="text-lg">{icon}</span>
      <span className="truncate">{text}</span>
    </a>
  ) : (
    <div className="flex items-center gap-2 text-gray-700">
      <span className="text-lg">{icon}</span>
      <span className="truncate">{text}</span>
    </div>
  );
}

function TimelineItem({ title, subtitle, period, badge }: { title: string; subtitle: string; period: string; badge?: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-semibold text-gray-800">{title}</span>
          {badge && <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-semibold">{badge}</span>}
        </div>
        <div className="text-sm text-gray-600">{subtitle}</div>
        <div className="text-xs text-gray-400">{period}</div>
      </div>
    </div>
  );
}

function ProjectCard({ title, tech, desc }: { title: string; tech: string; desc: string }) {
  return (
    <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-xl shadow p-4 flex flex-col gap-1 border border-green-200">
      <div className="font-semibold text-gray-800">{title}</div>
      <div className="text-xs text-green-700 font-semibold">{tech}</div>
      <div className="text-sm text-gray-700">{desc}</div>
    </div>
  );
}

function BadgeItem({ title, subtitle, period, badge }: { title: string; subtitle: string; period: string; badge?: string }) {
  return (
    <div className="flex items-center gap-4 bg-blue-50 rounded-lg px-4 py-2 border-l-4 border-blue-400">
      <div className="flex-1">
        <div className="font-semibold text-gray-800">{title}</div>
        <div className="text-sm text-gray-600">{subtitle}</div>
      </div>
      <div className="flex flex-col items-end">
        <span className="bg-blue-200 text-blue-800 text-xs px-2 py-0.5 rounded-full font-semibold mb-1">{badge}</span>
        <span className="text-xs text-gray-400">{period}</span>
      </div>
    </div>
  );
} 