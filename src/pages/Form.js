
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import watch from '../static/watch.png';
import { useState } from 'react';
import { SubmitSuccess } from './Success';
import minus from '../static/minus.png'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import plus from "../static/plus.png"
import { useContext } from 'react';
import { Appcontext } from '../App';
import { useParams } from 'react-router-dom';


export const Form = () => {
    const baseUrl = 'https://z-commerce-vv76.onrender.com';
    const [isPending, setIsPending] = useState(false)
    const {id} = useParams()
    console.log(id)
    const [endpointData, setEndpointData] = useState({})
    const {product, setProducts} = useContext(Appcontext)
    const title = product.find((item) => item._id === id)?.name || "No id matches";
    const imgURl = product.find((item) => item._id === id)?.image || "err";
    const price = product.find((item) => item._id === id)?.price || "err";
    const [quantityPurchased, setQuantity] = useState(0)
    // const title = product.find((item) => {
    //     return (item._id === id ? id : " no id matches "
    // })



    const increaseCount = () => {
        setQuantity(quantityPurchased + 1)
    }
    const reduceCount = () => {
        setQuantity(quantityPurchased - 1)
    }


    
    const schema = yup.object().shape({
        fullName: yup.string().required('Your Full name is required* '),
        gender: yup.string().required("Input your gender*"),
        
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
        const actualData = {
            ...data, quantityPurchased
        };
        setIsPending(!isPending)
        fetch('https://z-commerce-vv76.onrender.com/api/orderitem',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(actualData)
        }).then(()=>{
            console.log('new-order added');
            setIsPending(false)
        
        })
        console.log(actualData);
        
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
                        <div className='w-full flex justify-between items-center'>
                            <div className='flex items-center'>
                                <img className='w-[47px] h-[75px]' src={`${baseUrl}${imgURl}`}/>
                                <div className=''> 
                                    <h1 className='font-medium text-[24px'>
                                        {title}
                                        

                                    </h1>
                                    
                                 <p className='  text-[rgb(179,54,10)] font-medium'> $ {price}</p>
                                </div>
                            </div>
                            <div className='w-[120px] flex items-center justify-around'> 
                                <button type='button'  onClick={reduceCount} className=' flex justify-center items-center w-[30px]  bg-[#040465] text-white '>
                                     
                                     <RemoveIcon className='text-[10px] w-1' />
                                </button>
                                
                                <h1 className='font-medium text-[24px]'>{quantityPurchased}</h1>
                                <button type='button' onClick={increaseCount} className=' flex justify-center items-center w-[30px]  bg-[#040465] text-white'>
                                     
                                     <AddIcon className='w-1 text-[4px]' />
                                </button>
                            </div>
                        </div>
                    </div> 
                    <div className='w-full p-4'>
                        <div className=' w-full flex justify-between'>
                            <h1 className='font-medium text-[24px]'>Sub-total:</h1>
                            <h1 className='font-medium text-[24px]'>{quantityPurchased * price}</h1>
                        </div>
                        
                        

                    </div>
                    <div className='w-full'>
                        <div className='pl-4 pr-4 pb-4 '>
                           { isPending && <button onClick={buttonWorking} className='w-full  bg-[#040465] rounded-md text-[#fff] pt-[5px] pb-[5px]' disabled>
                              Loading...
                           </button>}
                           { !isPending && <button onClick={buttonWorking} className='w-full  bg-[#040465] rounded-md text-[#fff] pt-[5px] pb-[5px] '>
                              <Link to="/form/success" element={<SubmitSuccess />}> 
                                 <input  type='submit' />
                              </Link>
                           </button>}
                        </div>
                    </div>
                    
                </div>
               

           </div>
        </form>
       
    )
}