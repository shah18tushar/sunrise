"use client";

import AboutUs from './components/AboutUs';
import CTA from './components/CTA';
import DataCenterInfo from './components/DataCenterInfo';
import ExpandingCarCards from './components/ExpandingCards';
import Faq from './components/Faq';
import Hero from './components/Hero'
import ImageSection from './components/ImageSection';
import Marquee from './components/Marquee';
import OurClients from './components/OurClients';
import OutsourcedService from './components/OutsourcedService';
import WhyChooseUs from './components/WhyChooseUs';

const page = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <OutsourcedService />
      <DataCenterInfo />
      <ExpandingCarCards />
      <WhyChooseUs />
      <ImageSection />
      <Faq />
      <OurClients />
      <CTA />
      <Marquee />
    </div>
  )
}

export default page