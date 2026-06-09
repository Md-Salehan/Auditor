import React from 'react'
import { BrandOS, CTA, FloatingCollage, Hero, Manifesto, TeamUseCases, Testimonial, TrustStrip, Updates } from '../components'

function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <FloatingCollage />
      <Manifesto />
      <BrandOS />
      <TeamUseCases />
      <Testimonial />
      <Updates />
      <CTA />
    </>
  )
}

export default Home