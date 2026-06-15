import React from 'react'
import { IoEyeSharp } from "react-icons/io5";
import o from '../assets/o.png'
import t from '../assets/t.png'
import tr from '../assets/tr.png'
import smallone from '../assets/smallone.png'
import smalltwo from '../assets/smalltwo.png'
import smallthree from '../assets/smallthree.png'
const Fifith = () => {
    return (
        <section className='mt-40'>
            <div className='main-container'>
                <div className='flex flex-col md:flex-row items-end justify-between gap-6'>
                    {/* টেক্সট গ্রুপ */}
                    <div>
                        <h3 className='font-semibold font-work text-white text-[38px] leading-[120%]'>
                            Discover More NFTs
                        </h3>
                        <h4 className='font-work font-normal text-[22px] text-white leading-[160%] mt-2.5'>
                            Explore new trending NFTs
                        </h4>
                    </div>

                    {/* বোতাম */}
                    <button className='flex items-center justify-center gap-3 font-work font-semibold text-[16px] text-white leading-[140%] border-2 border-[#A259FF] rounded-[20px] px-10 py-4 h-fit '>
                        <IoEyeSharp className='text-[#A259FF]' />
                        See All
                    </button>
                </div>
                <div className='grid grid-cols-3 mt-10'>
                    <div className="w-82.5 md:w-78.75 bg-[#3B3B3B] rounded-[20px] overflow-hidden text-white font-work">
                        {/* NFT Image */}
                        <img
                            src={o}
                            alt="Distant Galaxy NFT"
                            className="w-full h-60 object-cover"
                        />

                        {/* Card Info Container */}
                        <div className="p-5 flex flex-col gap-5">
                            {/* Title & Artist */}
                            <div className="flex flex-col gap-1.25">
                                <h4 className="text-[22px] font-semibold leading-[140%]">
                                    Distant Galaxy
                                </h4>
                                {/* Artist Profile (Avatar + Name) */}
                                <div className="flex items-center gap-3">
                                    <img
                                        src={smalltwo} // এখানে আর্টিস্টের অবতার ইমেজ লিংক বসবে
                                        alt="MoonDancer"
                                        className="w-6 h-6 rounded-full object-cover"
                                    />
                                    <span className="text-[16px] font-normal font-space-mono text-white">
                                        MoonDancer
                                    </span>
                                </div>
                            </div>

                            {/* Bidding & Price Info */}
                            <div className="flex justify-between items-center">
                                {/* Price Section */}
                                <div className="flex flex-col gap-2">
                                    <span className="text-[12px] font-normal font-space-mono text-[#858584]">
                                        Price
                                    </span>
                                    <span className="text-[16px] font-normal font-space-mono">
                                        1.63 ETH
                                    </span>
                                </div>

                                {/* Highest Bid Section */}
                                <div className="flex flex-col gap-2 text-right">
                                    <span className="text-[12px] font-normal font-space-mono text-[#858584]">
                                        Highest Bid
                                    </span>
                                    <span className="text-[16px] font-normal font-space-mono">
                                        0.33 wETH
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-82.5 md:w-78.75 bg-[#3B3B3B] rounded-[20px] overflow-hidden text-white font-work">
                        {/* NFT Image */}
                        <img
                            src={t}
                            alt="Distant Galaxy NFT"
                            className="w-full h-60 object-cover"
                        />

                        {/* Card Info Container */}
                        <div className="p-5 flex flex-col gap-5">
                            {/* Title & Artist */}
                            <div className="flex flex-col gap-1.25">
                                <h4 className="text-[22px] font-semibold leading-[140%]">
                                    Life On Edena
                                </h4>
                                {/* Artist Profile (Avatar + Name) */}
                                <div className="flex items-center gap-3">
                                    <img
                                        src={smallone} // এখানে আর্টিস্টের অবতার ইমেজ লিংক বসবে
                                        alt="MoonDancer"
                                        className="w-6 h-6 rounded-full object-cover"
                                    />
                                    <span className="text-[16px] font-normal font-space-mono text-white">
                                        NebulaKid
                                    </span>
                                </div>
                            </div>

                            {/* Bidding & Price Info */}
                            <div className="flex justify-between items-center">
                                {/* Price Section */}
                                <div className="flex flex-col gap-2">
                                    <span className="text-[12px] font-normal font-space-mono text-[#858584]">
                                        Price
                                    </span>
                                    <span className="text-[16px] font-normal font-space-mono">
                                        1.63 ETH
                                    </span>
                                </div>

                                {/* Highest Bid Section */}
                                <div className="flex flex-col gap-2 text-right">
                                    <span className="text-[12px] font-normal font-space-mono text-[#858584]">
                                        Highest Bid
                                    </span>
                                    <span className="text-[16px] font-normal font-space-mono">
                                        0.33 wETH
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-82.5 md:w-78.75 bg-[#3B3B3B] rounded-[20px] overflow-hidden text-white font-work">
                        {/* NFT Image */}
                        <img
                            src={tr}
                            alt="Distant Galaxy NFT"
                            className="w-full h-60 object-cover"
                        />

                        {/* Card Info Container */}
                        <div className="p-5 flex flex-col gap-5">
                            {/* Title & Artist */}
                            <div className="flex flex-col gap-1.25">
                                <h4 className="text-[22px] font-semibold leading-[140%]">
                                    AstroFiction
                                </h4>
                                {/* Artist Profile (Avatar + Name) */}
                                <div className="flex items-center gap-3">
                                    <img
                                        src={smallthree} // এখানে আর্টিস্টের অবতার ইমেজ লিংক বসবে
                                        alt="MoonDancer"
                                        className="w-6 h-6 rounded-full object-cover"
                                    />
                                    <span className="text-[16px] font-normal font-space-mono text-white">
                                    Spaceone
                                    </span>
                                </div>
                            </div>

                            {/* Bidding & Price Info */}
                            <div className="flex justify-between items-center">
                                {/* Price Section */}
                                <div className="flex flex-col gap-2">
                                    <span className="text-[12px] font-normal font-space-mono text-[#858584]">
                                        Price
                                    </span>
                                    <span className="text-[16px] font-normal font-space-mono">
                                        1.63 ETH
                                    </span>
                                </div>

                                {/* Highest Bid Section */}
                                <div className="flex flex-col gap-2 text-right">
                                    <span className="text-[12px] font-normal font-space-mono text-[#858584]">
                                        Highest Bid
                                    </span>
                                    <span className="text-[16px] font-normal font-space-mono">
                                        0.33 wETH
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Fifith