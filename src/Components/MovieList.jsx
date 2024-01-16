import React, { useEffect, useState , useRef } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import HrMovieCard from './HrMovieCard';

const MovieList = ({genreId, index_}) => {
  const [movieList, setMovieList]=useState([]);
  useEffect(()=>{
    getMovieByGenreId();
  },[])

  const elementRef=useRef();
   

  const getMovieByGenreId=()=>{
    GlobalApi.getMovieByGenreId(genreId).then(resp=>{
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    })
  }

  const sliderRight=(element)=>{
    element.scrollLeft+=500
}
const sliderLeft=(element)=>{
    element.scrollLeft-=500
}
  return (
    <>
    <FaChevronLeft className= {`absolute hidden md:block text-white text-[50px]  z-[1] mx-1 ${index_%3==0?'mt-[80px]' : 'mt-[150px]'}`} cursor-pointer onClick={()=>sliderLeft(elementRef.current)}/>
        <FaChevronRight className={`hidden md:block text-white text-[50px] absolute z-[1] mx-16 ${index_%3==0?'mt-[80px]' : 'mt-[150px]'} cursor-pointer right-0`} onClick={()=>sliderRight(elementRef.current)}/>
    <div ref={elementRef} className='flex overflow-x-auto w-[1350px] gap-6 scrollbar-hide  pt-5 px-3 pb-5 scroll-smooth'>
      {movieList.map((item,index)=>(
        <>
        {index_%3==0 ? <HrMovieCard movie={item}/> :<MovieCard movie={item} />}
        </>
      ))}
    </div>
    </>
  )
}

export default MovieList