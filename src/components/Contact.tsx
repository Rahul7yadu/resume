"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, ExternalLink, Copy, Check, FileText, Download, LinkedinIcon, GithubIcon, TwitterIcon } from "lucide-react"

// Contact Data - Customize these variables with your information
const contactInfo = {
    email: "rahulyadu17@gmail.com",
    phone: "+91 9284383291",
    location: "Raipur , Chhattisgarh, India",
    availability: "Available for freelance work",
    resume: {
        url: "/Rahul_yadu_resume.pdf", // or "https://your-resume-link.com"
        lastUpdated: "Updated Dec 2024",
    },
}
const quickActions = [

    {
        title: "Download Resume",
        description: "View my full resume",
        action: contactInfo.resume.url,
        icon: FileText,
        color: "from-purple-500 to-pink-500",
        isDownload: true,
    },

]
const socialLinks = [
    {
        name: "LinkedIn",
        username: "@rahul-yadu-457168203",
        url: "https://www.linkedin.com/in/rahul-yadu-457168203/",
        icon: LinkedinIcon,
        color: "from-blue-600 to-blue-400",
        description: "Professional network & career updates",
        followers: "600+",
    },
    {
        name: "GitHub",
        username: "@Rahul7yadu",
        url: "https://github.com/Rahul7yadu",
        icon: GithubIcon,
        color: "from-gray-800 to-gray-600",
        description: "Open source projects & code repositories",
        followers: "100",
    },
    {
        name: "Twitter",
        username: "@Rahul53520475",
        url: "https://x.com/Rahul53520475",
        icon: TwitterIcon,
        color: "from-blue-500 to-blue-300",
        description: "Tech thoughts & industry insights",
        followers: "100+",
    },
]



export default function Contact() {
    const [copiedItem, setCopiedItem] = useState<string | null>(null)
    const [hoveredSocial, setHoveredSocial] = useState<string | null>(null)

    const copyToClipboard = async (text: string, item: string) => {
        try {
            await navigator.clipboard.writeText(text)
            setCopiedItem(item)
            setTimeout(() => setCopiedItem(null), 2000)
        } catch (err) {
            console.error("Failed to copy: ", err)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-20 px-4" id="contact">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                        Let&apos;s Connect
                    </h1>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
                        Ready to collaborate? Reach out through any of these platforms or contact methods. I&apos;m always excited to
                        discuss new opportunities and interesting projects.
                    </p>

                    {/* Availability Status */}
                    <div className="inline-flex items-center backdrop-blur-md bg-green-500/20 border border-green-400/30 rounded-full px-6 py-3 mb-8">
                        <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse" />
                        <span className="text-green-300 font-semibold">{contactInfo.availability}</span>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-16">
                    {quickActions.map((action, index) => (
                        <a
                            key={action.title}
                            href={action.action}
                            {...(action.isDownload ? { download: true, target: "_blank" } : {})}
                            className="group relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-500 hover:scale-105"
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            {/* Liquid background effect */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-r ${action.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                            />

                            <div className="relative z-10 text-center">
                                <div
                                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${action.color} p-4 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <action.icon className="w-full h-full text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                                    {action.title}
                                </h3>
                                <p className="text-white/70 text-sm">{action.description}</p>
                                {action.isDownload ? (
                                    <Download className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors duration-300 mx-auto mt-2" />
                                ) : (
                                    <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors duration-300 mx-auto mt-2" />
                                )}
                            </div>

                            {/* Floating glow effect */}
                            <div
                                className={`absolute -inset-1 bg-gradient-to-r ${action.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500 -z-10`}
                            />
                        </a>
                    ))}
                </div>


                {/* Contact Information */}
                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 mb-16">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Contact Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: Mail, label: "Email", value: contactInfo.email, copyable: true },
                            { icon: Phone, label: "Phone", value: contactInfo.phone, copyable: true },
                            { icon: MapPin, label: "Location", value: contactInfo.location, copyable: false },
                        ].map((contact, index) => (
                            <div
                                key={contact.label}
                                className="group relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                                            <contact.icon className="w-6 h-6 text-white/80" />
                                        </div>
                                        <div>
                                            <div className="text-white/60 text-sm">{contact.label}</div>
                                            <div className="text-white font-medium">{contact.value}</div>
                                        </div>
                                    </div>
                                    {contact.copyable && (
                                        <button
                                            onClick={() => copyToClipboard(contact.value, contact.label)}
                                            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 group/copy"
                                        >
                                            {copiedItem === contact.label ? (
                                                <Check className="w-4 h-4 text-green-400" />
                                            ) : (
                                                <Copy className="w-4 h-4 text-white/60 group-hover/copy:text-white transition-colors duration-300" />
                                            )}
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Find Me Online</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center ">
                        {socialLinks.map((social, index) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105"
                                onMouseEnter={() => setHoveredSocial(social.name)}
                                onMouseLeave={() => setHoveredSocial(null)}
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                }}
                            >
                                {/* Liquid background effect */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                />

                                <div className="relative z-10 p-6">
                                    {/* Social Header */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center overflow-hidden">
                                                {/* <img
                                                    src={social.icon || "/placeholder.svg"}
                                                    alt={social.name}
                                                    className="w-8 h-8 object-contain"
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement
                                                        target.style.display = "none"
                                                        target.nextElementSibling!.classList.remove("hidden")
                                                    }}
                                                /> */
                                                    <social.icon />
                                                }

                                                <div
                                                    className={`hidden w-8 h-8 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center`}
                                                >
                                                    <span className="text-white font-bold text-xs">
                                                        {social.name.substring(0, 2).toUpperCase()}
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-white font-semibold">{social.name}</h3>
                                                <p className="text-white/60 text-sm">{social.username}</p>
                                            </div>
                                        </div>
                                        <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors duration-300" />
                                    </div>

                                    {/* Description */}
                                    <p className="text-white/70 text-sm mb-4 leading-relaxed">{social.description}</p>

                                    {/* Followers Count */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full" />
                                            <span className="text-white/60 text-xs">Followers</span>
                                        </div>
                                        <span className="text-white font-semibold text-sm">{social.followers}</span>
                                    </div>

                                    {/* Hover Effect Indicator */}
                                    <div
                                        className={`absolute top-4 right-4 w-2 h-2 bg-gradient-to-r ${social.color} rounded-full transition-all duration-300 ${hoveredSocial === social.name ? "scale-100 opacity-100" : "scale-0 opacity-0"
                                            }`}
                                    />
                                </div>

                                {/* Floating glow effect */}
                                <div
                                    className={`absolute -inset-1 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500 -z-10`}
                                />
                            </a>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    )
}
