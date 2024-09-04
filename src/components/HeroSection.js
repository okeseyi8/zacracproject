import heroimg from '../static/heroimg.jpg'
export const HeroSection = () =>{
    return(
        <div className='flex items-center justify-center bg-[#F9F9F9] gap-7 pt-[100px] pb-[100px]'>
            <div className='w-[476px] flex flex-col gap-[10px]'>
               <div className='text-[rgb(180,153,144)] text-[24px] font-medium '><h2>Sale up to 30% OFF</h2></div>
               <div className='text-[48px] font-medium'><h1>Apple Watch Series</h1></div>
               <div className='text-[16px] font-medium text-[#666666]'><p>Feature packed at a better value than ever, powerful sensors to monitor your fitness.</p></div>
               <div><button className='w-[124px] h-[44px] text-[white] rounded-3xl bg-[#E4340D]'>
                Shop Now
                </button></div>
            </div>
            <div>
               <img src={heroimg} className='w-[516px]' />
            </div>
        </div>
    )
}