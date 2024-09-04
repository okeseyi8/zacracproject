import zed_logo from '../static/zed_logo.png'
import search from '../static/ion_search-outline.png'
import {ReactComponent as LikeIcon} from "../static/Vector (1).svg"
import { Home } from '../pages/Home'
import {Link} from 'react-router-dom'
// import cart from '../static/Vector (1).png'
import cart  from '../static/mdi_cart-outline.png'
export const Navbar = () => {
    return(
        <div className="header w-screen flex h-[80px] justify-center gap-[320px]  items-center pl-[18px] pr-[45px] shadow-lg">
            <div>
                <img src={zed_logo} />
            </div>
            <div>
                <ul className='flex gap-[42px] text-[18px] font-medium'>
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
                <ul className='flex gap-[32px] '>
                    <li><img src={search} /></li>
                    <li className='flex items-center'><LikeIcon /></li>
                    <li><img src={cart} /></li>

                   
                </ul>
            </div>
        </div>
    )
}