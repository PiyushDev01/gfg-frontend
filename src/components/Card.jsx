import React from 'react'
import './nav.css'

function Card(props) {
  return (
   <>
   <div className=' card  h-fit  flex flex-col md:max-w-[16rem] md:min-h-[24rem] rounded-2xl overflow-hidden m-2 bg-white'> 
    <img className=" cardimg h-[10rem]" src={props.url} alt="" />
    <div className=' p-5 font-fre'>
        <h2 className={` bg-${props.color}-200 w-fit p-1 font-fre rounded-full text-sm px-2 font-semibold my-2`}> {props.tag} </h2>
      <h1 className=' font-spa text-xl font-semibold'> {props.title} </h1>
      <p className=' font-fre text-sm font-light'> {props.p} </p>
      <p className=' font-semibold'> {props.date} </p>

   
   </div>
   </div>
   </>
  )
}

export default Card