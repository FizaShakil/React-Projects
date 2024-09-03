import { useState } from 'react'
import './index.css';

export default function BgChanger() {
  const colorList = ['Red','Grey','Green','Purple','Skyblue','Crimson','Pink','Peru','Yellow'];
  const [color,setColor]= useState("black");
  const bgColor = colorList.map(bg=>
   <button style={{backgroundColor: bg}} 
          className='w-20 h-8 mx-5 my-4 border-black border-2 text-black font-bold rounded-2xl' 
          onClick={()=>{setColor(bg)}}>
                 {bg} 
  </button>
  )
    return(
      <>
        <div  className='text-center w-full h-screen' style={{backgroundColor: color}}>
          <h1 className='mb-5 text-5xl font-bold text-white bg-black py-3 ml-[20%] bg-opacity-55 w-[60%] text-center rounded-lg'>Background Color Changer</h1>
          <div className='flex flex-col mx-5'>{bgColor}</div>
        </div>
        </>
    )

}

