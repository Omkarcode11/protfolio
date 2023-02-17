import React from 'react'
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons'

export default function Footer() {
  return (
    <footer className='h-64  pt-10'>
        <div className='w-5/6 mx-auto'>
    <SocialMediaIcons/>
    <div className='md:flex justify-center md:justify-between text-center'>
    <p className='font-playfair font-semibold text-2xl text-yellow' >Omkar Sonawane</p>
    <p className='font-playfair text-md text-yellow'>2022 . All Rights Reversed.</p>
    </div>

        </div>


    </footer>
  )
}
