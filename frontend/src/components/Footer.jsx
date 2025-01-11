import React from 'react'
import { assets } from '../assets/assets'

export const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
            <h1 style={{fontFamily: "Prata, serif",fontWeight: "400",fontStyle: "normal",fontSize: "1.6em",color: "#e91e63", display: "flex",alignItems: "center",}}>
                    ELEGANCE
                </h1>
                <p className='w-full md:w-2/3 text-gray-600'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus vel quas vero voluptates facilis.Magnam alias, optio placeat vitae distinctio esse soluta veritatis cumque libero beatae!
                </p>
            </div>
            <div>
              <p className='text-xl font-medium mb-5'>COMPANY</p>
              <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy</li>
              </ul>
            </div>
            <div>
              <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
              <li>+1234567890</li>
              <li>contactelegance@gmail.com</li>
            </ul>
            </div>
        </div>

        <div><hr/>
        <p className='py-5 text-sm text-center'>
          Copyright 2025@ ELEGANCE.com - All Right Reserved
        </p>
        </div>
    </div>
  )
}
