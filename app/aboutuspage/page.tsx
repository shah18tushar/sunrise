"use client";

import React from 'react'
import BreadCrumb from './BreadCrumb';
import AboutUs from './AboutUs';
import Timeline from './Timeline';
import WhoWeAre from './WhoWeAre';
import CTA from '../components/CTA';

const Page = () => {
  return (
    <div>
      <BreadCrumb />
      <AboutUs />
      <Timeline />
      <WhoWeAre />
      <CTA />
    </div>
  )
}

export default Page;