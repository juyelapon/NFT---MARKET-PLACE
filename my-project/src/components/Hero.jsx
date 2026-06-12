import React from 'react'
import Image from '../assets/placeholder.png'
import { IoIosRocket } from "react-icons/io";
import { CgBot } from "react-icons/cg";


const Hero = () => {
    return (
        <section className='mt-40'>
            <div className='main-container'>
                <div className='flex justify-between items-start'>

    {/* Left Side */}
    <div>
        <h1 className='font-work-sans font-semibold text-[67px] leading-[110%] text-white w-127.5 mb-5'>
            Discover Digital Art & Collect NFTS
        </h1>

        <p className='font-work-sans leading-[160%] text-white text-[22px] font-normal w-127.5 mb-7.5'>
            NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
        </p>

        <button className='mb-7.5 flex items-center gap-3 bg-[#A259FF] font-work-sans font-semibold text-[16px] leading-[140%] py-4.5 pl-10 pr-15 rounded-[20px] text-[#FFFFFF]'>
            <IoIosRocket size={20} />
            Sign up
        </button>

        <div className='flex gap-x-12'>
            <div>
                <h3 className='font-bold text-[28px] leading-[140%] text-white font-work-sans'>240k+</h3>
                <h4 className='font-normal text-[24px] font-work-sans leading-[160%] text-white'>Total Sale</h4>
            </div>

            <div>
                <h3 className='font-bold text-[28px] leading-[140%] text-white font-work-sans'>100k+</h3>
                <h4 className='font-normal text-[24px] font-work-sans leading-[160%] text-white'>Auctions</h4>
            </div>

            <div>
                <h3 className='font-bold text-[28px] leading-[140%] text-white font-work-sans'>240k+</h3>
                <h4 className='font-normal text-[24px] font-work-sans leading-[160%] text-white'>Artists</h4>
            </div>
        </div>
    </div>

    {/* Right Side */}
    <div>
        <img src={Image} alt="" />

        <div className='bg-[#3B3B3B] rounded-bl-[20px] rounded-br-[20px] w-127.5'>
            <h4 className='font-semibold text-[22px] font-work-sans leading-[140%] text-white px-5 pt-5.5 mb-2.5'>
                Space Walking
            </h4>

            <h5 className='flex items-center gap-3 font-normal font-work-sans text-white text-[16px] leading-[140%] px-5 pb-10'>
                <CgBot size={25} />
                Animakid
            </h5>
        </div>
    </div>

</div>
            </div>
        </section>
    )
}

export default Hero