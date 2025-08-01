import React from 'react'
import Paragraph from '../Paragraph/Paragraph'

const HomeHeroSection = () => {
  return (
    <section className=' w-ful h-screen hero-banner flex justify-center items-end relative'>
        <div className='flex flex-col justify-center items-center gap-10 mb-20'>
            <h1 className='font-bold text-5xl'>
                BRITTANY HOLMES
            </h1>

            <div className='w-5/6'>
                <Paragraph className={'text-center text-white'}>
                    I create custom visuals and websites that reflect the passion behind your work
                </Paragraph>
            </div>
        </div>

        <div className='flex flex-col gap-5 justify-center items-center absolute right-0 p-10 top-1/2'>
            <a>
                <img src="resumeicon.png" alt="" />
            </a>

            <a>
                <img src="linkedinicon.png" alt="" />
            </a>
        </div>
    </section>
)
}

export default HomeHeroSection