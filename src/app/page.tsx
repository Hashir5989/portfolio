import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Counter from '@/components/Home/Counter'
import Progresswork from '@/components/Home/WorkProgress';
import Services from '@/components/Home/Services';
import Skills from '@/components/Home/Skills';
import Portfolio from '@/components/SharedComponent/portfollio'
import Contactform from '@/components/Home/Contact';
export const metadata: Metadata = {
  title: "Abdulla Hashir Ali - Senior PHP/Laravel Developer Portfolio",
  description: "Portfolio of Abdulla Hashir Ali - Senior PHP/Laravel Developer with 5+ years of experience in ERP systems, APIs, and scalable web applications",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Counter isColorMode={false} />
      <Progresswork isColorMode={false} />
      <Services />
      <Skills />
      <Portfolio />
      <Contactform />
    </main>
  )
}
