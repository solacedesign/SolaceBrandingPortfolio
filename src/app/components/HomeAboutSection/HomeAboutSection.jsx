import React from 'react'
import Paragraph from '../Paragraph/Paragraph'
import Heading from '../Heading/Heading'

const HomeAboutSection = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto gap-10 py-40'>
        <div className='flex items-center'>
            <p className='text-3xl text-primary-green'>
                Vel velit sint sed alias earum 
                qui molestiae vero eum itaque veritatis.
            </p>
        </div>

        <div className='h-120 bg-primary-orange'>

        </div>

        <div className='flex flex-col justify-center gap-10'>
            <Heading>
                Hey, I'm Brittany
            </Heading>

            <Paragraph>
                Lorem ipsum dolor sit amet. Ut dolores doloribus 
                ea quibusdam quae sed exercitationem totam et
                similique sunt aut repellat doloribus. Sed 
                aut iure quae est vitae molestias id voluptatem
                adipisci non quae recusandae non maiores odit 
                epudiandae doloribus. 
            </Paragraph>
        </div>
    </section>
  )
}

export default HomeAboutSection