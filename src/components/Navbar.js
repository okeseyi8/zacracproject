import zed_logo from '../static/zed-logo.png'
import search from '../static/ion_search-outline.png'
import mobilehome from '../static/mobilehome.png'
import elec from '../static/elec.png'
import blog from '../static/blog.png'
import contact from '../static/contact.png'
import { useState } from 'react'
import hamburger from '../static/hamburger.png'
import exit from '../static/exit.png'
import {ReactComponent as LikeIcon} from "../static/Vector (1).svg"
import { Home } from '../pages/Home'
import {Link} from 'react-router-dom'

// import cart from '../static/Vector (1).png'
import cart  from '../static/mdi_cart-outline.png'
export const Navbar = () => {

    const [show, setShow] = useState(true)
    const toggleMenu = () => {
        setShow(!show)

    }
    return(
        <div className="sticky top-0 header w-screen flex h-[80px] justify-around md:gap-[320px]  items-center md:pl-[18px] md:pr-[45px] shadow-lg bg-white">
            <div>
                <img src={zed_logo} />
            </div>
            <div className=''>
                <ul className='hidden sm:flex md:gap-[42px] text-[18px] font-medium '>
                    <li>
                       <Link to='/' element={<Home />}>Home</Link>
                    </li>
                    <li>
                        Electronics
                    </li>
                    <li>
                        Blog
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </div>
            <div>
                <ul className='hidden sm:flex md:gap-[32px] '>
                    <li><img src={search} /></li>
                    <li className='flex items-center'><LikeIcon /></li>
                    <li><img src={cart} /></li>

                   
                </ul>
            </div>
            <div className='sm:hidden' onClick={toggleMenu}>
                {
                    show ? <img src={hamburger} /> : <img src={exit} />
                }
               
            </div>
            {
                !show ? <div  className='absolute flex flex-col sm:hidden top-[80px] w-full h-[379px] bg-white text-black px-[17px] py-[11px]'>
                    <ul className='w-full flex flex-col gap-4'>
                        <li><Link className='flex gap-2' to='/' element={<Home />}><img src={mobilehome}/>Home</Link></li>
                        <li><Link className='flex gap-2' to='/' element={<Home />}><img src={elec}/>Electronics</Link></li>
                        <li><Link className='flex gap-2' to='/' element={<Home />}><img src={blog}/>Blog</Link></li>
                        <li><Link className='flex gap-2' to='/' element={<Home />}><img src={contact}/>Contact</Link></li>
                    </ul>


                </div> : null
            }
        </div>
       
    )
}