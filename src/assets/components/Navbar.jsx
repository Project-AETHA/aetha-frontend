import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
    let Links = [
        { name: "HOME", link: "/" },
        { name: "READ", link: "../Reading" },
        { name: "WRITE", link: "../Write" },

    ];
    let [open, setOpen] = useState(false);

    return (
        <div className="shadow-md w-full fixed top-0 left-0 z-50">
            <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
                {/* Logo section */}
                <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
                    <img src="../../../public/images/logo.png" alt="Logo" className="max-w-[32px]" />
                    <span> AETHA </span>
                </div>
                {/* Menu icon */}
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open ? <XMarkIcon /> : <Bars3BottomRightIcon />
                    }
                </div>
                {/* linke items */}
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white sm:z-50 z-50 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li className='md:ml-8 md:my-0 my-7 font-semibold font-poppins'>
                                <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
                            </li>))
                    }
                    <a href="./login">
                    <button className='btn bg-blue-600 hover:bg-gradient-to-tl from-cyan-300 to-indigo-600 text-white md:ml-8 font-semibold px-5 py-2 rounded duration-500 md:static'> Login </button>
                    </a>
                    <a href="./signup">
                    <button className='btn border-sky-600 hover:text-blue-600 font-semibold mx-2 px-2 py-2 rounded duration-500 md:static hover:text-white'> Sign Up </button>
                    </a>
                </ul>
                {/* button */}
            </div>
        </div>
    );
};

export default Navbar;