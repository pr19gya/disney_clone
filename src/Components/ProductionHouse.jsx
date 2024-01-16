import React from 'react'
import disney from './../assets/Images/disney.png'
import marvel from './../assets/Images/marvel.png'
import nationalG from './../assets/Images/nationalG.png'
import pixar from './../assets/Images/pixar.png'
import starwars from './../assets/Images/starwar.png'
import disneyv from './../assets/Videos/disney.mp4'
import marvelv from './../assets/Videos/marvel.mp4'
import national_geographic from './../assets/Videos/national-geographic.mp4'
import pixarv from './../assets/Videos/pixar.mp4'
import starwarsv from './../assets/Videos/star-wars.mp4'


const ProductionHouse = () => {
    const productionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyv
        },
        {
            id:2,
            image:marvel,
            video:marvelv
        },
        {
            id:3,
            image:nationalG,
            video:national_geographic
        },
        {
            id:4,
            image:pixar,
            video:pixarv
        },
        {
            id:5,
            image:starwars,
            video:starwarsv
        }

    ]
  return (
    <div className='flex w-[1450px] gap-6 px-2 md:px-16 p-4 my-4'>
        {productionHouseList.map((item)=>(
            <div className='border-[3px] shadow-xl shadow-black h-[139px] w-[245px]  border-gray-600 rounded-lg  hover:scale-110 transition-all duration-300 ease-in-out'>
                
                <video autoPlay muted loop className="absolute  rounded-md z-0 opacity-0 hover:opacity-50">
                    <source src={item.video} type="video/mp4" />
                </video>
                <img src={item.image} className='z-[1] opacity-100 w-full'/>
                
            </div>
        ))}
    </div>
  )
}

export default ProductionHouse