"use client"
import React from 'react'
import Index from './pages/index'
import { ThemeProvider } from '@material-tailwind/react'

const Home = () => {
  return (
    <ThemeProvider>
      <Index />
    </ThemeProvider>
  )
}

export default Home