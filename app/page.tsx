"use client";

import AboutUs from './components/AboutUs';
import ExpandingCarCards from './components/ExpandingCards';
import Faq from './components/Faq';
import Hero from './components/Hero'
import Marquee from './components/Marquee';

const page = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <ExpandingCarCards />
      <Faq />
      <Marquee />
    </div>
  )
}

export default page