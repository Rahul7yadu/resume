"use client"

import { useState } from "react"
import { Building2, Calendar, MapPin, GraduationCap, Code, Award, ChevronDown, ChevronUp } from "lucide-react"

// Experience Data - Customize these variables with your information
const currentRole = {
    company: "Klaimify Pvt Ltd",
    position: " Software Engineer",
    duration: "2023 - Present",
    location: "Raipur, India",
    type: "Full-time",
    description: "Leading development of scalable web applications and Frappe ERP solutions.",
    technologies: ["Frappe", "ErpNext", "Nextjs", "Node.js", "TypeScript", "AWS", "Docker", "MariaDB", "Redis"],
    achievements: [
        "Architected CG Tourism ERP platform handling 1000 daily bookings with integrated payment processing and multi-language support",
        "Built 5 custom ERPNext modules including Advanced Booking Engine, Tourist Activity Management, Dynamic Pricing System, reducing manual processing by 60%",
        "Integrated React.js/Next.js frontends with ERPNext using custom REST APIs, serving 200 concurrent users",
        "Customized ERPNext Education module with automated assessment workflows"
    ],
}

const previousExperience = [
    {
        company: "Bytelook Technologies",
        position: "Front End  Developer",
        duration: "2023 - 2024",
        location: "Raipur, India",
        type: "Full-time",
        description: "Developed and maintained full-stack applications for early-stage startup.",
        technologies: ["Reactjs", "Nextjs", "Nestjs", "Postgres", "Redis"],
        achievements: [
            "Built the entire frontend from scratch using Next.js",
            "Designed and implemented RESTful APIs",
            "Optimized database queries improving performance by 35%",
            "Collaborated with design team to create responsive UI/UX",
        ],
    },
    {
        company: "Zidio",
        position: "Frontend Developer Intern",
        duration: "2023 - 2023",
        location: "Remote",
        type: "Full-time",
        description: "Created responsive websites and web applications for various clients.",
        technologies: ["JavaScript", "React", "SCSS", "WordPress", "PHP"],
        achievements: [
            "learned and implemented React.js for dynamic web applications",
            "Improved website performance scores by average of 25%",
            "Established coding standards and best practices",
        ],
    },
]

const education = [
    {
        institution: "Shri Shankracharya Technical Campus",
        degree: "Bachelor of Technology in Computer Science",
        duration: "2019 - 2023",
        location: "Bhilai , Chhattisgarh , India",
        cgpa: "8.25/10",
        achievements: [
            "Organised annual tech fest with 100+ participants",
            "Oraganised Hackathon with 10+ teams",
        ],
    },
    {
        institution: "EC-Council",
        degree: "Certified Ethical Hacker Certificate",
        duration: "2025",
        location: "Online",
        achievements: [
            "Completed Certified Ethical Hacker (CEH) certification",
            "Gained practical skills in penetration testing and vulnerability assessment",
            "Learned to identify and exploit common security vulnerabilities in web applications",
            "Developed a solid understanding of ethical hacking methodologies and tools",
        ],
    },
]

export default function Experience() {
    const [expandedJob, setExpandedJob] = useState<number | null>(null)
    const [expandedEducation, setExpandedEducation] = useState<number | null>(null)

    const toggleJobExpansion = (index: number) => {
        setExpandedJob(expandedJob === index ? null : index)
    }

    const toggleEducationExpansion = (index: number) => {
        setExpandedEducation(expandedEducation === index ? null : index)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-20 px-4" id="experience">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                        Professional Experience
                    </h1>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        A journey through my software engineering career, showcasing the companies I&apos;ve worked with and the impact
                        I&apos;ve made.
                    </p>
                </div>

                {/* Current Role - Highlighted */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                        <Building2 className="w-8 h-8 mr-3 text-purple-400" />
                        Current Position
                    </h2>

                    <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl group hover:bg-white/15 transition-all duration-500">
                        {/* Liquid background effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-indigo-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{currentRole.position}</h3>
                                    <div className="flex flex-wrap items-center gap-4 text-white/70 mb-4">
                                        <span className="flex items-center">
                                            <Building2 className="w-4 h-4 mr-2" />
                                            {currentRole.company}
                                        </span>
                                        <span className="flex items-center">
                                            <Calendar className="w-4 h-4 mr-2" />
                                            {currentRole.duration}
                                        </span>
                                        <span className="flex items-center">
                                            <MapPin className="w-4 h-4 mr-2" />
                                            {currentRole.location}
                                        </span>
                                    </div>
                                </div>
                                <div className="backdrop-blur-sm bg-green-500/20 border border-green-400/30 rounded-full px-4 py-2">
                                    <span className="text-green-300 font-semibold text-sm">{currentRole.type}</span>
                                </div>
                            </div>

                            <p className="text-white/80 mb-6 leading-relaxed">{currentRole.description}</p>

                            {/* Technologies */}
                            <div className="mb-6">
                                <h4 className="text-white font-semibold mb-3">Technologies & Tools</h4>
                                <div className="flex flex-wrap gap-2">
                                    {currentRole.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-full px-3 py-1 text-sm text-white/90 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Achievements */}
                            <div>
                                <h4 className="text-white font-semibold mb-3 flex items-center">
                                    <Award className="w-4 h-4 mr-2 text-yellow-400" />
                                    Key Achievements
                                </h4>
                                <ul className="space-y-2">
                                    {currentRole.achievements.map((achievement, index) => (
                                        <li key={index} className="flex items-start text-white/80">
                                            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Previous Experience */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                        <Code className="w-8 h-8 mr-3 text-blue-400" />
                        Previous Experience
                    </h2>

                    <div className="space-y-6">
                        {previousExperience.map((job, index) => (
                            <div
                                key={index}
                                className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-xl group hover:bg-white/10 transition-all duration-500"
                            >
                                {/* Liquid hover effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 p-6">
                                    <div
                                        className="flex items-center justify-between cursor-pointer"
                                        onClick={() => toggleJobExpansion(index)}
                                    >
                                        <div className="flex-1">
                                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                                                <h3 className="text-xl font-bold text-white">{job.position}</h3>
                                                <div className="flex items-center space-x-4 text-white/60 text-sm">
                                                    <span className="flex items-center">
                                                        <Building2 className="w-3 h-3 mr-1" />
                                                        {job.company}
                                                    </span>
                                                    <span className="flex items-center">
                                                        <Calendar className="w-3 h-3 mr-1" />
                                                        {job.duration}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-4 text-white/60 text-sm mb-3">
                                                <span className="flex items-center">
                                                    <MapPin className="w-3 h-3 mr-1" />
                                                    {job.location}
                                                </span>
                                                <span className="backdrop-blur-sm bg-blue-500/20 border border-blue-400/30 rounded-full px-2 py-1 text-xs">
                                                    {job.type}
                                                </span>
                                            </div>
                                            <p className="text-white/70 text-sm">{job.description}</p>
                                        </div>
                                        <div className="ml-4">
                                            {expandedJob === index ? (
                                                <ChevronUp className="w-5 h-5 text-white/60 transition-transform duration-300" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5 text-white/60 transition-transform duration-300" />
                                            )}
                                        </div>
                                    </div>

                                    {/* Expanded Content */}
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-out ${expandedJob === index ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <div className="border-t border-white/10 pt-6">
                                            {/* Technologies */}
                                            <div className="mb-4">
                                                <h4 className="text-white font-semibold mb-2 text-sm">Technologies</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {job.technologies.map((tech, techIndex) => (
                                                        <span
                                                            key={techIndex}
                                                            className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-full px-2 py-1 text-xs text-white/80"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Achievements */}
                                            <div>
                                                <h4 className="text-white font-semibold mb-2 text-sm">Achievements</h4>
                                                <ul className="space-y-1">
                                                    {job.achievements.map((achievement, achIndex) => (
                                                        <li key={achIndex} className="flex items-start text-white/70 text-sm">
                                                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                                                            {achievement}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div>
                    <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                        <GraduationCap className="w-8 h-8 mr-3 text-indigo-400" />
                        Education
                    </h2>

                    <div className="space-y-6">
                        {education.map((edu, index) => (
                            <div
                                key={index}
                                className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-xl group hover:bg-white/10 transition-all duration-500"
                            >
                                {/* Liquid hover effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 p-6">
                                    <div
                                        className="flex items-center justify-between cursor-pointer"
                                        onClick={() => toggleEducationExpansion(index)}
                                    >
                                        <div className="flex-1">
                                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                                                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                                                <div className="flex items-center space-x-4 text-white/60 text-sm">
                                                    <span className="flex items-center">
                                                        <Building2 className="w-3 h-3 mr-1" />
                                                        {edu.institution}
                                                    </span>
                                                    <span className="flex items-center">
                                                        <Calendar className="w-3 h-3 mr-1" />
                                                        {edu.duration}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-4 text-white/60 text-sm">
                                                <span className="flex items-center">
                                                    <MapPin className="w-3 h-3 mr-1" />
                                                    {edu.location}
                                                </span>
                                                {edu.cgpa && (
                                                    <span className="backdrop-blur-sm bg-indigo-500/20 border border-indigo-400/30 rounded-full px-2 py-1 text-xs">
                                                        GPA: {edu.cgpa}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            {expandedEducation === index ? (
                                                <ChevronUp className="w-5 h-5 text-white/60 transition-transform duration-300" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5 text-white/60 transition-transform duration-300" />
                                            )}
                                        </div>
                                    </div>

                                    {/* Expanded Content */}
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-out ${expandedEducation === index ? "max-h-64 opacity-100 mt-6" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <div className="border-t border-white/10 pt-6">
                                            <h4 className="text-white font-semibold mb-2 text-sm">Achievements & Activities</h4>
                                            <ul className="space-y-1">
                                                {edu.achievements.map((achievement, achIndex) => (
                                                    <li key={achIndex} className="flex items-start text-white/70 text-sm">
                                                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
