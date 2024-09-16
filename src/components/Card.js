
import star from '../static/star.png'
import { Link } from 'react-router-dom';
import {Form} from '../pages/Form'
export const Card = (props) => {
    return (
        <div className="w-[258px] flex flex-col justify-center items-center gap-[10px] rounded-lg border-none shadow-2xl p-7">
            <img src={props.image} className='w-auto h-[177px]' />
            <img src={star} className='w-[104px]' />
            <div>
                <h2 className='font-medium text-[20px]'>Smart Apple Watch</h2>
                <div className='flex gap-[15px] justify-center mt-3'>
                    <p className='  text-[rgb(179,54,10)] font-medium'> $ 100.00</p>
                    <p className='text-[13px] line-through'>  $ 130.00</p>
                </div>

            </div>
            <div><button className='text-[12px] font-semibold w-[84px] h-auto pt-[5px] pb-[5px] text-[white] rounded-3xl bg-[#E4340D] pl-[10px] pr-[10px] '>
              <Link to="/form" element={<Form />}> Shop Now</Link>
                </button>
            </div>



            
        </div>
    )
}