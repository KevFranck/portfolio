import React from 'react'
import Image from 'next/image'
import { Socials } from '@/constants'

const Navbar = () => {
  return (
    <nav className='fixed top-0 start-0 z-40 w-full bg-transparent flex justify-between items-center px-10 md:px-20'>
        <div className='flex flex-row gap-3 items-center'>
            <div className='relative'>
                <Image
                    src="/logo.jpeg"
                    alt='logo'
                    width={60}
                    height={50}
                    className='w-full h-full object-contain rounded-full'
                />
            </div>
            <h1 className='text-white text-[25px] font-semibold'>Developpement & Tech</h1>
        </div>

        <div className='flex flex-row gap-5 mb-2'>
            {Socials.map((social) =>(
                <Image
                    key={social.name}
                    src={social.src}
                    alt={social.name}
                    width={28}
                    height={28}
                />
            ))}
        </div>
    </nav>
  )
}

export default Navbar