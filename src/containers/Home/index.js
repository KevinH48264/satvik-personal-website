import React from 'react'
import Navbar from '../../components/Navbar'
import { Font } from '../styles'
import About from '../../components/About'
import Featured from '../../components/Featured'
import Tagline from '../../components/Tagline'

const Home = () => (
  <Font>
    <Navbar />
    <Tagline />
    <About />
    <Featured />
  </Font>
)

export default Home
