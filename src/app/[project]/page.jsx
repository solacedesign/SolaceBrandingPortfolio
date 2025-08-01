'use client'

import React from 'react'
import Heading from '../components/Heading/Heading'
import { useParams } from 'next/navigation'
import { projects } from '../data'
import ProjectHeroSection from '../components/ProjectHeroSection/ProjectHeroSection'
import Paragraph from '../components/Paragraph/Paragraph'
import Button from '../components/Button/Button'

const page = () => {

    const params = useParams()
    console.log(params)

  return (
    <>
        <ProjectHeroSection image={projects[params.project].banner} thumbnail={projects[params.project].thumbnail} title={projects[params.project].title}/>

        <section className='max-w-7xl mx-auto flex flex-col gap-20 py-20'>
            <Heading className={'text-center'}>
                Vel velit sint sed alias earum qui molestiae vero
            </Heading>

            <div className='w-4/6 mx-auto'>
                <Paragraph className={'text-center'}>
                    Lorem ipsum dolor sit amet. Ut dolores doloribus 
                    ea quibusdam quae sed exercitationem totam et
                    similique sunt aut repellat doloribus. Sed 
                    aut iure quae est vitae molestias id voluptatem
                    adipisci non quae recusandae non maiores odit 
                    epudiandae doloribus. 
                </Paragraph>
            </div>
        </section>

        <div className='py-40'>
            {projects[params.project].projectDetails.map((projectDetail, index) => (
            <section className="mx-auto flex" key={index}>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className={index % 2 == 0 ? 'order-last' : 'order-first'}>
                        <img
                        src={projectDetail.image}
                        className="w-full h-full"
                        alt=""
                        />
                    </div>

                    <div className="flex justify-center items-center text-center bg-primary-orange py-40 px-20">
                        <div className="w-1/2">
                        <p className="text-white text-center">
                            Lorem ipsum dolor sit amet. Ut dolores doloribus ea quibusdam
                            quae sed exercitationem totam et similique sunt aut repellat
                            doloribus.
                        </p>
                        </div>
                    </div>
                </div>
            </section>
            ))}
        </div>

        <div className='max-w-7xl mx-auto py-20 flex justify-center'>
            <Button className={'!bg-[#EAC6AC] rounded-lg'}>
                View Full Project
            </Button>
        </div>
    </>
  )
}

export default page