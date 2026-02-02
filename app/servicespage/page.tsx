"use client";

import React from 'react'
import BreadCrumb from './BreadCrumb';
import ServicesDetails from './ServicesDetails';
import CTA from '../components/CTA';

const page = () => {
  return (
    <div>
        <BreadCrumb />
        <ServicesDetails />
        <CTA />
    </div>
  )
}

export default page