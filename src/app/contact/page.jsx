import React from 'react'
import Heading from '../components/Heading/Heading'
import Paragraph from '../components/Paragraph/Paragraph'
import Button from '../components/Button/Button'

const page = () => {
  return (
    <>
        <section className='max-w-7xl mx-auto py-40'>
            <div className='flex flex-col gap-40 justify-center items-center'>
                <Heading>How It Works</Heading>

                <div className='flex justify-between items-center w-full'>
                    <div className='flex flex-col gap-10 justify-center items-center'>
                        <img src="contact1.png" alt="" />
                        <Paragraph className={'!font-bold text-2xl uppercase'}>Share Your Vision</Paragraph>
                    </div>

                    <div className='flex flex-col gap-10 justify-center items-center'>
                        <img src="contact2.png" alt="" />
                        <Paragraph className={'!font-bold text-2xl uppercase'}>Build Together</Paragraph>
                    </div>

                    <div className='flex flex-col gap-10 justify-center items-center'>
                        <img src="contact3.png" alt="" />
                        <Paragraph className={'!font-bold text-2xl uppercase'}>Bring To Life</Paragraph>
                    </div>
                </div>
            </div>
        </section>

        <section className='max-w-7xl mx-auto py-40'>
            <form className='flex flex-col gap-10'>
                <div className='flex justify-center gap-10'>
                    <input type="text" placeholder='NAME'  
                    className='h-20 w-full border-2 border-primary-orange text-primary-orange
                    rounded-xl px-10 font-bold'
                    />

                    <input type="text" placeholder='E-MAIL'  
                    className='h-20 w-full border-2 border-primary-orange text-primary-orange
                    rounded-xl px-10 font-bold'
                    />
                </div>

                <div>
                    <textarea type="text" placeholder='MESSAGE'  
                    className='min-h-100 w-full border-2 border-primary-orange text-primary-orange
                    rounded-xl px-10 font-bold py-10'/>
                </div>
            </form>

            <div className='max-w-7xl mx-auto py-20 flex justify-start'>
                <Button className={'!bg-[#EAC6AC] rounded-lg'}>
                    Let's Start
                </Button>
            </div>
        </section>

        <section className='max-w-7xl mx-auto py-40'>
            <div className='flex flex-col justify-center items-center gap-20'>
                <Heading>
                    Vel velit sint sed alias earum qui molestiae vero
                </Heading>

                <div className='bg-neutral-300 h-120 w-1/4'></div>
            </div>
        </section>
    </>
  )
}

export default page