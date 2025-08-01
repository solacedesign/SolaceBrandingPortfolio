'use client'
import { motion } from "motion/react"
import React, { useState } from 'react'
import Heading from "../Heading/Heading"
import Paragraph from "../Paragraph/Paragraph"

const HomeExtraProjects = () => {


  return (
    <section className='max-w-7xl mx-auto py-40 flex flex-col gap-20'>
        <div className="mx-auto">
            <Heading>More Of My Work</Heading>
        </div>

        <div>
            <div className='border-t border-t-neutral-300 border-b border-b-neutral-300 py-10 flex justify-between relative'>
                <Heading>Project Title</Heading>
                <Paragraph>This will be a short description</Paragraph>

                <motion.div 
                initial={{opacity: 0}}
                whileHover={{opacity: 1, rotate: 10}}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] aspect-video bg-neutral-400 shadow-xl z-10">
                
                </motion.div>
            </div>
            <div className='border-t border-t-neutral-300 border-b border-b-neutral-300 py-10 flex justify-between relative'>
                <Heading>Project Title</Heading>
                <Paragraph>This will be a short description</Paragraph>

                <motion.div 
                initial={{opacity: 0}}
                whileHover={{opacity: 1, rotate: 10}}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] aspect-video bg-neutral-400 shadow-xl z-10">
                
                </motion.div>
            </div>
            <div className='border-t border-t-neutral-300 border-b border-b-neutral-300 py-10 flex justify-between relative'>
                <Heading>Project Title</Heading>
                <Paragraph>This will be a short description</Paragraph>

                <motion.div 
                initial={{opacity: 0}}
                whileHover={{opacity: 1, rotate: 10}}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] aspect-video bg-neutral-400 shadow-xl z-10">
                
                </motion.div>
            </div>
            <div className='border-t border-t-neutral-300 border-b border-b-neutral-300 py-10 flex justify-between relative'>
                <Heading>Project Title</Heading>
                <Paragraph>This will be a short description</Paragraph>

                <motion.div 
                initial={{opacity: 0}}
                whileHover={{opacity: 1, rotate: 10}}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] aspect-video bg-neutral-400 shadow-xl z-10">
                
                </motion.div>
            </div>
        </div>
    </section>
)
}

export default HomeExtraProjects