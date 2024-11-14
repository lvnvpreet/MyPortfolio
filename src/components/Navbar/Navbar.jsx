import React, { useState } from 'react'
import { RiMenu2Line, RiCloseLine } from '@remixicon/react'


const Navbar = () => {

    const [menu, openMenu] = useState(false);
    const [showMenu, setShowMenu] = useState(true);
    return (
        
            <nav className='  flex flex-wrap justify-between md:items-center text-white px-10 pt-2 pb-2 md:px-20  bg-black bg-opacity-20 ' >
                <span className='text-xl font-bold tracking-wide'>Portfolio</span>
                <ul className={` ${menu ? 'block' : 'hidden'} mx-24 py-2 font-semibold md:my-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-trasparent md:static md:mx-0 md:flex gap-6`}>
                    <a href="#home"> <li className='text-md transition-all duration-300 p-1 md:p-0 '>Home</li></a>
                    <a href="#about"> <li className='text-md transition-all duration-300 p-1 md:p-0 '>About Us</li></a>
                    <a href="#Services"><li className='text-md transition-all duration-300 p-1 md:p-0 '>Services</li></a>
                    <a href="#Skils"> <li className='text-md transition-all duration-300 p-1 md:p-0 '>Skils</li></a>
                    <a href="#contant"><li className='text-md transition-all duration-300 p-1 md:p-0 '>Contact Me</li></a>
                </ul>

                {showMenu ? (
                    <RiMenu2Line
                        size={30}
                        className="md:hidden absolute right-10 top-6 transition-all duration-300"
                        onClick={() => {
                            openMenu(!menu);
                            setShowMenu(!showMenu)
                        }
                        } />
                ) : (<RiCloseLine
                    size={30}
                    className='md:hidden absolute right-10 top-6 transition-all duration-300'

                />)}
            </nav>
        
    )
}

export default Navbar