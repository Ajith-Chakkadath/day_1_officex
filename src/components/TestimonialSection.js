import React from "react";
import image1 from "../assest/image1.jpg";
import image2 from "../assest/image2.jpg";
import image3 from "../assest/image3.jpg";
import { IoIosCheckboxOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";

const TestimonialSection = () => {
  return (
    <section className="pl-12 mx-auto mt-[100px] ">
      <div>
        <div className="grid grid-cols-6 gap-2">
          <div className="col-span-2">
            <h2 className="text-xl">What Client say</h2>
          </div>
          <div className="col-span-4">
            <p className="text-6xl">
              We're trusted by the most <br /> Important teams
            </p>
            <div className="mt-[50px] flex gap-20">
              <div className="flex items-center gap-2">
                <IoIosCheckboxOutline className="text-green-600 " size={24} />
                <h1 className="text-lg font-bold">10K+ Customer</h1>
              </div>
              <div className="flex items-center gap-2">
                <IoIosCheckboxOutline className="text-green-600 " size={24} />
                <h1 className="text-lg font-bold">99% Satisfaction</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[50px] flex gap-3 overflow-hidden mb-[50px]">
            {/* card 1 */}
          <div className="w-[450px] h-[250px] bg-slate-300 rounded-xl p-5">
            <div className="flex items-center justify-between">
              <div className="w-16 h-16 ">
                <img
                  src={image1}
                  className="object-cover w-full h-full rounded-full"
                ></img>
              </div>
              <p>7 days ago</p>
            </div>
            <h1 className="text-4xl mt-5">
              "our entire team loved <br /> the office"
            </h1>
            <div className="mt-5 flex items-center justify-between">
              <h3>Sara Sarah jhon</h3>
              <div className="flex ">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStarOutline />
              </div>
            </div>
          </div>
 {/* card 2 */}
 <div className="w-[450px] h-[250px] bg-slate-300 rounded-xl p-5">
            <div className="flex items-center justify-between">
              <div className="w-16 h-16 ">
                <img
                  src={image2}
                  className="object-cover w-full h-full rounded-full"
                ></img>
              </div>
              <p>7 days ago</p>
            </div>
            <h1 className="text-4xl mt-5">
              ""Great Place <br /> Excellent service"
            </h1>
            <div className="mt-5 flex items-center justify-between">
              <h3>Phoneyet ihor</h3>
              <div className="flex ">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStarOutline />
              </div>
            </div>
          </div>
 {/* card 3 */}
 <div className="w-[450px] h-[250px] bg-slate-300 rounded-xl p-5">
            <div className="flex items-center justify-between">
              <div className="w-16 h-16 ">
                <img
                  src={image3}
                  className="object-cover w-full h-full rounded-full"
                ></img>
              </div>
              <p>7 days ago</p>
            </div>
            <h1 className="text-4xl mt-5">
              "Excellent Selection of <br /> office space avilable"
            </h1>
            <div className="mt-5 flex items-center justify-between">
              <h3>Jammey</h3>
              <div className="flex ">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStarOutline />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-1 bg-slate-500"></div>
        
      </div>
    </section>
  );
};

export default TestimonialSection;
