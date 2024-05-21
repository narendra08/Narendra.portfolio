import React from 'react'
import { Header1 } from '../Header/Header1'
import { Body } from '../Body/Body'
import TextAnimation from '../Animation/Animation2'
import { LineBreak } from '../Line-break/LineBreak'
import { Skills } from '../Skills/Skills'
import { Projects } from '../Projects/Projects'
import Blogs from '../Blogs/Blogs'
import About from '../About/About'
import Contact from '../Contact/Contact'
import "./Home.css"
export const Home = () => {
  return (
    <div className='Home' id='Home'>
      <Header1/>
      <Body/>
      <TextAnimation/>
      <Skills/>
      <Projects/>
      <Blogs/>
      <About/>
      <Contact/>
    </div>
  )
}
