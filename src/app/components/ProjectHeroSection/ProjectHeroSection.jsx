import React from 'react'
import Heading from '../Heading/Heading'

const ProjectHeroSection = ({image, thumbnail, title}) => {
  return (
    <section className='py-40'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            <div className='flex items-center lg:col-span-2'>
                <img src={image} className=''/>
            </div>

            <div className='flex flex-col justify-center items-center gap-20'>
                <Heading>
                    {title}
                </Heading>

                <img src={thumbnail} alt=""  className='w-5/6'/>
            </div>
        </div>
    </section>
  )
}

export default ProjectHeroSection