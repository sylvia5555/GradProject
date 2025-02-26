import React from 'react'
import Landing from './landing/Landing'
import MiniAbout from './landing/MiniAbout'
import ArtifactsShowcase from './landing/Artifacts/ArtifactsShowcase'
import Timeline from './landing/timeline/Timeline'
import Testimonials from "./Testemonials/Testimonials"
import Sound from './landing/soundsection/Sound'
import "./landing/landing.css"
import Mobile from './landing/mobile/Mobile'

export default function Home() {
  return (
    <div>
      <Landing />
      <MiniAbout/>
      <ArtifactsShowcase/>
      <div className='background'>
      </div>
      <Timeline />
      <Testimonials />
      <Mobile />
    </div>
  )
}
