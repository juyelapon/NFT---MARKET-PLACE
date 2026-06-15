import React from 'react'
import sixthBannerImg from '../assets/SixthBanner.png' 
import cardeight from '../assets/card-eight.png'
import { IoEyeSharp } from "react-icons/io5";

const SIxth = () => {
  return (
    <section 
      className="w-full h-160 bg-cover bg-center bg-no-repeat relative mt-20"
      style={{ backgroundImage: `url(${sixthBannerImg})` }}
    >

      <div className="main-container h-full flex items-end pb-20">

        <div className="w-full flex justify-between items-end">

          {/* Left Content */}
          <div className="flex flex-col items-start gap-5">

            <div className="bg-[#3B3B3B] flex items-center gap-3 w-fit px-5 py-3 rounded-[20px]">
              <img 
                src={cardeight} 
                className="w-6 h-6 rounded-full object-cover" 
                alt="" 
              />

              <h5 className="font-work text-white text-[16px]">
                Shroomie
              </h5>
            </div>


            <h2 className="font-semibold font-work text-white text-[51px] leading-[110%]">
              Magic Mashrooms
            </h2>


            <button 
              className="flex items-center gap-3 font-work font-semibold text-[16px] 
              text-[#2B2B2B] rounded-[20px] px-10 py-4 bg-white"
            >
              <IoEyeSharp className="text-[#A259FF]" />
              See NFT
            </button>

          </div>



          {/* Timer */}
          <div className="bg-[rgb(59,59,59,.50)] w-73.75 p-7 rounded-[20px]">

            <h5 className="font-work text-white text-[12px] mb-3">
              Auction ends in:
            </h5>


            <div className="flex items-center gap-3">

              <div>
                <h3 className="font-bold text-[38px] text-white leading-none">
                  59
                </h3>
                <span className="text-white text-[12px]">
                  Hours
                </span>
              </div>


              <span className="text-white text-[28px]">:</span>


              <div>
                <h3 className="font-bold text-[38px] text-white leading-none">
                  59
                </h3>
                <span className="text-white text-[12px]">
                  Minutes
                </span>
              </div>


              <span className="text-white text-[28px]">:</span>


              <div>
                <h3 className="font-bold text-[38px] text-white leading-none">
                  59
                </h3>
                <span className="text-white text-[12px]">
                  Seconds
                </span>
              </div>


            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default SIxth