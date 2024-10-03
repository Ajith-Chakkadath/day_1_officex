import React from 'react';
import image from '../assest/phone.jpg';
import { IoIosPeople } from "react-icons/io";

const SizeSection = () => {
  return (
    <section className='mt-[100px] mx-auto bg-black'>
      <div className='p-12 grid grid-cols-1 lg:grid-cols-2 gap-2 text-white'>
        {/* Left Text Section */}
        <div>
          <h2 className='text-sm text-white'>Any size location</h2>
          <h1 className='text-xl lg:text-6xl mt-4 lg:mt-28 leading-tight'>
            We Have Offices <br /> for any Team's Size
          </h1>
          <p className='text-sm lg:text-lg mt-5 leading-relaxed'>
            No matter how many people you need to <br />
            accommodate, we have offices that are <br />
            perfect for any team ranging from two to <br />
            2000+ people or more.
          </p>
          
          {/* Button Section */}
          <div className='flex justify-start mt-[50px]'>
            <button className='bg-white rounded-full text-black p-2 px-6'>
              Search more
            </button>
          </div>
        </div>

        {/* Right Image/Box Section */}
        <div className='relative flex justify-end'>
          <div className='w-[350px] h-[500px] relative'>
            {/* Image */}
            <img src={image} alt="Phone" className="object-cover w-full h-full rounded-xl" />
          </div>
          <div className='absolute bottom-56 left-24 lg:left-56 z-10 w-[200px] h-[70px] bg-slate-300 rounded-2xl p-2 flex items-center justify-around'>
            <div className='bg-white w-8 h-8 flex justify-center items-center rounded-full '>
            <IoIosPeople size={24} className='text-black '/>
            </div>
            <div className='text-black'>
<h1 className='text-md font-bold'>For Small Teams</h1>
<h2 className='text-sm'>2-8 peoples</h2>
            </div>
              
            </div>
            <div className='absolute bottom-32 left-24 lg:left-56 z-10 w-[200px] h-[70px] bg-slate-300 rounded-2xl p-2 flex items-center justify-around'>
            <div className='bg-white w-8 h-8 flex justify-center items-center rounded-full '>
            <IoIosPeople size={24} className='text-black '/>
            </div>
            <div className='text-black'>
<h1 className='text-md font-bold'>For Small Teams</h1>
<h2 className='text-sm'>2-8 peoples</h2>
            </div>
              
            </div>
            <div className='absolute bottom-8 left-24 lg:left-56 z-10 w-[200px] h-[70px] bg-slate-300 rounded-2xl p-2 flex items-center justify-around'>
            <div className='bg-white w-8 h-8 flex justify-center items-center rounded-full '>
            <IoIosPeople size={24} className='text-black '/>
            </div>
            <div className='text-black'>
<h1 className='text-md font-bold'>For Small Teams</h1>
<h2 className='text-sm'>2-8 peoples</h2>
            </div>
              
            </div>
        </div>
      </div>
    </section>
  );
};

export default SizeSection;
