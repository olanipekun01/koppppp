import React from 'react'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import { Apple, BookUser, Gift, Heart, LogOut, Pencil, UserRound, Wallet } from 'lucide-react'
import Header2 from '../../layouts/Header2'

const UserOrder = () => {
  return (
    <>
        <Header2 />

        <div className="py-20 lg:px-28 px-[5%]  bg-[#f9f9f9] flex flex-col lg:flex-row lg:justify-between">
            <div className="category_div rounded-lg drop-shadow-md    lg:flex flex-col gap-2 w-100% lg:w-[20%] lg:h-[23%] bg-[#fff]  text-[#000000]">
                <div className="category_div_card rounded-t-lg bg-[#D7D7D7] px-5 py-3">
                    <UserRound />
                    <span>My Account</span>
                </div>
                <div className="category_div_card px-5 py-2">
                    <i className="w-[24px] h-[24px]"><Gift /></i>
                    <span>Orders</span>
                </div>
                <div className="category_div_card px-5 py-2">
                    <Heart />
                    <span>Saved items</span>
                </div>
                <div className="category_div_card px-5 py-2">
                    <BookUser />
                    <span>Address book</span>
                </div>
                <div className="category_div_card px-5 py-2">
                    <Apple />
                    <span>Supermarket</span>
                </div>
                <div className="category_div_card px-5 py-2">
                    <Wallet />
                    <span>Wallet</span>
                </div>
            <div className="div border-t-[1px] border-[#0000001A] py-3 flex flex-col justify-center items-center">
                    <a className='text-[#FCB349] flex flex-row items-center gap-2' href=""><LogOut />Logout</a>
            </div>
            </div>

            <div className="lg:drop-shadow-md rounded-lg bg-[#fff] w-[100%] lg:w-[880px]  mt-10 lg:mt-0">
                <div className="px-5 py-5 border-b-[1px] border-[#0000001A] ">
                    <h3 className="text-[20px] font-bold  ">Orders</h3>
                </div>
                <div className="px-5">
                    <div className="flex flex-row text-[18px] gap-6 py-5">
                        <span className="text-[#FCB349] underline">ONGOING/DELIVERED <i>(2)</i></span>
                        <span className="">Closed Orders</span>
                    </div>

                    <div className="card_wrapper flex flex-col gap-4 lg:gap-6 mt-4 lg:mt-0  lg:py-4">
                        <div className="card rounded-none p-3 lg:p-5 flex flex-row justify-between items-start border-[0.5px] border-solid border-[#0000001A]">
                            <div className="flex flex-row gap-3 lg:gap-5 items-center">
                                <img src="/assets/ProductOverviewImageIV.png" alt="" className="w-[75px] h-[71px] lg:w-[150px] lg:h-[150px]" />
                            
                                <div className="flex flex-col gap-3">
                                    <h4 className='text-[12px] lg:text-[24px]'>Havic HV G-92 Gamepad</h4>
                                    <span className='text-[12px] lg:text-[24px] text-[#00000080]'>Order 217892</span>
                                    <span className='text-[9px] lg:text-[18px] w-fit p-2 rounded text-[#fff] bg-[#0F4202]'>Delivered</span>
                                    <span className='text-[12px] lg:text-[20px] font-bold'>On 21-06-2024</span>
                                </div>
                            </div>
                            <div className="">
                                <a href="" className="text-[#FCB349] text-[10px] lg:text-[20px]">SEE DETAILS</a>
                            </div>
                        </div>

                        <div className="card rounded-none p-3 lg:p-5 flex flex-row justify-between items-start border-[0.5px] border-solid border-[#0000001A]">
                            <div className="flex flex-row gap-3 lg:gap-5 items-center">
                                <img src="/assets/ProductOverviewImageIV.png" alt="" className="w-[75px] h-[71px] lg:w-[150px] lg:h-[150px]" />
                            
                                <div className="flex flex-col gap-3">
                                    <h4 className='text-[12px] lg:text-[24px]'>Havic HV G-92 Gamepad</h4>
                                    <span className='text-[12px] lg:text-[24px] text-[#00000080]'>Order 217892</span>
                                    <span className='text-[9px] lg:text-[18px] w-fit p-2 rounded text-[#fff] bg-[#0F4202]'>Delivered</span>
                                    <span className='text-[12px] lg:text-[20px] font-bold'>On 21-06-2024</span>
                                </div>
                            </div>
                            <div className="">
                                <a href="" className="text-[#FCB349] text-[10px] lg:text-[20px]">SEE DETAILS</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>




        <Footer />
    </>
  )
}

export default UserOrder