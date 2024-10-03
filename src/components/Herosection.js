import React from 'react';
import desk from '../assest/desk.jpg';
import { MdArrowDropDown } from "react-icons/md";

const Herosection = () => {
  return (
    <section className='mx-auto'>
      <div className='relative h-screen'>
        {/* Background Image with Gradient */}
        <img src={desk} alt="Desk" className='w-full h-screen object-cover' />
        <div className='absolute inset-0 bg-gradient-to-b from-black/0 to-black'></div>

        {/* Navbar */}
        <nav className='absolute top-0 left-0 right-0 z-10 p-6'>
          <ul className='flex justify-between items-center text-white text-lg lg:text-3xl'>
            <li><a href="#" className='hover:text-gray-300'>About</a></li>
            <li><a href="#" className='hover:text-gray-300'>Space</a></li>
            <li><a href="#" className='hover:text-gray-300'>Location</a></li>
            <li><a href="#" className='hover:text-gray-300'>Contact</a></li>
          </ul>
        </nav>

        {/* Centered Officex Text */}
        <div className='absolute p-6 top-10 left:20 lg:left-40 z-10'>
          <h1 className='text-white text-[90px] lg:text-[300px] font-bold'>Officex</h1>
        </div>

        {/* Text on the Left */}
        <div className='absolute bottom-36 left-10 z-10'>
          <h1 className='text-white text-xl  lg:text-5xl font-bold'>Find your Next<br/>
Coworking office</h1>
          <p className='text-white text-sm lg:text-lg mt-4'>Find & make your interior ready stand out<br/> from the box</p>
          <div className='mt-4 bg-white text-black p-2 flex justify-between gap-4 rounded-full'>
  {/* Locations */}
  <div className='flex items-center w-14 lg:w-28 justify-between '>
    <h3 className='text-base'>Locations</h3>
    <MdArrowDropDown />
  </div>
  
  {/* Size with a vertical line on the left */}
  <div className='flex items-center w-14  lg:w-28 justify-between border-l pl-2 border-black '>
    <h3 className='text-base'>Size</h3>
    <MdArrowDropDown />
  </div>
  
  {/* City with a vertical line on the left */}
  <div className='flex items-center w-14 lg:w-28 justify-between border-l pl-2 border-black '>
    <h3 className='text-base'>City</h3>
    <MdArrowDropDown />
  </div>
  <div className='w-14 lg:w-28 bg-black p-2 rounded-full'>
        <h1 className='text-white text-center text-sm'>Search Now</h1>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Herosection;
