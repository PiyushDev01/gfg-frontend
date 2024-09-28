import React from 'react'
import './nav.css'

function LargeCard(props) {
  return (
    <>
    <div className={`background-div ${props.css} p-5 rounded-2xl overflow-hidden m-4 ` }>
    <div className=' md:w-1/2 rounded-xl drop-shadow-sm  bg-zinc-900/35 p-3 md:p-10 text-white'>
        <h2 className=' font-fre text-base py-1 px-2 border-white border w-fit rounded-full' >Want to Do</h2>
        <h1 className=' pt-2 text-3xl md:text-5xl font-spa'  >Bucket List Travel: Top 50 Must-Visit Places in the World
        </h1>
        <p className=' md:text-base text-sm font-light' >
        What's on your travel bucket list? If you're like most
people, the more you travel, the more places you add
to your bucket list. So when the editors of the
website Big 7 Travel announced the list of the world's
top 50 bucket list destinations, we stopped in our
tracks and started checking off the boxes.
        </p>
    </div>
    </div>
    </>
  )
}

export default LargeCard