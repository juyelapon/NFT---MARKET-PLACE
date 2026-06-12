import React from 'react'
import Images from '../assets/logo.png'
import { FiUser } from "react-icons/fi";
const Header = () => {
  return (
    <header className='mt-8.5'>
        <nav>
            <div className='main-container'>
                <div className='flex justify-between items-center'>
                    <img src={Images} alt="" />
                    <ul className='flex gap-x-7.5'>
                        <li className='font-work-sans font-semibold text-[16px] leading-[140%] text-[#FFFFFF]'><a href="">Marketplace</a></li>
                        <li className='font-work-sans font-semibold text-[16px] leading-[140%] text-[#FFFFFF]'><a href="">Rankings</a></li>
                        <li className='font-work-sans font-semibold text-[16px] leading-[140%] text-[#FFFFFF]'><a href="">Connect a wallet</a></li>                     
                    </ul>
                    <button className='flex items-center gap-3 bg-[#A259FF] px-15 font-work-sans font-semibold text-[16px] leading-[140%] py-4.5 pl-15.5 pr-15 rounded-[20px] text-[#FFFFFF]'>
  <FiUser size={20} />
  Sign up
</button>
                </div> 
            </div>
        </nav>
    </header>
  )
}

export default Header