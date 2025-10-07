"use client";
import Link from "next/link";
import { FaArrowLeft, FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function ProjectArchive() {
  const projects = [
    {
      year: "2024",
      title: "Resume Builder",
      link: "https://resume-milestone5-p8b6j0kt2-munizazubairs-projects.vercel.app",
      builtWith: "Next.js, Tailwind CSS, TypeScript",
    },
    {
      year: "2025",
      title: "E-Commerce Website",
      link: "https://hackathon-3-q2-final-k9d6zhee6-munizazubairs-projects.vercel.app",
      builtWith: "Next.js, Tailwind CSS, Sanity",
    },
    {
      year: "2025",
      title: "E-Commerce Admin Dashboard",
      link: "https://hackathon-3-q2-admin-final-gq6xv85ft-munizazubairs-projects.vercel.app",
      builtWith: "Next.js, Tailwind CSS",
    },
    {
      year: "2025",
      title: "Password Strength Meter",
      link: "https://password-strength-meter-assignment.streamlit.app/",
      builtWith: "Streamlit, Python",
    },
    {
      year: "2025",
      title: "BMI Calculator",
      link: "https://bmi-bodymassindex-calculator.streamlit.app/",
      builtWith: "Streamlit, Python",
    },
    {
      year: "2025",
      title: "Unit Converter",
      link: "https://unit-converter-akfcsprxsqgtmkwowwurvr.streamlit.app/",
      builtWith: "Streamlit, Python",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a192f] text-white px-4 sm:px-8 md:px-20 py-16">
      {/* Back link */}
      <Link
        href="/"
        className="group flex items-center w-fit gap-1.5 text-[#64ffda] text-base sm:text-lg font-medium mb-4"
      >
        <FaArrowLeft className="text-sm transform transition-transform duration-200 group-hover:-translate-x-2" />
        <span className="font-medium">Muniza Zubair</span>
      </Link>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8">
        All Projects
      </h1>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg">
        <table className="w-full border-t border-[#233554] text-left text-sm sm:text-base">
          <thead>
            <tr className="text-[#8892b0] border-b border-[#233554]">
              <th className="py-3 px-2 sm:px-4 font-medium w-[70px] sm:w-[100px]">
                Year
              </th>
              <th className="py-3 px-2 sm:px-4 font-medium">Project</th>
              <th className="py-3 px-2 sm:px-4 font-medium hidden xl:table-cell">
                Built with
              </th>
              <th className="py-3 px-2 sm:px-4 font-medium hidden sm:table-cell">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr
                key={index}
                className="border-b border-[#233554] hover:bg-[#112240] transition"
              >
                <td className="py-3 px-2 sm:px-4 text-[#8892b0] text-sm sm:text-base">
                  {project.year}
                </td>
                <td className="py-3 px-2 sm:px-4 font-semibold text-[15px] sm:text-[17px]">
                  {project.title}
                </td>
                <td className="py-3 px-2 sm:px-4 hidden xl:table-cell">
                  <div className="flex flex-wrap gap-2 mt-2 text-[#4ddfd0]">
                    {project.builtWith.split(", ").map((tech, i) => (
                      <span
                      key={i}
                      className="bg-[#122b39] px-3 py-1 rounded-[15px] text-[12px]  font-semibold sm:text-[13px]"
                      >
                        {tech}
                        </span>
                      ))}
                      </div>
                      </td>

                <td className="py-3 px-2 sm:px-4">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="flex items-center gap-1 text-[#64ffda] text-sm sm:text-base hover:underline"
                  >
                    <FaArrowUpRightFromSquare className="text-xs sm:text-sm" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
