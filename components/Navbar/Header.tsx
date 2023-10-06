import React from 'react'
import Navlinks from './Navlinks'

const Header = () => {
  return (
    <nav className='bg-slate-800 h-auto'>
        <div className='px-3'>
            <ul className='lg:flex text-white gap-8 py-3 '>
              <Navlinks/>
              </ul>
        </div>
    </nav>
  )
}

export default Header
