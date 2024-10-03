import React from 'react';
import desk from '../assest/desk2.jpg';

const DeskSection = () => {
  return (
    <section className='mx-auto mt-[100px] w-full h-[600px] relative'>
      {/* Background Image */}
      <img src={desk} alt="Desk" className="w-full h-full object-cover" />

      {/* Overlay Text and Button */}
      <div className='absolute inset-0 flex flex-col justify-center items-center text-white'>
        <h1 className='text-center text-xl font-bold mb-6 lg:text-7xl md:text-4xl sm:text-xl'>
          Come and visit our co-<br/>working space today!
        </h1>
        <button className='bg-white rounded-full text-black p-2 px-6'>
          Browse all
        </button>
      </div>
    </section>
  );
};

export default DeskSection;
