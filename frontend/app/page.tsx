"use client";

import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Journey } from "@/sections/Journey";
import { Contact } from "@/sections/Contact";
import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";
import { Blogs } from "@/sections/Blogs";


export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Journey />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
