import { HeroSection } from "../components/HeroSection"
import {Card} from '../components/Card'
import { MyButton } from "../components/Button"
import box from "../static/box.png"
import support from "../static/support.png"
import card from "../static/oldcard.png"
import newcard from "../static/newcard.png"
import watch from '../static/watch.png';
import laptop from '../static/lappie.png';
import pod from '../static/pod.png';
import iphone from '../static/iphone.png';
import boom from '../static/boom.png';
import applelaptop from '../static/applelaptop.png';
import keyboard from '../static/keyboard.png';
import solar from '../static/solar.png';
import accessories from '../static/accessories.png';




export const Home = () => {
    return(

        <div className="w-screen">
            <HeroSection />
            <div className="w-full sm:p-[120px] flex flex-col sm:flex-row gap-[50px] items-center justify-center">
               <div className="flex flex-col items-center gap-[12px]">
                    <img src={box} className="w-[41px]"/>
                    <h2 className="font-semibold text-[20px]"> Fast Shipping</h2>
                    <p>Lorem ipsum dolor sit amet,</p>
               </div>
               <div className="flex flex-col items-center gap-[12px]">
                    <img src={newcard} className="w-[41px]"/>
                    <h2 className="font-semibold text-[20px]"> Easy refund</h2>
                    <p>Lorem ipsum dolor sit amet,</p>
               </div>
               <div className="flex flex-col items-center gap-[12px]">
                    <img src={support} className="w-[41px]"/>
                    <h2 className="font-semibold text-[20px]"> Online Support</h2>
                    <p>Lorem ipsum dolor sit amet,</p>
               </div>
               <div className="flex flex-col justify-center items-center gap-[12px]">
                    <img src={card} className="w-[41px]"/>
                    <h2 className="font-semibold text-[20px]"> Flexible Payments</h2>
                    <p>Lorem ipsum dolor sit amet,</p>
               </div>
               
            </div>
            <div className="flex flex-col items-center justify-center h-auto pt-[50px] pb-[50px]">
                <div className="text-center flex-col flex-wrap ">
                    <h1 className="font-semibold text-[24px] ">
                    Our Featured Products
                    </h1>
                    <p className="text-[14px] font-normal"> Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="mt-10 flex  justify-center flex-col sm:flex-row gap-[61px] flex-wrap" >
                    <Card image={watch}/>
                    <Card image={laptop}/>
                    <Card image={pod}/>
                    <Card image={iphone}/>
                </div>
           </div>
           <div className="w-auto pb-[80px] pt-[80px]   flex flex-col  items-center  justify-center sm:flex-row  gap-[148px] bg-[#E7EBEE]">
                <div className="w-full flex flex-col justify-center items-center gap-[80px]">
                    <div className="w-full flex flex-col  items-center justify-start">
                        <button className='text-[12px] font-semibold w-[84px] h-auto pt-[5px] pb-[5px] text-[white] rounded-3xl bg-[#E4340D]  '>
                            Hurry Up
                        </button>
                        <h1 className="text-[40px] text-center font-medium">
                        Up To 25% Discount Check it Out
                        </h1>
                    
                    </div>
                    <div>
                    <button className='text-[12px] font-semibold w-[84px] h-auto pt-[5px] pb-[5px] text-[white] rounded-3xl bg-[#E4340D] '>
                            Shop Now
                        </button>
                    </div>
                </div>
                <div className="w-full flex justify-center"> 
                    <img src={iphone} className="w-[453px] pl-2" />
                </div>
           </div>
           <div className="flex flex-col items-center justify-center h-auto pt-[50px] pb-[50px]">
                <div className="text-center flex-col flex-wrap ">
                    <h1 className="font-semibold text-[24px] ">
                    New Arrivals
                    </h1>
                    <p className="text-[14px] font-normal"> Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="mt-10 flex  justify-center flex-col sm:flex-row gap-[61px] flex-wrap" >
                    <Card image={watch}/>
                    <Card image={laptop}/>
                    <Card image={pod}/>
                    <Card image={iphone}/>
                </div>
           </div>
           <div className="w-full pb-[80px] pt-[80px] pr-[70px] pl-[70px]  flex flex-col  sm:flex-row flex-wrap  gap-[148px] bg-[#fff]">
               <div className="w-full">
                    <h1 className="font-semibold text-[24px]">
                        Blog and Events 
                    </h1>
                    <div className="flex  flex-wrap sm:flex-nowrap gap-[24px]">
                        <div className="flex flex-col gap-[12px] mt-10">
                            <div>
                                <img src={applelaptop}/>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={solar}/>
                                <p className="text-[#666] text-[12px]">January 5, 2015</p>

                            </div>
                            <div>
                                <h2 className="text-[14px] font-medium ">Music magnates headphones</h2>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[12px] mt-10">
                            <div>
                                <img src={boom}/>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={solar}/>
                                <p className="text-[#666] text-[12px]">January 5, 2015</p>

                            </div>
                            <div>
                                <h2 className="text-[14px] font-medium ">Music magnates headphones</h2>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[12px] mt-10">
                            <div>
                                <img src={keyboard}/>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={solar}/>
                                <p className="text-[#666] text-[12px]">January 5, 2015</p>

                            </div>
                            <div>
                                <h2 className="text-[14px] font-medium ">Music magnates headphones</h2>
                            </div>
                        </div>
                    </div>
               </div>
           </div>
        
           <div className="w-full pb-[80px] pt-[80px]   flex flex-col sm:flex-row items-center  justify-center   gap-[148px] bg-[#E7EBEE]">
                <div className="w-full flex flex-col items-center ">
                    <div className=" w-full flex flex-col items-center justify-start">
                        
                        <h1 className="font-semibold text-[16px]">
                        Big Discount
                        </h1>
                        
                        <h1 className="text-[40px] text-center font-medium">
                        Google Pixel Smartphone
                        </h1>
                        <button className='text-[12px] font-semibold w-[84px] h-auto pt-[5px] pb-[5px] text-[white] rounded-3xl bg-[#E4340D] pl-[10px] pr-[10px] '>
                            Hurry Up 
                        </button>
                    
                    </div>
                    
                </div>
                <div className="w-full">
                    <img src={accessories} className="w-[500px]" />
                </div>
           </div> 
        
           
        </div>
    )
}