"use client";
import Link from "next/link";
import { useState} from "react";
import {FaFacebookSquare, FaLinkedin, FaGithub, FaTwitterSquare, FaArrowUp, FaArrowRight} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from "next/image";

export default function Home() {

  const [active, setActive] = useState<string>("");

  const links = [
    { id: "about", label: "ABOUT" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "skills", label: "SKILLS" },
    { id: "projects", label: "PROJECTS" },
    { id: "education", label: "EDUCATION" },
  ];


const projects = [
    {
      title: "Resume Builder",
      description:
        "Web app for creating and customizing professional resumes with a clean and responsive layout. Users can easily input personal data and instantly preview their resume.",
      link: "https://resume-milestone5-p8b6j0kt2-munizazubairs-projects.vercel.app",
      skills: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "image-1.jpg",
    },
    {
      title: "E-Commerce Website",
      description:
        "A web app focused on a clean and user-friendly shopping experience. It features smooth navigation, dynamic product pages, and a responsive layout with a custom hamburger menu for smaller screens. Everything was built from scratch for a fully custom experience.",
      link: "https://hackathon-3-q2-final-k9d6zhee6-munizazubairs-projects.vercel.app",
      skills: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity"],
      image: "image-2.jpg"
    },
    {
      title: "E-Commerce Admin Dashboard",
      description:
        "A web app for managing the e-commerce store efficiently. It allows the admin to view, add, and edit products with an organized and responsive interface. Built with a focus on simplicity and control, it provides a smooth experience for handling store data and updates.",
      link: "https://hackathon-3-q2-admin-final-gq6xv85ft-munizazubairs-projects.vercel.app",
      skills: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity"],
      image: "image-3.jpg"
    },
    {
      title: "Password Strength Meter",
      description:
        "Interactive web app to check password strength in real time based on complexity and character patterns.",
      link: "https://password-strength-meter-assignment.streamlit.app/",
      skills: ["Streamlit", "Python"],
      image: "image-4.jpg"
    },
  ];



  return (
    <div className="bg-[#0a192f] flex flex-col justify-center items-center text-white min-h-screen w-full font-sans">

      <div className=" lg:px-0 xl:px-20 mt-16 flex flex-col lg:flex-row lg:justify-end lg:items-start lg:gap-28 gap-16 md:gap-24">

        {/* Left Column: Introduction */}
        <div className="px-6 sm:px-10 lg:w-2/4 lg:fixed lg:top-20 lg:left-20">
          <h1 className="font-bold text-[40px] sm:text-[50px] xl:text-[60px] pb-2">Muniza Zubair</h1>
          <span className="typewriter-wrapper">
            <h2 className="typewriter text-[16px] sm:text-[19px] xl:text-[22px] font-sans">Agentic AI Developer</h2>
          </span>
          <div>
          <p className="pt-4 text-[13px] sm:text-[15px] xl:text-[17px] text-[#8892b0]">I build practical AI agents while exploring the</p>
          <p className="text-[13px] sm:text-[15px] xl:text-[17px] text-[#8892b0]">future of intelligent applications.</p>
          </div>

          <div className="hidden lg:block lg:mt-4">
          <section className="pt-4 flex flex-col gap-3 sm:gap-5 lg:text-sm xl:text-md font-medium  ">
            {links.map((link) => (
        <Link
          key={link.id}
          href={`#${link.id}`}
          onClick={() => setActive(link.id)}
        >
          <span className="flex gap-2 items-center hover:text-[#c0c6d7] group">
            <div
              className={`h-[1px] bg-[#c0c6d7] transition-all duration-300  ${
                active === link.id ? "w-20" : "w-12 group-hover:w-20"
              }`}
            ></div>
            {link.label}
          </span>
        </Link>
      ))}
           </section>
           </div>

          <section className="pt-4 flex gap-3 sm:gap-5 lg:mt-10 text-[#8892b0] outline-none">
            <Link href={"https://github.com/munizazubair"}><FaGithub className="text-lg sm:text-xl md:text-2xl xl:text-3xl hover:text-[#c0c6d7]" /></Link>
            <Link href={"https://www.linkedin.com/in/muniza-zubair-0882b82b6/"}><FaLinkedin className="text-lg sm:text-xl md:text-2xl xl:text-3xl hover:text-[#c0c6d7]" /></Link>
            <Link href={`mailto:${"munnizazubairkhan@gmail.com"}`}><MdEmail className="text-lg sm:text-xl md:text-2xl  xl:text-3xl hover:text-[#c0c6d7]" /></Link>
            <Link href={"https://www.facebook.com/share/1CDDwV6N7G/"}><FaFacebookSquare className="text-lg sm:text-xl md:text-2xl  xl:text-3xl hover:text-[#c0c6d7]" /></Link>
            <Link href={"https://x.com/MunizaZubair"}><FaTwitterSquare className="text-lg sm:text-xl md:text-2xl  xl:text-3xl hover:text-[#c0c6d7]" /></Link>
          </section>
        </div>

        {/* Right Column: Content */}
        <div className="lg:w-2/4 flex flex-col lg:gap-28 gap-16 md:gap-24 lg:pr-14">

          {/* About Section */}
          <section id="about" className=" flex flex-col gap-2 relative">
<h2 className="blur-heading pl-6 sm:pl-8 font-bold text-[16px] sm:text-[18px] sticky top-0 block lg:hidden py-3 z-10">
  ABOUT
</h2>
<div className="px-6 sm:px-8 md:px-10 flex flex-col gap-2 text-[#8892b0] text-[13px] sm:text-[15px] xl:text-[14px] text-justify">
              <p>I’m an Agentic AI Developer passionate about creating intelligent applications and practical AI agents that connect tools, data, and users. My work lies at the intersection of frontend development and AI, combining clean, responsive design with smart, autonomous systems.</p>
              <p>Currently, I’m studying Agentic AI at the Governor’s Initiative for Artificial Intelligence and Computing (GIAIC). As part of my journey, I’ve taken part in hackathons such as developing an e-commerce website with Next.js, and completed multiple tests and challenges in both frontend development and agentic AI.</p>
              <p>I also have a strong foundation in HTML, CSS, TypeScript, Next.js, and Tailwind CSS, with a focus on crafting user-friendly, high-performance web experiences.</p>
              <p>I enjoy exploring emerging AI concepts, learning new technologies, and building projects that bridge the gap between design, engineering, and intelligence.</p>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="flex flex-col gap-6">
            <h2 className="blur-heading pl-6 sm:pl-8 font-bold text-[16px] sm:text-[18px] sticky top-0 block lg:hidden py-3 z-10">
  EXPERIENCE
</h2>
             <div className="px-6 sm:px-10 flex flex-col gap-8 text-[#8892b0] text-[13px] sm:text-[15px] lg:hover:bg-[#101d38] rounded-md lg:p-5 lg:px-5">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-10  lg:gap-6  xl:gap-12 items-start">
                <div className="w-full sm:w-[120px] md:w-[150px] font-medium text-[12px] sm:text-[13px] lg:text-[12px]">FEB 2023 — PRESENT</div>
                <div className="flex-1 flex flex-col gap-2">
                  <Link
  href="https://www.governorsindh.com/"
  className="group hover:text-[#4ddfd0] text-white text-[15px] sm:text-[16px] flex items-center gap-2 transition-colors duration-300"
>
  <span>
    Governor’s Initiative for Artificial Intelligence and Computing (GIAIC){" "}
    <FaArrowUp className="inline-block text-[15px] lg:text-[13px] sm:text-[16px] rotate-45 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
  </span>
</Link>


                  <p className="text-[13px] sm:text-[15px] lg:text-[13px] xl:text-[12px]">Gained hands-on experience through hackathons and project-based challenges at GIAIC, where I built frontend components and applied Agentic AI concepts. Worked collaboratively with peers and mentors to develop user-friendly and accessible web applications as part of my learning journey.</p>
                  <div className="flex flex-wrap gap-2 mt-2 text-[#4ddfd0]">
                    {["Frontend", "TypeScript", "Next.js", "Agentic AI"].map(skill => (
                      <span key={skill} className="bg-[#122b39] px-3 py-1 rounded-[15px] text-[12px] sm:text-[12px]">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="flex flex-col gap-6">
            <h2 className="blur-heading pl-6 sm:pl-8 font-bold text-[16px] sm:text-[18px] sticky top-0 block lg:hidden py-3 z-10">
  SKILLS
</h2>
            <div className="px-6 sm:px-10 flex flex-col gap-6 lg:gap-10">
              <div>
                <h3 className="text-white text-[14px] sm:text-[15px] mb-2">Frontend Development</h3>
                <div className="flex flex-wrap gap-3 text-[#4ddfd0] ">
                  {["HTML","CSS","TypeScript","Next.js","Tailwind CSS"].map(skill => (
                    <span key={skill} className="bg-[#1f2937] px-3 py-1 rounded text-[12px] sm:text-[13px]">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-white text-[14px] sm:text-[15px] mb-2" >AI & Emerging Tech</h3>
                <div className="flex flex-wrap gap-3 text-[#4ddfd0]">
                  {["Agentic AI","Project-Based Learning"].map(skill => (
                    <span key={skill} className="bg-[#1f2937] px-3 py-1 rounded text-[12px] sm:text-[13px]">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
           <section
      id="projects"
      className="flex flex-col gap-6 text-[13px] sm:text-[15px]"
    >
<h2 className="blur-heading pl-6 sm:pl-8 font-bold text-[16px] sm:text-[18px] sticky top-0 block lg:hidden py-3 z-10">
  PROJECTS
</h2>

      <div className="px-6  text-[#8892b0]  sm:px-10 flex flex-col gap-8  rounded-md lg:p-5 lg:px-5">
        {projects.map((proj, idx) => (
         <div
  key={idx}
  className="group lg:hover:bg-[#101d38] lg:p-4 flex flex-col sm:flex-row gap-2 sm:gap-10 lg:gap-6 xl:gap-12 items-start transition-colors duration-300"
>
  <div className="w-auto sm:w-[170px] md:w-[180px] lg:w-[150px] border-2 border-[#242d3e] rounded-[5px] font-medium text-[12px] sm:text-[13px] transition-all duration-300 group-hover:border-[#4e5665]">
    <Image
      src={`/${proj.image}`}
      alt={proj.title}
      width={300}
      height={300}
      className="rounded-[5px]"
    />
  </div>

  <div className="flex-1 flex flex-col gap-2">
    <Link
      href={proj.link}
      target="_blank"
      className="group/link hover:text-[#4ddfd0] text-white text-[15px] sm:text-[16px] flex items-center gap-2 transition-colors duration-300"
    >
      {proj.title}
      <FaArrowUp className="h-[13px] rotate-45 transform transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
    </Link>

    <p>{proj.description}</p>

    <div className="flex flex-wrap gap-2 mt-2 text-[#4ddfd0]">
      {proj.skills.map((skill) => (
        <span
          key={skill}
          className="bg-[#122b39] px-3 py-1 rounded-[15px] text-[12px] sm:text-[12px]"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
</div>

        ))}
      </div>

<div className="px-6 sm:px-10 mt-6">
  <Link
    href="/archive"
    className="group flex items-center gap-2 text-white font-medium text-[17px] w-fit"
  >
    <span className="border-b-1 border-transparent group-hover:border-[#64ffda] transition-all duration-300">
      View Full Project Archive
    </span>
    <span className="transition-transform duration-300 group-hover:translate-x-2 text-white">
      <FaArrowRight className="text-sm font-thin" />
    </span>
  </Link>
</div>


    </section>

          {/* Education Section */}
          <section id="education" className="flex flex-col gap-6">
<h2 className="blur-heading pl-6 sm:pl-8 font-bold text-[16px] sm:text-[18px] sticky top-0 block lg:hidden py-3 z-10">
  EDUCATION
</h2>            <div className="px-6 sm:px-10 flex flex-col gap-8 text-[#8892b0] text-[13px] sm:text-[15px] lg:hover:bg-[#101d38] rounded-md lg:p-5 lg:px-5">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 lg:gap-6 xl:gap-12 items-start">
                <div className="w-full sm:w-[120px] md:w-[150px] font-medium text-[12px] sm:text-[13px] lg:text-[12px]">SEP 2025 — Present</div>
                <div className="flex-1 flex flex-col gap-2">
                  <Link
  href="https://www.vu.edu.pk/"
  className="group hover:text-[#4ddfd0] text-white text-[15px] sm:text-[16px] flex items-center gap-2 transition-colors duration-300"
>
  Virtual University of Pakistan
  <FaArrowUp className="h-[13px] rotate-45 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
</Link>

                  <p>Bachelor of Science in Computer Science (BSCS)</p>
                  <p>Pursuing to strengthen my foundation in software development and AI.</p>
                </div>
              </div>
            </div>
          </section>

           {/* Footer */}
     {/* Footer for large screens */}
<footer className="mb-12 text-[#8892b0] text-[12px] sm:text-[13px] hidden lg:block">
  <span>&copy; 2025 Muniza - Built with Next.js & Tailwind CSS. Deployed on Vercel.</span>
</footer>
</div>
</div>
{/* Footer for small screens */}
<footer className="mt-16 mb-8 text-[#8892b0] text-[12px] sm:text-[13px] px-6 sm:px-8 lg:px-12 block lg:hidden">
  <span>&copy; 2025 Muniza - Built with Next.js & Tailwind CSS. Deployed on Vercel.</span>
</footer>


    </div>
  );
}














