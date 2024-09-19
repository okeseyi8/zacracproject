
import Link from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import watch from '../static/watch.png';
export const Form = () => {
    
    const schema = yup.object().shape({
        fullName: yup.string().required('Your Full name is required* '),
        gender: yup.string().required("Input your gender*"),
        quantity: yup.number().positive().integer().min(1).required('Quantity ordered is required*'),
       
        state: yup.string().required('Enter a valid state*'),
        city: yup.string().required('Enter a valid city*'),
        address: yup.string().required('Enter a valid address*'),

    })
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    });
    // password: yup.string().min(4).max(20).required()
    //confirmPassword: yup.string().oneOf([yup.ref()])
    const onSubmit = (data) => {
        console.log(data);
        console.log('Form submitted');
    }
    const buttonWorking = () => {
        console.log('Button clicked');
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}  className='w-screen flex flex-col md:flex-row items-start justify-center gap-8
        p-[40px] sm:p-[80px]'> 
           <div className=' w-full checkout-form'>
                <div>
                    <h1 className='font-medium text-[24px] mb-[20px]'>Customer details</h1>
                    <div className='form-container w-full '>
                        <div className='flex w-full  h-[455px] flex-col justify-center gap-[10px] pb-[40px] pr-[28px]  pl-[28px] shadow-xl border'>
                            <div>
                                <h1>Name</h1>
                                <input className='border border-[#ccc] outline-none w-full pt-[12px] pr-[9px] pb-[12px] pl-[9px] rounded-2xl' placeholder='Enter your name' {...register('fullName')}/>
                                <p className='text-[red]'>{errors.fullName?.message}</p>

                            </div>
                            <div className='flex w-full  gap-8'>
                                <div className='w-full' >
                                    <h1>Gender</h1>
                                    <input className='border border-[#ccc] outline-none w-full pt-[12px] pr-[9px] pb-[12px] pl-[9px] rounded-2xl' placeholder='Select the gender' {...register('gender')}/>
                                    <p className='text-[red]'> {errors.gender?.message}</p>
                                </div>
                                <div className='w-full'>
                                    <h1>City</h1>
                                    <input className='border border-[#ccc] outline-none w-full pt-[12px] pr-[9px] pb-[12px] pl-[9px] rounded-2xl' placeholder='Enter your city' {...register('city')}/>
                                    <p className='text-[red]'>{errors.city?.message}</p>
                                        
                                </div>
                            </div>
                            <div className='flex w-full gap-8'>
                                <div className='w-full'>
                                    <h1>State</h1>
                                    <input className='border border-[#ccc] outline-none w-full pt-[12px] pr-[9px] pb-[12px] pl-[9px] rounded-2xl' placeholder='Select the state' {...register('state')}/>
                                    <p className='text-[red]'>{errors.state?.message}</p>
                                        
                                </div>
                                
                            </div>
                            <div>
                                <h1>Address</h1>
                                <input className='border border-[#ccc] outline-none w-full pt-[12px] pr-[9px] pb-[12px] pl-[9px] rounded-2xl' placeholder='Enter your address' {...register('address')}/>
                                <p className='text-[red]'>{errors.address?.message}</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
           </div>
           <div className='order-summary w-full md:w-[40%]'>
                <h1 className='font-medium text-[24px]  mb-[20px]'>Order details</h1>
                <div className='product-card flex flex-col items-center w-full h-auto border shadow-xl gap-5'>
                    <div className='flex p-4 w-full justify-between '>
                        <div className='w-full flex justify-between'>
                            <div className='flex'>
                                <img className='w-[47px] h-[75px]' src={watch}/>
                                <div className=''> 
                                    <h1 className='font-medium text-[24px'>
                                        Smart Apple Watch
                                    </h1>
                                    <h1 className='font-medium text-[16px] text-[#666] '>
                                        1SD66
                                    </h1>
                                    <p className='  text-[rgb(179,54,10)] font-medium'> $ 100.00</p>
                                </div>
                            </div>
                            <div>
                                <h1 className='font-medium text-[24px]'>2</h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='pl-4 pr-4 pb-4 '>
                           <button onClick={buttonWorking} className='w-full bg-[red] rounded-md text-[#fff] pt-[5px] pb-[5px] '>
                              <input  type='submit' />
                           </button>
                        </div>
                    </div>
                    
                </div>

           </div>
        </form>
       
    )
}