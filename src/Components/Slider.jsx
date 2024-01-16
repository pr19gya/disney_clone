import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import GlobalApi from '../Services/GlobalApi'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original/";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Slider = () => {
    const [movieList, setMovieList]=useState([]);
    const elementRef=useRef();
    useEffect(()=>{
        getTrendingMovies();
    },[])

    const getTrendingMovies=()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        })
    }

    const sliderRight=(element)=>{
        element.scrollLeft+=1490
    }
    const sliderLeft=(element)=>{
        element.scrollLeft-=1490
    }
  return (
    <div>
        <FaChevronLeft className='hidden md:block text-white text-[50px] absolute mx-6 mt-[250px] cursor-pointer' onClick={()=>sliderLeft(elementRef.current)}/>
        <FaChevronRight className='hidden md:block text-white text-[50px] absolute mx-12 mt-[250px] cursor-pointer right-0' onClick={()=>sliderRight(elementRef.current)}/>
    <div className=' flex overflow-x-auto w-[1470px] px-18 py-4 pt-3 pb-3 scrollbar-hide scroll-smooth' ref={elementRef} >
   
        {movieList.map((item,index)=>(
           <>
            
             
            
            <img src={IMAGE_BASE_URL+item.backdrop_path} className='min-w-full  md:h-[500px] object-cover object-top mr-5 rounded-sm hover:border-[4px] border-gray-400 transition-all duration-100 ease-in '/>
            <h1 className='text-white'>{movieList.title}</h1>
            </>
        ))}
    </div>
    </div>
  )
}

export default Slider