import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons' 
import React from 'react'


const Footer = () => {
  return (
    <>
        <footer className="bg-[#25133A] text-[#fff] mt-20 ">
            <div className="flex flex-col gap-6 lg:justify-between lg:flex-row lg:items-start lg:px-28 px-[5%] py-4 lg:py-10">
                <div className="lg:w-[217px]">
                    <h1 className="text-[20x] lg:text-[24x] lg:font-weight-700 lg:text-3xl uppercase font-bold">
                        KOP MALL
                    </h1>
                    <div className="mt-6 lg:mt-3">
                        <h2 className='text-[20px] font-weight-500 capitalize mb-4'>subscribe</h2>
                        <span className="text-[16px] text-[#FAFAFA] font-weight-400">Get 10% off your first order</span>
                        <form action="" className="mt-5">
                            <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
                                
                                {/* ring-2 ring-gray-300 */}
                                <input className='lg:w-[100%] pr-10 pl-2 border-[1px] bg-transparent 
                                border-solid border-[#fff] py-2 font-semibold placeholder-gray-500 text-[12px] text-black rounded lg:rounded-xl  focus:ring-2 ' 
                                    type="text" 
                                    autocomplete="off"
                                    name="email" 
                                    placeholder='Enter your email' />
                                <FontAwesomeIcon icon={faArrowRight} className=' w-5 h-5 absolute ml-56 lg:ml-44' />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="mt-6 lg:mt-0 lg:w-[175px]">
                    <h2 className='text-[20px] font-weight-500 capitalize'>Support</h2>
                    <div className="mt-6 flex flex-col gap-4 text-[16px] text-[#FAFAFA] font-weight-400">
                        <span className="">This is a placeholder for the office address</span>
                        <span className="">kopmall@mail.com</span>
                        <span className="">+234 --------------</span>

                    </div>
                </div>
                <div className="mt-6 lg:mt-0 lg:w-[175px]">
                    <h2 className='text-[20px] font-weight-500 capitalize'>Account</h2>
                    <div className="mt-6 flex flex-col gap-4 text-[16px] text-[#FAFAFA] font-weight-400">
                        <span className=""><a href="" className="">My Account</a></span>
                        <span className=""><a href="" className="">Login</a> / <a href="" className=''>Register</a></span>
                        <span className=""><a href="" className="">Cart</a></span>
                        <span className=""><a href="" className="">Wishlist</a></span>
                        <span className=""><a href="" className="">Shop</a></span>
                        
                    </div>
                </div>
                <div className="mt-6 lg:mt-0 lg:w-[175px]">
                    <h2 className='text-[20px] font-weight-500 capitalize'>Quick Link</h2>
                    <div className="mt-6 flex flex-col gap-4 text-[16px] text-[#FAFAFA] font-weight-400">
                        <span className=""><a href="" className="">Privacy Policy</a></span>
                        <span className=""><a href="" className="">Terms Of Use</a></span>
                        <span className=""><a href="" className="">FAQ</a></span>
                        <span className=""><a href="" className="">Contact</a></span>
                        
                    </div>
                </div>

                <div className="mt-6 lg:mt-0 lg:w-[175px]">
                    <h2 className='text-[20px] font-weight-500 capitalize'>Social media</h2>
                    <div className="mt-6 flex flex-col gap-4 text-[16px] text-[#FAFAFA] font-weight-400">
                        <span className="">Connect with us</span>
                        <div className="icons_social flex gap-7">
                            <FontAwesomeIcon className='w-7 h-7' icon={faFacebookF} />
                            <FontAwesomeIcon className='w-7 h-7' icon={faArrowRight} />
                            <FontAwesomeIcon className='w-7 h-7' icon={faArrowRight} />
                            <FontAwesomeIcon className='w-7 h-7' icon={faArrowRight} />
                        
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="mt-6 border-t-[#FFFFFF] border-t-[1px] py-6 text-center">
                <span className='text-[16px] text-[#FFFFFF] font-weight-400'>&copy Copyright KOP Mall 2024. All right reserved</span>
            </div>
        </footer>
    </>
  )
}

export default Footer