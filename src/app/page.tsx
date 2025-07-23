"use client";

import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import { useTheme } from "next-themes";
export default function Home() {
  const { theme } = useTheme();
  console.log(theme);

  return (
    <main className="">
      <Header />
      <div className="flex flex-col gap-20 items-center justify-center max-w-7xl mx-auto">
        <Intro />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </main>
  );
}
