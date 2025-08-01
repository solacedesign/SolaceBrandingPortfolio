import { Copyright } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='py-40 footer-background flex justify-center items-center mt-40 relative'>
        <div className='flex gap-3 z-5 items-center justify-center'>
            <Copyright/>
            <span className='text-white text-2xl'>
                Solace Design Inc.
            </span>
        </div>

        <div className='bg-neutral-950 opacity-50 absolute w-full h-full top-0 right-0'></div>
    </footer>
)
}

export default Footer