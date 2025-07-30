"use client"

import { useState } from "react"
import { Github, ExternalLink, Code, Star, Eye } from "lucide-react"

// Projects Data - Customize these variables with your projects
const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description:
            "A full-stack e-commerce platform with advanced features including real-time inventory management, payment processing, and admin dashboard. Built with modern technologies for optimal performance and user experience.",
        image: "/ecommerce.png",
        technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
        githubUrl: "https://github.com/Rahul7yadu/e-commerce-frontend",
        liveUrl: "https://e-commerce-backend-rosy.vercel.app/",
        status: "Completed",
        featured: true,
        stats: {
            stars: 124,
            views: "2.3k",
        },
    },
    {
        id: 2,
        title: "Devconnect",
        description:
            "connect with developer around the world and share experience",
        image: "/devconnect.png",
        technologies: ['JavaScript', 'ReactJs', 'Redux', 'Nodejs', 'Expressjs', 'mongoDB'],
        githubUrl: "https://github.com/Rahul7yadu/Devconnect3",
        liveUrl: "https://devconnector-rahul.cyclic.app/",
        status: "Completed",
        featured: true,
        stats: {
            stars: 1,
            views: "100",
        },
    },
    {
        id: 5,
        title: "Movies Ai",
        description:
            "surf movies , Tv shows with AI",
        image: "/movies-ai.png",
        technologies: ['Nextjs', 'ReactJs', 'TailwindCSS', 'Google Gemini API'],
        githubUrl: "https://github.com/Rahul7yadu/movies-ai",
        liveUrl: "https://movies-ai-chat.vercel.app/",
        status: "In Progress",
        featured: true,
        stats: {
            stars: 203,
            views: "4",
        },
    },
    {
        id: 3,
        title: "Taskio",
        description:
            "a Task app to keep record of your task",
        image: "/taskio3.png",
        technologies: ['Typescript', 'ReactJs', 'TailwindCSS', 'Firebase'],
        githubUrl: "https://github.com/Rahul7yadu/Taskio-firebase",
        liveUrl: "https://todos-aa10d.web.app/",
        status: "Completed",
        featured: true,
        stats: {
            stars: 67,
            views: "200",
        },
    },
    {
        id: 4,
        title: "Astronomy - Nasa Photo of the Day",
        description:
            "get a picture of a day from nasa",
        image: "/nasa-potd.png",
        technologies: ['JavaScript', 'ReactJs', 'Material UI'],
        githubUrl: "https://github.com/Rahul7yadu/nasa-potd",
        liveUrl: "https://nasa-potd-nine.vercel.app/",
        status: "Completed",
        featured: false,
        stats: {
            stars: 156,
            views: "3.1k",
        },
    },

    {
        id: 6,
        title: "Reactionary(React Dictionary)",
        description:
            "a simple web app for searching meaning of words",
        image: "/react-dictionary.png",
        technologies: ['JavaScript', 'ReactJs', 'Material-UI',],
        githubUrl: "https://github.com/Rahul7yadu/React-Dictionary",
        liveUrl: "https://react-dictionary-302df.web.app/",
        status: "Completed",
        featured: false,
        stats: {
            stars: 45,
            views: "890",
        },
    },
]

export default function Projects() {
    const [filter, setFilter] = useState<"all" | "featured" | "completed" | "in-progress">("all")
    const [hoveredProject, setHoveredProject] = useState<number | null>(null)

    const filteredProjects = projects.filter((project) => {
        if (filter === "all") return true
        if (filter === "featured") return project.featured
        if (filter === "completed") return project.status === "Completed"
        if (filter === "in-progress") return project.status === "In Progress"
        return true
    })

    const filterButtons = [
        { key: "all", label: "All Projects", count: projects.length },
        { key: "featured", label: "Featured", count: projects.filter((p) => p.featured).length },
        { key: "completed", label: "Completed", count: projects.filter((p) => p.status === "Completed").length },
        { key: "in-progress", label: "In Progress", count: projects.filter((p) => p.status === "In Progress").length },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-20 px-4" id='projects'>
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                        Featured Projects
                    </h1>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
                        A showcase of my development work, featuring full-stack applications, innovative solutions, and creative
                        implementations using modern technologies.
                    </p>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {filterButtons.map((button) => (
                            <button
                                key={button.key}
                                onClick={() => setFilter(button.key as any)}
                                className={`group relative backdrop-blur-md border rounded-full px-6 py-3 transition-all duration-300 hover:scale-105 ${filter === button.key
                                    ? "bg-white/20 border-white/30 text-white"
                                    : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                <div className="flex items-center space-x-2">
                                    <span className="font-medium">{button.label}</span>
                                    <span className="text-xs bg-white/20 rounded-full px-2 py-1">{button.count}</span>
                                </div>

                                {/* Liquid hover effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out -z-10" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="group relative backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105"
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            {/* Liquid background effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Featured Badge */}
                            {project.featured && (
                                <div className="absolute top-4 left-4 z-20 backdrop-blur-sm bg-yellow-500/20 border border-yellow-400/30 rounded-full px-3 py-1">
                                    <div className="flex items-center space-x-1">
                                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                        <span className="text-yellow-300 text-xs font-semibold">Featured</span>
                                    </div>
                                </div>
                            )}

                            {/* Status Badge */}
                            <div className="absolute top-4 right-4 z-20">
                                <div
                                    className={`backdrop-blur-sm border rounded-full px-3 py-1 ${project.status === "Completed"
                                        ? "bg-green-500/20 border-green-400/30"
                                        : "bg-orange-500/20 border-orange-400/30"
                                        }`}
                                >
                                    <span
                                        className={`text-xs font-semibold ${project.status === "Completed" ? "text-green-300" : "text-orange-300"
                                            }`}
                                    >
                                        {project.status}
                                    </span>
                                </div>
                            </div>

                            <div className="relative z-10">
                                {/* Project Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                                    {/* Overlay Actions */}
                                    <div
                                        className={`absolute inset-0 flex items-center justify-center space-x-4 transition-all duration-300 ${hoveredProject === project.id ? "opacity-100" : "opacity-0"
                                            }`}
                                    >
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="backdrop-blur-md bg-white/20 border border-white/30 rounded-full p-3 hover:bg-white/30 transition-all duration-300 hover:scale-110"
                                        >
                                            <Github className="w-5 h-5 text-white" />
                                        </a>
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="backdrop-blur-md bg-white/20 border border-white/30 rounded-full p-3 hover:bg-white/30 transition-all duration-300 hover:scale-110"
                                        >
                                            <ExternalLink className="w-5 h-5 text-white" />
                                        </a>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center space-x-3 text-white/60 text-sm">
                                            <div className="flex items-center space-x-1">
                                                <Star className="w-3 h-3" />
                                                <span>{project.stats.stars}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <Eye className="w-3 h-3" />
                                                <span>{project.stats.views}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-white/70 text-sm mb-4 leading-relaxed line-clamp-3">{project.description}</p>

                                    {/* Technologies */}
                                    <div className="mb-6">
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs text-white/90 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 group/btn relative backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl px-4 py-2 hover:bg-white/20 transition-all duration-300"
                                        >
                                            <div className="flex items-center justify-center space-x-2">
                                                <Github className="w-4 h-4 text-white/80 group-hover/btn:text-white transition-colors duration-300" />
                                                <span className="text-white/80 group-hover/btn:text-white text-sm font-medium transition-colors duration-300">
                                                    Code
                                                </span>
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-xl scale-0 group-hover/btn:scale-100 transition-transform duration-300 -z-10" />
                                        </a>

                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 group/btn relative backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl px-4 py-2 hover:bg-white/20 transition-all duration-300"
                                        >
                                            <div className="flex items-center justify-center space-x-2">
                                                <ExternalLink className="w-4 h-4 text-white/80 group-hover/btn:text-white transition-colors duration-300" />
                                                <span className="text-white/80 group-hover/btn:text-white text-sm font-medium transition-colors duration-300">
                                                    Live
                                                </span>
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-xl scale-0 group-hover/btn:scale-100 transition-transform duration-300 -z-10" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Floating glow effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-indigo-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 -z-10" />
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-16">
                        <Code className="w-16 h-16 text-white/30 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-white/60 mb-2">No projects found</h3>
                        <p className="text-white/40">Try adjusting your filter to see more projects.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
