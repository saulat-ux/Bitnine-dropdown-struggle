"use client"

import React, { useRef } from 'react'
import { useState ,useEffect} from 'react'
import { navbarLinks } from './LinksDB'
import Link from 'next/link'
import './navlink.css'
import {IoIosArrowDown} from 'react-icons/io'
import {IoIosArrowUp} from 'react-icons/io'


const Navlinks = () => {
    const [isOpenArray, setIsOpenArray] = useState(navbarLinks.map(() => false));
    const [isSubSubmenuOpen, setIsSubSubmenuOpen] = useState(false);

    const toggleSubmenu = (index) => {
        const newOpenState = [...isOpenArray];
        newOpenState[index] = !newOpenState[index];
        setIsOpenArray(newOpenState);
    }
    const toggleSubSubmenu = () => {
        setIsSubSubmenuOpen(!isSubSubmenuOpen);
      };

   

return (
    <>
    {navbarLinks.map((link, index) => (
        <li  key={index} className='group py-5' >
            <Link href={link.link} onClick={()=> toggleSubmenu(index)}>
                <span> {link.name} </span>
            </Link>

                    {/* level 2 dropdown */}
                <ul className='opacity-0 group-hover:opacity-95 transition-opacity duration-200 ease-in  py-4 my-4
                 bg-slate-800 absolute hidden lg:block'>
                    {link.sublinks?.map((item, index) => (
                        <li key={index} className='layer-two px-4 py-2 hover:bg-black'>
                            <Link href={item.link} className='flex justify-between'>
                                <span>{item.name} </span>
                                <span className=' text-xl'>{item.arrow ? item.arrow : '' } </span>
                            </Link>

                            {/* level 3 dropdown */}
                            
                            <ul className=' py-2 absolute opacity-0 bg-slate-800 w-max left-52 top-0' >
                                {item.sublinks?.map((t, index) => (
                                    <li key={index} className=' py-2.5 px-4 mt-2 hover:bg-black '>
                                        <Link href={t.link}>
                                            <span className=''>{t.name}</span>
                                        </Link>
                                    </li>
                                ))}
                             </ul>     
                        </li>
                     ))}
                </ul>
                {/* mobile and tablet view */}
                   { <ul className ={`${ isOpenArray[index] ? 'block lg:hidden' : 'hidden'}`}>
                    { link.sublinks && link.sublinks?.map((item, index) => (
                        <li key={index} className=''>
                            <Link href={item.link} className='' onClick={
                                    () => toggleSubSubmenu() }>
                                <span>{item.name} </span>
                                <span className=' text-xl'>{item.arrow ? item.arrow : '' } </span>
                            </Link>

                            {/* level 3 dropdown */}
                            
                            <ul className={`${ isSubSubmenuOpen ? 'block lg:hidden' : 'hidden'}`}>
                                {item.sublinks?.map((t, index) => (
                                    <li key={index} className='  '>
                                        <Link href={t.link}>
                                            <span className=''>{t.name}</span>
                                        </Link>
                                    </li>
                                ))}
                             </ul>     
                        </li>
                     ))}
                </ul>
                }
                    
        </li>
            ))}
       </>
    )
}

export default Navlinks
