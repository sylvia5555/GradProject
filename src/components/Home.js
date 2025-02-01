import React from 'react'
import Landing from './landing/Landing'
import MiniAbout from './landing/MiniAbout'
import ArtifactsShowcase from './landing/Artifacts/ArtifactsShowcase'
import Timeline from './landing/timeline/Timeline'
import Sound from './landing/soundsection/Sound'

export default function Home() {
  return (
    <div>
      <Landing />
      <MiniAbout/>
      <ArtifactsShowcase/>
      <Timeline />
    </div>
  )
}
