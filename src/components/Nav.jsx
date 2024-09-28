import React from 'react'
import './nav.css'

function Nav() {
  return (
    <nav className=' h-fit items-center justify-between flex px-5 md:px-10 py-5 shadow-sm'>
        <h1 className=' font-cav text-5xl font-bold '>Wander.AI</h1>
      <ul className=' md:flex hidden gap-2 font-fre text-xl font-medium' >
        <li className='navitem bg-orange-200'>Where to Go</li>
        <li className='navitem bg-purple-200'>Where to Eat</li>
        <li className='navitem bg-green-200'>Place to Stay</li>
        <li className='navitem bg-indigo-200'>What to Do</li>
      </ul>
      <div className=" flex gap-5">
        <button className=" md:block hidden text-lg font-medium transition-all font-fre back text-slate-900 hover:text-slate-500 ">Contact</button>
        <button className="bg-slate-900 hover:bg-slate-500 rounded-full transition-all shadow-sm font-fre  text-white font-thin py-2 px-4 ">Login</button>
      </div>
    </nav>
  )
}

export default Nav