import React from 'react'
import { NavLink, Link } from 'react-router-dom'


const Nav = () => {

  const navLinkStyles = ({ isActive }) =>
        isActive ? 'w-full p-2 bg-gray-100 lg:text-black lg:underline lg:bg-transparent' : 'text-black text-[15px] p-2';

    return (
        <>

            <div className='flex justify-between items-center mx-24 p-2'>
                <div className='flex'><h1 className='text-[24px] font-bold'><Link to="/">ShwanDmall</Link></h1></div>
                <ul className='flex gap-9'>
                    <li><NavLink className={navLinkStyles} to="/login">Login</NavLink></li>
                    <li><NavLink className={navLinkStyles} to="/signup">Sign Up</NavLink></li>
                </ul>
            </div>
        </>
    )
}

export default Nav