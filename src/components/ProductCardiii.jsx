import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons'
import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

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


const ProductCardiii = ({data}) => {
  return (
    <>
        <div className="product_card min-w-[115px] lg:w-[220px]">
            <div className="bg-[#F5F5F5] overflow-y-hidden cursor-pointer h-[125px] lg:h-[250px]  w-[100%] relative flex flex-col justify-center items-center ">
                <div className="flex justify-between items-center px-[2%] top-2 absolute w-[100%]">
                {/* <span className='bg-[#067B35] px-[2px] py-[1px] text-[5px] lg:text-[12px] text-[#FAFAFA]'>New</span> */}
                <span className='bg-[#FCB349] px-[2px] py-[1px] text-[5px] lg:text-[12px] text-[#FAFAFA]'>%</span>
                <i className="p-[3px] bg-white rounded-full"><Heart className='w-[10px] h-[9px] lg:w-[20px] lg:h-[18px]' /></i>
                </div>
                <img className="w-[56px] h-[76px] lg:w-[142px] lg:h-[152px]" src={data.image} alt="" />
                <button className="absolute -bottom-10  w-[100%] py-1 bg-[#FCB349] text-[#FFFFFF] text-[10px] lg:text-[20px]">Add To Cart</button>
            </div>
            <div className="mt-2 lg:mt-5">
                <Link className='decoration-none' to={`/product/${data.id}`}>
                    <h4 className="text-[#080606] text-[8px] lg:text-[16px]">{data.name}</h4>
                </Link>
                <div className="flex flex-col gap-2 items-start lg:mt-4">
                    <div className='flex gap-2'>
                        <span className="text-[#DB4444] text-[8px] lg:text-[16px]">π{data.amount}</span>
                        <span className="text-[#000000] opacity-50 text text-[8px] lg:text-[16px]">π{data.price}</span>
                    </div>
                    <div className="flex gap-2">
                        <div className="">{StarRating(4)}</div>
                        <span className='text-[#000000] text-[7px] lg:text-[14px] font-weight-semibold opacity-8'>(5)</span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductCardiii