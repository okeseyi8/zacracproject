import heroimg from '../static/heroimg.jpg'
export const HeroSection = () =>{
    return(
        <div className='w-screen h-auto sm:h-auto flex flex-col sm:flex-row   items-center justify-center bg-[#F9F9F9] pb-[100px] pl-3 pr-3 sm:pt-[10px]'>
            <div className=' w-full  flex flex-col justify-center pt-[100px]'>
               <div className='text-[rgb(194,125,103)] text-[24px] font-medium '><h2>Sale up to 30% OFF</h2></div>
               <div className='text-[48px] font-medium'><h1>Apple Watch Series</h1></div>
               <div className='text-[16px] font-medium text-[#666666]'><p>Feature packed at a better value than ever, powerful sensors to monitor your fitness.</p></div>
               <div><button className='w-[124px] h-[44px] text-[white] rounded-3xl bg-[#E4340D]'>
                Shop Now
                </button></div>
            </div>
            <div className='max-w-full h-full flex justify-center items-center '>

                      <img className='max-w-full w-auto h-full' src={heroimg}/>
                        
               
                
            

            </div>
             
        </div>
    )
}