import React from 'react'
import onee from '../assets/onee.png'
import one from '../assets/one.png'
import two from '../assets/two.png'
import three from '../assets/three.png'
import four from '../assets/four.png'
import five from '../assets/five.png'
import six from '../assets/six.png'
import seven from '../assets/seven.png'

const Fourth = () => {
  return (
    <section className='mt-40 mb-20'>
      <div className='main-container'>
        <h2 className='font-semibold font-work leading-[120%] text-[38px] text-white'> Browse Categories</h2>
        <div className='mt-15 grid grid-cols-4 gap-7.5'>
          <div>
            <img src={onee} alt="" />
            <div className='bg-[#3B3B3B] rounded-bl-[20px] rounded-br-[20px] w-60'>
              <h4 className='font-semibold font-work text-white text-[22px] leading-[140%] flex items-center px-7.5 pt-5 pb-6.25'> Art</h4>
            </div>
          </div>
          <div>
            <img src={one} alt="" />
            <div className='bg-[#3B3B3B] rounded-bl-[20px] rounded-br-[20px] w-60'>
              <h4 className='font-semibold font-work text-white text-[22px] leading-[140%] flex items-center px-7.5 pt-5 pb-6.25'> Collectibles</h4>
            </div>
          </div>
          <div>
            <img src={two} alt="" />
            <div className='bg-[#3B3B3B] rounded-bl-[20px] rounded-br-[20px] w-60'>
              <h4 className='font-semibold font-work text-white text-[22px] leading-[140%] flex items-center px-7.5 pt-5 pb-6.25'> Music</h4>
            </div>
          </div>
          <div>
            <img src={three} alt="" />
            <div className='bg-[#3B3B3B] rounded-bl-[20px] rounded-br-[20px] w-60'>
              <h4 className='font-semibold font-work text-white text-[22px] leading-[140%] flex items-center px-7.5 pt-5 pb-6.25'> Photography</h4>
            </div>
          </div>
          <div>
            <img src={four} alt="" />
            <div className='bg-[#3B3B3B] rounded-bl-[20px] rounded-br-[20px] w-60'>
              <h4 className='font-semibold font-work text-white text-[22px] leading-[140%] flex items-center px-7.5 pt-5 pb-6.25'> Video</h4>
            </div>
          </div>
          <div>
            <img src={five} alt="" />
            <div className='bg-[#3B3B3B] rounded-bl-[20px] rounded-br-[20px] w-60'>
              <h4 className='font-semibold font-work text-white text-[22px] leading-[140%] flex items-center px-7.5 pt-5 pb-6.25'> Utility</h4>
            </div>
          </div>
          <div>
            <img src={six} alt="" />
            <div className='bg-[#3B3B3B] rounded-bl-[20px] rounded-br-[20px] w-60'>
              <h4 className='font-semibold font-work text-white text-[22px] leading-[140%] flex items-center px-7.5 pt-5 pb-6.25'> Sport</h4>
            </div>
          </div>
          <div>
            <img src={seven} alt="" />
            <div className='bg-[#3B3B3B] rounded-bl-[20px] rounded-br-[20px] w-60'>
              <h4 className='font-semibold font-work text-white text-[22px] leading-[140%] flex items-center px-7.5 pt-5 pb-6.25'> Virtual Worlds</h4>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Fourth