"use client"

import { useState } from "react"
import { Code, Database, Wrench } from "lucide-react"

// Skills Data - Customize these variables with your skills
const skillCategories = [
    {
        title: "Frontend Development",
        icon: Code,
        color: "from-purple-400 to-blue-400",
        skills: [
            {
                title: "Next.js",
                expertise: "9.0",
                icon: "/nextjs.svg",
                description: "Nextjs 14, Server Components, Static Generation, API Routes, Image Optimization",
            },
            {
                title: "JavaScript",
                expertise: "9.0",
                icon: "/javascript.svg",
                description: "ES6+, DOM manipulation, async programming",
            },
            {
                title: "React",
                expertise: "8.5",
                icon: "/react.svg",
                description: "Hooks, Context API, Redux, Next.js",
            },
            {
                title: "TypeScript",
                expertise: "8.0",
                icon: "/typescript-2048.png",
                description: "Type safety, interfaces, generics",
            },
            {
                title: "React Native",
                expertise: "7",
                icon: "/react-native-icon.png",
                description: "Expo, navigation, state management",
            },
            {
                title: "CSS/SCSS",
                expertise: "8.5",
                icon: "/css-3.svg",
                description: "Flexbox, Grid, animations, responsive design",
            },
            {
                title: "Tailwind CSS",
                expertise: "9.0",
                icon: "/tailwindcss.svg",
                description: "Utility-first, custom components, responsive",
            },
        ],
    },
    {
        title: "Backend Development",
        icon: Database,
        color: "from-blue-400 to-indigo-400",
        skills: [
            {
                title: "Node.js",
                expertise: "8.0",
                icon: "/nodejs.svg",
                description: "Express, API development, middleware",
            },
            {
                title: "Frappe",
                expertise: "8.5",
                icon: "/frappe-icon.png",
                description: "Express, API development, middleware",
            },
            {
                title: "Python",
                expertise: "8.5",
                icon: "/python.webp",
                description: "Django, Flask, data processing",
            },
            {
                title: "MariaDB",
                expertise: "7.0",
                icon: "/mariadb.png",
                description: "Complex queries, optimization, indexing",
            },
            {
                title: "MongoDB",
                expertise: "7.5",
                icon: "/mongodb.svg",
                description: "Aggregation, indexing, schema design",
            },
            {
                title: "Linux/Bash",
                expertise: "7.5",
                icon: "/linux.jpeg",
                description: "Bash Scripting, system administration, networking",
            },
            {
                title: "REST APIs",
                expertise: "8.5",
                icon: "/placeholder.svg?height=40&width=40&text=API",
                description: "RESTful design, authentication, documentation",
            },
        ],
    },
    {
        title: "Tools & Technologies",
        icon: Wrench,
        color: "from-indigo-400 to-purple-400",
        skills: [
            {
                title: "Jira",
                expertise: "7.5",
                icon: "/jira.webp",
                description: "Agile project management, sprint planning, issue tracking",
            },
            {
                title: "Git",
                expertise: "8.5",
                icon: "/git.svg",
                description: "Version control, branching, collaboration",
            },
            {
                title: "Docker",
                expertise: "7.0",
                icon: "/docker.webp",
                description: "Containerization, Docker Compose, deployment",
            },
            {
                title: "AWS",
                expertise: "6.5",
                icon: "/aws.png",
                description: "EC2, S3, Lambda, RDS",
            },
            {
                title: "Vite",
                expertise: "7.0",
                icon: "vite.svg",
                description: "Module bundling, optimization, plugins",
            },
            {
                title: "Figma",
                expertise: "6.0",
                icon: "/figma.png",
                description: "UI/UX design, prototyping, collaboration",
            },
        ],
    },
]

// Overall skill summary
const skillSummary = {
    totalSkills: skillCategories.reduce((acc, category) => acc + category.skills.length, 0),
    averageExpertise: (
        skillCategories.reduce(
            (acc, category) => acc + category.skills.reduce((sum, skill) => sum + Number.parseFloat(skill.expertise), 0),
            0,
        ) / skillCategories.reduce((acc, category) => acc + category.skills.length, 0)
    ).toFixed(1),
    yearsExperience: "5+",
    projectsCompleted: "50+",
}

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState(0)
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

    const CircularProgress = ({ percentage, size = 60 }: { percentage: number; size?: number }) => {
        const radius = (size - 8) / 2
        const circumference = radius * 2 * Math.PI
        const strokeDasharray = `${(percentage / 10) * circumference} ${circumference}`

        return (
            <div className="relative" style={{ width: size, height: size }}>
                <svg className="transform -rotate-90" width={size} height={size}>
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="transparent"
                        className="text-white/10"
                    />
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke="url(#gradient)"
                        strokeWidth="4"
                        fill="transparent"
                        strokeDasharray={strokeDasharray}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                    />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#a855f7" />
                            <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{percentage}</span>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-20 px-4" id="skills">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                        Technical Skills
                    </h1>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
                        A comprehensive overview of my technical expertise, tools, and technologies I work with to build amazing
                        digital experiences.
                    </p>

                    {/* Skills Summary */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                        {[
                            { label: "Total Skills", value: skillSummary.totalSkills, suffix: "" },
                            { label: "Avg. Expertise", value: skillSummary.averageExpertise, suffix: "/10" },
                            { label: "Experience", value: skillSummary.yearsExperience, suffix: " years" },
                            { label: "Projects", value: skillSummary.projectsCompleted, suffix: "" },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4 hover:bg-white/15 transition-all duration-300"
                            >
                                <div className="text-2xl font-bold text-white mb-1">
                                    {stat.value}
                                    <span className="text-sm text-white/60">{stat.suffix}</span>
                                </div>
                                <div className="text-white/60 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {skillCategories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCategory(index)}
                            className={`group relative backdrop-blur-md border rounded-2xl px-6 py-4 transition-all duration-300 hover:scale-105 ${activeCategory === index
                                ? "bg-white/20 border-white/30 text-white"
                                : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
                                }`}
                        >
                            <div className="flex items-center space-x-3">
                                <category.icon className="w-5 h-5" />
                                <div className="text-left">
                                    <div className="font-semibold">{category.title}</div>
                                    <div className="text-xs text-white/60">{category.skills.length} skills</div>
                                </div>
                            </div>

                            {/* Liquid hover effect */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-20 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500 ease-out -z-10`}
                            />
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories[activeCategory].skills.map((skill, index) => (
                        <div
                            key={skill.title}
                            className="group relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105"
                            onMouseEnter={() => setHoveredSkill(skill.title)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            {/* Liquid background effect */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${skillCategories[activeCategory].color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                            />

                            <div className="relative z-10">
                                {/* Skill Header */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center overflow-hidden">
                                            <img
                                                src={skill.icon || "/placeholder.svg"}
                                                alt={skill.title}
                                                className="w-8 h-8 object-contain"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement
                                                    target.style.display = "none"
                                                    target.nextElementSibling!.classList.remove("hidden")
                                                }}
                                            />
                                            <div className="hidden w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg flex items-center justify-center">
                                                <span className="text-white font-bold text-xs">
                                                    {skill.title.substring(0, 2).toUpperCase()}
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold">{skill.title}</h3>
                                            <p className="text-white/60 text-sm">Expertise Level</p>
                                        </div>
                                    </div>

                                    {/* Circular Progress */}
                                    <CircularProgress percentage={Number.parseFloat(skill.expertise)} />
                                </div>

                                {/* Linear Progress Bar */}
                                <div className="mb-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-white/80 text-sm">Proficiency</span>
                                        <span className="text-white font-semibold text-sm">{skill.expertise}/10</span>
                                    </div>
                                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                                        <div
                                            className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full transition-all duration-1000 ease-out`}
                                            style={{
                                                width: `${(Number.parseFloat(skill.expertise) / 10) * 100}%`,
                                                transitionDelay: `${index * 100}ms`,
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Skill Description */}
                                <p className="text-white/70 text-sm leading-relaxed">{skill.description}</p>

                                {/* Hover Effect Indicator */}
                                <div
                                    className={`absolute top-4 right-4 w-2 h-2 bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full transition-all duration-300 ${hoveredSkill === skill.title ? "scale-100 opacity-100" : "scale-0 opacity-0"
                                        }`}
                                />
                            </div>

                            {/* Floating glow effect */}
                            <div
                                className={`absolute -inset-1 bg-gradient-to-r ${skillCategories[activeCategory].color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500 -z-10`}
                            />
                        </div>
                    ))}
                </div>

                {/* Skills Legend */}
                <div className="mt-16 text-center">
                    <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 max-w-4xl mx-auto">
                        <h3 className="text-white font-semibold mb-4">Expertise Scale</h3>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                            {[
                                { range: "1-2", label: "Beginner", color: "from-red-400 to-orange-400" },
                                { range: "3-4", label: "Novice", color: "from-orange-400 to-yellow-400" },
                                { range: "5-6", label: "Intermediate", color: "from-yellow-400 to-blue-400" },
                                { range: "7-8", label: "Advanced", color: "from-blue-400 to-purple-400" },
                                { range: "9-10", label: "Expert", color: "from-purple-400 to-pink-400" },
                            ].map((level, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${level.color}`} />
                                    <div className="text-white/70">
                                        <span className="font-medium">{level.range}</span> - {level.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
