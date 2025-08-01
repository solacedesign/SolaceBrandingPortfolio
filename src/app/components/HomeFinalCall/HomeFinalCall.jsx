'use client'

import React from 'react'
import Paragraph from '../Paragraph/Paragraph'
import Heading from '../Heading/Heading'
import Button from '../Button/Button'
import { motion } from "motion/react"


const HomeFinalCall = () => {
  return (
    <section className='gap-10 py-40 bg-primary-orange overflow-hidden'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto '>
        
        <div className='flex flex-col gap-20 justify-center'>
          <div className='flex flex-col gap-10'>
            <Heading className={'text-white'}>
              Ready To Start?  
            </Heading>    

            <Paragraph className={'text-white'}>
              Lorem ipsum dolor sit amet. Ut dolores doloribus 
              ea quibusdam quae sed exercitationem totam et
              similique sunt aut repellat doloribus
            </Paragraph>
          </div>

          <div>
            <Button>
              Let's Talk
            </Button>
          </div>
        </div>

        <motion.div 
        initial={{x: 500, opacity: 0}}
        whileInView={{x: 0, opacity: 100}}
        transition={{duration: 1, ease: 'easeInOut'}}
        className='flex justify-end items-center'>
          <img src="headshot.png" alt="" className=''/>
        </motion.div>
      
      </div>
    </section>
  )
}

export default HomeFinalCall