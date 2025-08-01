'use client'

import React from 'react'
import { easeInOut, motion } from "motion/react"

const Heading = ({children, className}) => {
  return (
    <motion.h2 
    initial={{opacity: 0, y: 100}}
    whileInView={{opacity: 1, y: 0}}
    transition={{ease: easeInOut, duration: 1}}
    className={className + ' text-4xl font-bold text-primary-green uppercase'}>
        {children}
    </motion.h2>
)
}

export default Heading