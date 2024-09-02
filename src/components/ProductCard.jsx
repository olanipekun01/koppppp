import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons'
import { Heart } from 'lucide-react'

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


const ProductCard = ({product}) => {
  return (
    <>
        <div className="product_card min-w-[135px] lg:w-[260px]">
            <div className="bg-[#F5F5F5] overflow-y-hidden h-[125px] lg:h-[250px]  w-[100%] relative flex flex-col justify-center items-center ">
                <div className="flex justify-between items-center px-[2%] top-2 absolute w-[100%]">
                <span className='bg-[#067B35] px-[2px] py-[1px] text-[5px] lg:text-[12px] text-[#FAFAFA]'>New</span>
                <i className="p-[3px] bg-white rounded-full"><Heart className='w-[10px] h-[9px] lg:w-[20px] lg:h-[18px]' /></i>
                </div>
                <img className="w-[86px] h-[76px] lg:w-[172px] lg:h-[152px]" src={product.img} alt="" />
                <button className="absolute -bottom-10  w-[100%] py-1 bg-[#FCB349] text-[#FFFFFF] text-[10px] lg:text-[20px]">Add To Cart</button>
            </div>
            <div className="mt-2 lg:mt-5">
                <h4 className="text-[#080606] text-[8px] lg:text-[16px]">{product.name}</h4>
                <div className="flex gap-2 items-center lg:mt-4">
                    <span className="text-[#DB4444] text-[8px] lg:text-[16px]">π{product.price}</span>
                    <div className="">{StarRating(product.rating)}</div>
                    <span className='text-[#000000] text-[7px] lg:text-[14px] font-weight-semibold opacity-8'>({product.reviews})</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductCard;