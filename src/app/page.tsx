"use client";

import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/ProjectsNew";
import Skills from "@/components/SkillsNew";

import { useTheme } from "next-themes";
export default function Home() {
  const { theme } = useTheme();
  console.log(theme);

  return (
    <main className="">
      <Intro />
      <Experience />
      <Projects />
      <Skills />

    </main>
  );
}
