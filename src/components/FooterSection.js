import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const FooterSection = () => {
  return (
    
        <section className='container mx-auto mt-[100px]' >
<h1 className='text-[320px] text-center font-bold'>Officex</h1>

<div className='mt-[50px] grid grid-cols-2 mb-[50px]'>
<div>
    <h1 className='text-2xl font-bold'>Subscribe to our <br></br> Newsletter</h1>
    <div className='mt-[20px] flex justify-between items-center w-2/6' >
    <h1>Your Email</h1>
    <IoIosArrowRoundForward />

    </div>
    <div className='h-[1px] bg-slate-500 w-2/6'></div>   
</div>

<div className='flex justify-end gap-5'>
    <div>
        <h2 className='text-2xl text-slate-300'>About</h2>
        <ul>
            <li className='text-md'>Our story</li>
            <li className='text-md'>Our Team</li>
            <li className='text-md'>Our News</li>
            <li className='text-md'>Our blog</li>
        </ul>
    </div>
    <div>
        <h2 className='text-2xl text-slate-300'>Space</h2>
        <ul>
            <li className='text-md'>Small Team</li>
            <li className='text-md'>Medium Team</li>
            <li className='text-md'>Large Team</li>
            <li className='text-md'>Coporate</li>
        </ul>
    </div>
    <div>
        <h2 className='text-2xl text-slate-300'>Location</h2>
        <ul>
            <li className='text-md'>New York</li>
            <li className='text-md'>Chicogo</li>
            <li className='text-md'>Los angles</li>
            <li className='text-md'>SansFrancio</li>
        </ul>
    </div>
</div>
</div>
        </section>

  )
}

export default FooterSection