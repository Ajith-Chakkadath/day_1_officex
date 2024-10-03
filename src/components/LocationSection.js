import React from 'react'
import image1 from '../assest/image1.jpg'
import image2 from '../assest/image2.jpg'
import image3 from '../assest/image3.jpg'

const LocationSection = () => {
  return (
    <section className='p-6 lg:pl-12 mx-auto mt-[50px] lg:mt-[100px] '>
        <div >
        <div className='grid grid-cols-1 lg:grid-cols-6 gap-2'>
            <div className='lg:col-span-2'>
                <h2 className='text-sm lg:text-xl'>
                We are the next gen<br></br>
Coworking platfrom
                </h2>
            </div>
            <div className='lg:col-span-4'>
            <p className='text-xl lg:text-6xl'>
            Premier provider of office <br/> rental solutions for businesses  <br/> of all sizes flexible plan and  <br/>competitive rates
            </p>
            </div>

        </div>
        <div className='mt-[50px]  flex flex-col lg:flex-row gap-3 overflow-hidden'>
            <div className='w-[250px] h-[200px] lg:w-[500px] lg:h-[400px]  align-left'>
            <img src={image1} alt="Location 2" className="rounded-3xl object-cover w-[225px] h-[125px] lg:w-[450px] lg:h-[250px]" />
               
                <h1 className='mt-2 lg:mt-5 text-xl font-bold text-slate-700'>Market street</h1>
                <h3 className='lg:mt-2 text-l'>San franciso</h3>

            </div>
            <div className='hidden lg:block w-[500px] h-[400px]  align-left'>
            <img src={image2} alt="Location 2" className="rounded-3xl object-cover w-[450px] h-[250px]" />
                <h1 className='mt-5 text-xl font-bold text-slate-700'>Lanico Street</h1>
                <h3 className='mt-2 text-l'>Los Angeles</h3>

            </div>
            <div className='hidden lg:block w-[500px] h-[400px]  align-left'>
            <img src={image3} alt="Location 2" className="rounded-3xl object-cover w-[450px] h-[250px]" />
                <h1 className='mt-5 text-xl font-bold text-slate-700'>Broadway</h1>
                <h3 className='mt-2 text-l'>New York</h3>

            </div>

        </div>

        <div className='w-full h-1 bg-slate-500'>

        </div>
<div className='mt-[50px] text-center'>
<button className='bg-black rounded-full text-white  p-2 '>Search more</button>
</div>
        
        </div>
    </section>
  )
}

export default LocationSection