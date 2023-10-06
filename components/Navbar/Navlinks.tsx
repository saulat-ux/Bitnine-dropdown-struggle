"use client"

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
        <li  key={index} className='group py-3' >
            <Link href={link.link} className='flex justify-between' onClick={()=> toggleSubmenu(index)}>
                <span> {link.name} </span>
                  { link.sublinks ? <span className='block lg:hidden'> 
                  
                  {isOpenArray[index] ? <IoIosArrowUp/> : <IoIosArrowDown/>}
                  
                   </span> : <span></span>
                   }

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
                   { <ul className ={` transition-max-h ease-in-out duration-500 ${ isOpenArray[index] ? 'max-h-screen opacity-100 lg:hidden' : 'max-h-0 opacity-0'}  bg-black `}>
                    { link.sublinks && isOpenArray[index]  && link.sublinks?.map((item, index) => (
                       <li key={index} className='py-2 px-2 text-xs'>
                               <Link href={item.link} className='py-1 px-1 flex justify-between ' onClick={
                                    () => toggleSubSubmenu() }>
                                <span>{item.name} </span>
                                {item.sublinks ? <span>
                                   { isSubSubmenuOpen ? <IoIosArrowDown/> : <IoIosArrowUp/>}
                                    </span>  : <span></span>}
                            </Link> 

                            {/* level 3 dropdown */}
                            
                            <ul className={` transition-max-h ease-in-out duration-700 ${ isSubSubmenuOpen ? ' max-h-screen opacity-100 lg:hidden' : ' max-h-0 opacity-0 '} `}>
                                {item.sublinks?.map((t, index) => (
                                    <li key={index} className=' py-2 px-2  '>
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
