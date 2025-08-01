import React from 'react'
import Heading from '../Heading/Heading'

const HomeVideoSection = () => {
  return (
    <section className='max-w-7xl mx-auto gap-20 py-40 flex flex-col'>
        <div className='flex justify-center w-1/2 mx-auto'>
            <Heading className={'text-center'}>
                Let me help make your vision 
                come to life
            </Heading>
        </div>

        <div className='h-100 bg-primary-green'>
            <video></video>
        </div>
    </section>
)
}

export default HomeVideoSection