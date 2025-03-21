import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='fixed top-0 w-full z-50 left-0 right-0  bg-black h-[65px]  items-center flex'>
      <ul className='hidden gap-8  items-center md:flex'>
        <li>
            <Link to={'/'}>Home</Link>

        </li>
        <li><Link to={'cart'}>Cart</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
