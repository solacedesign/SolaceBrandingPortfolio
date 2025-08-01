import React from 'react'
import Heading from '../Heading/Heading'
import Link from 'next/link'

const HomeProjectsSection = () => {
  return (
    <section className='max-w-7xl mx-auto gap-20 py-40  flex flex-col'>
        <div className='flex justify-center'>
            <Heading>
                My Top 5 Projects
            </Heading>
        </div>


        <div className='grid grid-cols-1 md:grid-cols-6 gap-5'>
            <Link href={'0'} className='bg-neutral-200 w-full h-100 md:col-span-2'>
                <div className='bg-neutral-200 w-full h-100 md:col-span-2'>
                    
                </div>
            </Link>
            <Link href={'1'}>
                <div className='bg-neutral-200 w-full h-100'>
                    
                </div>
            </Link>

            <div className='w-full h-100 flex flex-col gap-5'>
                <div className='bg-neutral-200 h-full'>

                </div>

                <div className='bg-neutral-200 h-full'>

                </div>
            </div>

            <Link href={'0'} className='bg-neutral-200 w-full h-100 md:col-span-2'>
                <div className='bg-neutral-200 w-full h-100 md:col-span-2'>
                    
                </div>
            </Link>
        </div>
    </section>
)
}

export default HomeProjectsSection