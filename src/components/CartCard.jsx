import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Delete, Trash } from 'lucide-react'
import React from 'react'
import { removeFromCart } from '../actions/CartActions'

const Star = ({ filled }) => {
    return (
      <FontAwesomeIcon className={filled ? 'text-[#ffc107] w-[10px] lg:h-[20px] lg:w-[20px] h-[10px]' : 'text-[#ccc] w-[10px] h-[10px] lg:h-[20px] lg:w-[20px]'} icon={faStar} />
    )
  }
  
  
  const StarRating = (rating) => {
    return (
        <>
            {[...Array(5)].map((_, index) => (
                <span className='' key={index}>
                    <Star className="" filled={rating > index} />
                </span>
            ))}
        </>
    )
  }


const CartCard = ({data, removeFromCartHandler}) => {
    console.log("cart id", data)
  return (
    <>
        <div className="card p-3 flex flex-col gap-6 lg:gap-8">
            <div className="flex flex-col gap-3 lg:flex-row lg:gap-0 lg:justify-between">
                <div className="flex flex-row items-start gap-2">
                    <div className="w-[85px] h-[69px] bg-[#F5F5F5] flex justify-center items-center">
                        <img className='w-[61px] h-[53px]' src="/assets/havic-gamepad.png" alt="" />
                    </div>
                    <div className="flex flex-col gap-2 lg:gap-5">
                        <h3 className='text-[16px] lg:text-[24px] font-semibold'>{data.name}</h3>
                        <div className="">
                            <div className="flex gap-2 items-center justify-between">
                                <div className="">{StarRating(data.rating)}</div>
                                <span className='text-[#000000] text-[14px] lg:text-[14px] font-weight-semibold opacity-8'>({data.reviews}) Reviews</span>
                                <span className='text-[14px] text-[#000000] font-weight-semibold opacity-8'> | In stock</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="div  text-right"><span className='text-[20px] font-medium'>π{data.price}</span></div>
            </div>
            <div className="flex flex-row items-center justify-between">
                <div onClick={() => removeFromCartHandler(data.product)} className="flex flex-row items-center gap-2">
                    <span className="text-[20px] font-medium">Remove</span>
                   <i className="text-[#FDAF3E] "><Trash className='w-[16px] h-[18px]' /></i> 
                </div>

                <div className='flex items-start flex-row'>
                    <button className="border-[1px] border-solid border-[#00000080] flex flex-col justify-center items-center w-[40px] h-[44px] text-[20px] font-semibold">-</button>
                    <span className="border-[1px] border-solid border-[#00000080] flex flex-col justify-center items-center w-[80px] h-[44px] text-[20px] font-semibold">5</span>
                    <button className="border-[1px] border-solid border-[#FCB349] bg-[#FCB349] text-white flex flex-col justify-center items-center w-[40px] h-[44px] text-[20px] font-semibold">+</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default CartCard