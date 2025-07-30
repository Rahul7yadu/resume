"use client"
import { useState, useEffect } from "react"
import { Menu, X, Home, User, Briefcase, Mail, Settings } from "lucide-react"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navItems = [
        { name: "Home", icon: Home, href: "/#" },
        { name: "About", icon: User, href: "/#experience" },
        { name: "Projects", icon: Briefcase, href: "/#projects" },
        { name: "Skills", icon: Settings, href: "/#skills" },
        { name: "Contact", icon: Mail, href: "/#contact" },
        { name: "Blogs", icon: Settings, href: "/blogs" },
    ]

    return (
        <nav
            className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out ${scrolled ? "scale-95" : "scale-100"
                }`}
        >
            <div
                className={`relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl transition-all duration-300 ${isMenuOpen ? "rounded-3xl" : ""
                    }`}
            >
                {/* Liquid background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-indigo-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center px-6 py-3 space-x-1">
                    {navItems.map((item, index) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="group relative px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/20 hover:backdrop-blur-lg"
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            <div className="flex items-center space-x-2 relative z-10">
                                <item.icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                                <span className="text-white/90 font-medium text-sm group-hover:text-white transition-colors duration-300">
                                    {item.name}
                                </span>
                            </div>

                            {/* Liquid hover effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-blue-400/30 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-500 ease-out" />

                            {/* Ripple effect */}
                            <div className="absolute inset-0 bg-white/10 rounded-xl scale-0 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out" />
                        </a>
                    ))}
                </div>

                {/* Mobile Navigation Toggle */}
                <div className="md:hidden flex items-center justify-between px-6 py-3">
                    <div className="flex items-center space-x-2">

                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                            <img src="/code.png" alt="Logo" className="w-6 h-6" />
                        </div>
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="relative p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 group"
                    >
                        <div className="relative w-5 h-5">
                            <Menu
                                className={`absolute inset-0 w-5 h-5 text-white transition-all duration-300 ${isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                                    }`}
                            />
                            <X
                                className={`absolute inset-0 w-5 h-5 text-white transition-all duration-300 ${isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                                    }`}
                            />
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="px-6 pb-4 space-y-2">
                        {navItems.map((item, index) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="group flex items-center space-x-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/15 transition-all duration-300 transform hover:translate-x-2"
                                style={{
                                    animationDelay: `${index * 50}ms`,
                                }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <item.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" />
                                <span className="text-white/90 group-hover:text-white transition-colors duration-300">
                                    {item.name}
                                </span>

                                {/* Mobile item liquid effect */}
                                <div className="absolute right-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Floating glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-indigo-500/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        </nav>)
}