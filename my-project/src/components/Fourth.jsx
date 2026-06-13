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
<h2 className='font-semibold text-[38px] font-work leading-[120%] text-white'>Browse Categories</h2>
<div>
    <div className="w-[240px] bg-[#3B3B3B] rounded-[20px] overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
  
  {/* উপরের ইমেজ এবং আইকন সেকশন */}
  <div className="relative h-[240px] flex items-center justify-center overflow-hidden">
    {/* ব্যাকগ্রাউন্ড ইমেজ (Figma-র মতো ব্লার ইফেক্ট সহ) */}
    <img 
      src={onee} 
      alt="Art Background" 
      className="absolute inset-0 w-full h-full object-cover blur-md scale-110 brightness-75"
    />
    
  
  </div>

  {/* নিচের টেক্সট সেকশন */}
  <div className="px-5 py-6">
    <h4 className="font-work font-semibold text-[22px] text-white leading-[140%]">
      Art
    </h4>
  </div>
</div>
</div>
        </div>
    </section>
  )
}

export default Fourth