import React from 'react'
import cardone from '../assets/card-first.png'
import cardtwo from '../assets/card-two.png'
import cardthree from '../assets/card-three.png'
import cardfour from '../assets/card-four.png'
import cardfive from '../assets/card-five.png'
import cardsix from '../assets/card-six.png'
import cardseven from '../assets/card-seven.png'
import cardeight from '../assets/card-eight.png'
import cardnine from '../assets/card-nine.png'
import cardten from '../assets/card-ten.png'
import cardeleven from '../assets/card-eleven.png'
import cardtwelve from '../assets/card-twelve.png'
import error from '../assets/error.png'
import { SlRocket } from "react-icons/sl";

const Third = () => {
    return (
        <section className='mt-20'>
            <div className='main-container'>
                <div className='flex flex-col md:flex-row items-end justify-between gap-6'>
                    {/* টেক্সট গ্রুপ */}
                    <div>
                        <h3 className='font-semibold font-work text-white text-[38px] leading-[120%]'>
                            Top creators
                        </h3>
                        <h4 className='font-work font-normal text-[22px] text-white leading-[160%] mt-2.5'>
                            Checkout Top Rated Creators on the NFT Marketplace
                        </h4>
                    </div>

                    {/* বোতাম */}
                    <button className='flex items-center justify-center gap-3 font-work font-semibold text-[16px] text-white leading-[140%] border-2 border-[#A259FF] rounded-[20px] px-10 py-4 h-fit hover:bg-[#A259FF] transition-colors'>
                        <SlRocket className='text-[#A259FF]' />
                        View Rankings
                    </button>
                </div>

                <div className='grid grid-cols-4 gap-7.5 mt-15'>
                    <div className='bg-[#3B3B3B] p-5 w-60 rounded-[20px] flex flex-col items-center text-center relative'>


                        <div className='absolute top-3 left-3 bg-[#2B2B2B] rounded-full w-7.5 h-7.5 flex items-center justify-center'>
                            <span className='font-normal text-[16px] leading-[140%] font-work text-[#858584]'>
                                1
                            </span>
                        </div>


                        <img
                            src={cardone}
                            className='w-30 h-30 rounded-full object-cover mt-4 mb-5'
                            alt="Artist"
                        />


                        <h4 className='font-work font-semibold text-white text-[22px] leading-[140%] mb-1'>
                            Keepitreal
                        </h4>
                        <h5 className='text-[#858584] font-normal text-[16px] leading-[140%] font-work'>
                            Total Sales : <span className='text-white font-normal'>34.53 ETH</span>
                        </h5>

                    </div>
                    <div className='bg-[#3B3B3B] p-5 w-60 rounded-[20px] flex flex-col items-center text-center relative'>


                        <div className='absolute top-3 left-3 bg-[#2B2B2B] rounded-full w-7.5 h-7.5 flex items-center justify-center'>
                            <span className='font-normal text-[16px] leading-[140%] font-work text-[#858584]'>
                                2
                            </span>
                        </div>


                        <img
                            src={cardtwo}
                            className='w-30 h-30 rounded-full object-cover mt-4 mb-5'
                            alt="Artist"
                        />


                        <h4 className='font-work font-semibold text-white text-[22px] leading-[140%] mb-1'>
                            Keepitreal
                        </h4>
                        <h5 className='text-[#858584] font-normal text-[16px] leading-[140%] font-work'>
                            Total Sales : <span className='text-white font-normal'>34.53 ETH</span>
                        </h5>

                    </div>
                    <div className='bg-[#3B3B3B] p-5 w-60 rounded-[20px] flex flex-col items-center text-center relative'>


                        <div className='absolute top-3 left-3 bg-[#2B2B2B] rounded-full w-7.5 h-7.5 flex items-center justify-center'>
                            <span className='font-normal text-[16px] leading-[140%] font-work text-[#858584]'>
                                3
                            </span>
                        </div>


                        <img
                            src={cardthree}
                            className='w-30 h-30 rounded-full object-cover mt-4 mb-5'
                            alt="Artist"
                        />


                        <h4 className='font-work font-semibold text-white text-[22px] leading-[140%] mb-1'>
                            Keepitreal
                        </h4>
                        <h5 className='text-[#858584] font-normal text-[16px] leading-[140%] font-work'>
                            Total Sales : <span className='text-white font-normal'>34.53 ETH</span>
                        </h5>

                    </div>
                    <div className='bg-[#3B3B3B] p-5 w-60 rounded-[20px] flex flex-col items-center text-center relative'>


                        <div className='absolute top-3 left-3 bg-[#2B2B2B] rounded-full w-7.5 h-7.5 flex items-center justify-center'>
                            <span className='font-normal text-[16px] leading-[140%] font-work text-[#858584]'>
                                4
                            </span>
                        </div>


                        <img
                            src={error}
                            className='w-30 h-30 rounded-full object-cover mt-4 mb-5'
                            alt="Artist"
                        />


                        <h4 className='font-work font-semibold text-white text-[22px] leading-[140%] mb-1'>
                            Keepitreal
                        </h4>
                        <h5 className='text-[#858584] font-normal text-[16px] leading-[140%] font-work'>
                            Total Sales : <span className='text-white font-normal'>34.53 ETH</span>
                        </h5>

                    </div>
                    <div className='bg-[#3B3B3B] p-5 w-60 rounded-[20px] flex flex-col items-center text-center relative'>


                        <div className='absolute top-3 left-3 bg-[#2B2B2B] rounded-full w-7.5 h-7.5 flex items-center justify-center'>
                            <span className='font-normal text-[16px] leading-[140%] font-work text-[#858584]'>
                                5
                            </span>
                        </div>


                        <img
                            src={cardfive}
                            className='w-30 h-30 rounded-full object-cover mt-4 mb-5'
                            alt="Artist"
                        />


                        <h4 className='font-work font-semibold text-white text-[22px] leading-[140%] mb-1'>
                            Keepitreal
                        </h4>
                        <h5 className='text-[#858584] font-normal text-[16px] leading-[140%] font-work'>
                            Total Sales : <span className='text-white font-normal'>34.53 ETH</span>
                        </h5>

                    </div>
                    <div className='bg-[#3B3B3B] p-5 w-60 rounded-[20px] flex flex-col items-center text-center relative'>


                        <div className='absolute top-3 left-3 bg-[#2B2B2B] rounded-full w-7.5 h-7.5 flex items-center justify-center'>
                            <span className='font-normal text-[16px] leading-[140%] font-work text-[#858584]'>
                                6
                            </span>
                        </div>


                        <img
                            src={cardsix}
                            className='w-30 h-30 rounded-full object-cover mt-4 mb-5'
                            alt="Artist"
                        />


                        <h4 className='font-work font-semibold text-white text-[22px] leading-[140%] mb-1'>
                            Keepitreal
                        </h4>
                        <h5 className='text-[#858584] font-normal text-[16px] leading-[140%] font-work'>
                            Total Sales : <span className='text-white font-normal'>34.53 ETH</span>
                        </h5>

                    </div>
                    <div className='bg-[#3B3B3B] p-5 w-60 rounded-[20px] flex flex-col items-center text-center relative'>


                        <div className='absolute top-3 left-3 bg-[#2B2B2B] rounded-full w-7.5 h-7.5 flex items-center justify-center'>
                            <span className='font-normal text-[16px] leading-[140%] font-work text-[#858584]'>
                                7
                            </span>
                        </div>


                        <img
                            src={cardseven}
                            className='w-30 h-30 rounded-full object-cover mt-4 mb-5'
                            alt="Artist"
                        />


                        <h4 className='font-work font-semibold text-white text-[22px] leading-[140%] mb-1'>
                            Keepitreal
                        </h4>
                        <h5 className='text-[#858584] font-normal text-[16px] leading-[140%] font-work'>
                            Total Sales : <span className='text-white font-normal'>34.53 ETH</span>
                        </h5>

                    </div>
                    <div className='bg-[#3B3B3B] p-5 w-60 rounded-[20px] flex flex-col items-center text-center relative'>


                        <div className='absolute top-3 left-3 bg-[#2B2B2B] rounded-full w-7.5 h-7.5 flex items-center justify-center'>
                            <span className='font-normal text-[16px] leading-[140%] font-work text-[#858584]'>
                                8
                            </span>
                        </div>


                        <img
                            src={cardeight}
                            className='w-30 h-30 rounded-full object-cover mt-4 mb-5'
                            alt="Artist"
                        />


                        <h4 className='font-work font-semibold text-white text-[22px] leading-[140%] mb-1'>
                            Keepitreal
                        </h4>
                        <h5 className='text-[#858584] font-normal text-[16px] leading-[140%] font-work'>
                            Total Sales : <span className='text-white font-normal'>34.53 ETH</span>
                        </h5>

                    </div>
                    <div className='bg-[#3B3B3B] p-5 w-60 rounded-[20px] flex flex-col items-center text-center relative'>


                        <div className='absolute top-3 left-3 bg-[#2B2B2B] rounded-full w-7.5 h-7.5 flex items-center justify-center'>
                            <span className='font-normal text-[16px] leading-[140%] font-work text-[#858584]'>
                                9
                            </span>
                        </div>


                        <img
                            src={cardnine}
                            className='w-30 h-30 rounded-full object-cover mt-4 mb-5'
                            alt="Artist"
                        />


                        <h4 className='font-work font-semibold text-white text-[22px] leading-[140%] mb-1'>
                            Keepitreal
                        </h4>
                        <h5 className='text-[#858584] font-normal text-[16px] leading-[140%] font-work'>
                            Total Sales : <span className='text-white font-normal'>34.53 ETH</span>
                        </h5>

                    </div>
                    <div className='bg-[#3B3B3B] p-5 w-60 rounded-[20px] flex flex-col items-center text-center relative'>


                        <div className='absolute top-3 left-3 bg-[#2B2B2B] rounded-full w-7.5 h-7.5 flex items-center justify-center'>
                            <span className='font-normal text-[16px] leading-[140%] font-work text-[#858584]'>
                                10
                            </span>
                        </div>


                        <img
                            src={cardten}
                            className='w-30 h-30 rounded-full object-cover mt-4 mb-5'
                            alt="Artist"
                        />


                        <h4 className='font-work font-semibold text-white text-[22px] leading-[140%] mb-1'>
                            Keepitreal
                        </h4>
                        <h5 className='text-[#858584] font-normal text-[16px] leading-[140%] font-work'>
                            Total Sales : <span className='text-white font-normal'>34.53 ETH</span>
                        </h5>

                    </div>
                    <div className='bg-[#3B3B3B] p-5 w-60 rounded-[20px] flex flex-col items-center text-center relative'>


                        <div className='absolute top-3 left-3 bg-[#2B2B2B] rounded-full w-7.5 h-7.5 flex items-center justify-center'>
                            <span className='font-normal text-[16px] leading-[140%] font-work text-[#858584]'>
                                11
                            </span>
                        </div>


                        <img
                            src={cardeleven}
                            className='w-30 h-30 rounded-full object-cover mt-4 mb-5'
                            alt="Artist"
                        />


                        <h4 className='font-work font-semibold text-white text-[22px] leading-[140%] mb-1'>
                            Keepitreal
                        </h4>
                        <h5 className='text-[#858584] font-normal text-[16px] leading-[140%] font-work'>
                            Total Sales : <span className='text-white font-normal'>34.53 ETH</span>
                        </h5>

                    </div>
                    <div className='bg-[#3B3B3B] p-5 w-60 rounded-[20px] flex flex-col items-center text-center relative'>


                        <div className='absolute top-3 left-3 bg-[#2B2B2B] rounded-full w-7.5 h-7.5 flex items-center justify-center'>
                            <span className='font-normal text-[16px] leading-[140%] font-work text-[#858584]'>
                                12
                            </span>
                        </div>


                        <img
                            src={cardtwelve}
                            className='w-30 h-30 rounded-full object-cover mt-4 mb-5'
                            alt="Artist"
                        />


                        <h4 className='font-work font-semibold text-white text-[22px] leading-[140%] mb-1'>
                            Keepitreal
                        </h4>
                        <h5 className='text-[#858584] font-normal text-[16px] leading-[140%] font-work'>
                            Total Sales : <span className='text-white font-normal'>34.53 ETH</span>
                        </h5>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Third