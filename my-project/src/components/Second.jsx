import React from 'react'
import first from '../assets/first.png'
import second from '../assets/second.png'
import third from '../assets/third.png'
import fourth from '../assets/fourth.png'
import fifth from '../assets/fifth.png'
import sixth from '../assets/sixth.png'
import seventh from '../assets/seventh.png'

const Second = () => {
  return (
    <section className=" py-10 mb-30">
      <div className='main-container mx-auto'>


        <h2 className='mt-20 text-white font-work font-semibold text-[38px] leading-[120%]'>
          Trending Collection
        </h2>
        <h3 className='text-white font-work font-normal text-[22px] leading-[160%] mt-2.5 mb-10'>
          Checkout our weekly updated trending collection.
        </h3>

        {/* মেইন ৩টি কার্ডের গ্রিড কন্টেইনার */}
        <div className="grid grid-cols-3 gap-10 ">

          <div className="flex flex-col gap-3.75">
            <img src={first} className="w-full rounded-3xl object-cover" alt="DSGN Animals Main" />


            <div className="flex gap-3.75">
              <img src={fourth} className="w-1/3 aspect-square rounded-3xl object-cover" alt="thumb" />
              <img src={fifth} className="w-1/3 aspect-square rounded-3xl object-cover" alt="thumb" />
              <div className="w-1/3 aspect-square bg-[#A259FF] text-white flex items-center justify-center font-bold rounded-3xl text-reverse font-work text-[22px]">
                1025+
              </div>
            </div>

            {/* টেক্সট সেকশন */}
            <div className="flex flex-col gap-2 mt-1">
              <h3 className="text-white font-work text-2xl font-semibold">DSGN Animals</h3>
              <div className="flex items-center gap-3">
                <img src={fourth} className="w-6 h-6 rounded-full object-cover" alt="avatar" />
                <span className="text-white font-work text-base">MrFox</span>
              </div>
            </div>
          </div>

          {/* ===== কার্ড ২: Magic Mushrooms ===== */}
          <div className="flex flex-col gap-3.75">
            {/* বড় ছবি */}
            <img src={second} className="w-full rounded-3xl object-cover" alt="Magic Mushrooms Main" />

            {/* ছোট থাম্বনেইল গ্রুপ */}
            <div className="flex gap-3.75">
              <img src={second} className="w-1/3 aspect-square rounded-3xl object-cover" alt="thumb" />
              <img src={second} className="w-1/3 aspect-square rounded-3xl object-cover" alt="thumb" />
              <div className="w-1/3 aspect-square bg-[#A259FF] text-white flex items-center justify-center font-bold rounded-3xl text-reverse font-work text-[22px]">
                1025+
              </div>
            </div>

            {/* টেক্সট সেকশন */}
            <div className="flex flex-col gap-2 mt-1">
              <h3 className="text-white font-work text-2xl font-semibold">Magic Mushrooms</h3>
              <div className="flex items-center gap-3">
                <img src={second} className="w-6 h-6 rounded-full object-cover" alt="avatar" />
                <span className="text-white font-work text-base">Shroomie</span>
              </div>
            </div>
          </div>

          {/* ===== কার্ড ৩: Disco Machines ===== */}
          <div className="flex flex-col gap-3.75">
            {/* বড় ছবি */}
            <img src={third} className="w-full rounded-3xl object-cover" alt="Disco Machines Main" />

            {/* ছোট থাম্বনেইল গ্রুপ */}
            <div className="flex gap-3.75">
              <img src={seventh} className="w-1/3 aspect-square rounded-3xl object-cover" alt="thumb" />
              <img src={sixth} className="w-1/3 aspect-square rounded-3xl object-cover" alt="thumb" />
              <div className="w-1/3 aspect-square bg-[#A259FF] text-white flex items-center justify-center font-bold rounded-3xl text-reverse font-work text-[22px]">
                1025+
              </div>
            </div>

            {/* টেক্সট সেকশন */}
            <div className="flex flex-col gap-2 mt-1">
              <h3 className="text-white font-work text-2xl font-semibold">Disco Machines</h3>
              <div className="flex items-center gap-3">
                <img src={sixth} className="w-6 h-6 rounded-full object-cover" alt="avatar" />
                <span className="text-white font-work text-base">BeKind2Robots</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Second