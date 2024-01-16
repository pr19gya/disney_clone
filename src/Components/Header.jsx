import React, { useState } from 'react'
import logo from './../assets/Images/logo.png'
import { HiHome } from "react-icons/hi";
import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlinePlus } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import { PiFilmReelFill } from "react-icons/pi";
import { PiTelevisionFill } from "react-icons/pi";
import HeaderItems from './HeaderItems'
import profile from './../assets/Images/profile.png'
import { HiDotsVertical } from "react-icons/hi";

const Header = () => {
  const[toggle,setToggle]=useState(false);
  const menu=[
    {
      name:'HOME',
      icon: HiHome
    },
    {
      name:'SEARCH',
      icon:HiOutlineSearch
    },
    {
      name:'WATCHLIST',
      icon:HiOutlinePlus
    },
    {
      name:'ORIGINALS',
      icon:FaStar
    },
    {
      name:'MOVIES',
      icon:PiFilmReelFill
    },
    {
      name:'SERIES',
      icon:PiTelevisionFill
    }
  ]
  return (
    <div className='flex  w-[1500px] mr-0 justify-between'>
      <div className='flex gap-10 items-center'>
        <img src={logo} className=' w-[90px] md:w-[115px] object-cover'/>
        <div className='hidden md:flex gap-8 '>
          {menu.map((items)=>(
            <HeaderItems name={items.name} Icon={items.icon}/>
          ))}
        </div>
        <div className=' flex md:hidden  gap-5 '>
          {menu.map((items,index)=>index<3&&(
            <HeaderItems name={''} Icon={items.icon}/>
          ))}
        </div>
        <div className='md:hidden gap-5' onClick={()=>setToggle(!toggle)}>
          <HeaderItems name={''} Icon={HiDotsVertical}/>
          {toggle ?<div className='absolute mt-3 bg-[#121212] border-[1px] p-3 border-gray-700 px-5 py-4'>
          {menu.map((items,index)=>index>=3&&(
            <HeaderItems name={items.name} Icon={items.icon}/>
          ))}
          </div>:null}
        </div>
        
      </div>
      <div className='mr-4 justify-end'>
        <img src={profile} className='w-[50px] rounded-full mx-[0px] cursor-pointer'/>
      </div>
    </div>
  )
}

export default Header