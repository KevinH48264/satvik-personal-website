import React from 'react'
import { Font } from '../styles'
import ProjectCovidAbout from '../../components/About/projectCovidAbout'
import RunawayAbout from '../../components/About/runawayAbout'
import Featured from '../../components/Featured'
import VenturesTagline from '../../components/Tagline/venturesTagline'

const VenturesPage = () => (
  <Font>
    <VenturesTagline />
    <RunawayAbout />
    <ProjectCovidAbout />
    <Featured />
  </Font>
)

export default VenturesPage
