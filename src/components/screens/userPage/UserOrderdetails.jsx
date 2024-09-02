import React from 'react'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import { Apple, BookUser, Gift, Heart, LogOut, Pencil, UserRound, Wallet } from 'lucide-react'
import Header2 from '../../layouts/Header2'

const UserOrderdetails = () => {
  return (
    <>
        <Header2 />

        <div className="py-20 lg:px-28 px-[5%]  bg-[#f9f9f9] flex flex-col lg:flex-row lg:justify-between">
            <div className="category_div rounded-lg drop-shadow-md    lg:flex flex-col gap-2 w-100% lg:w-[20%] lg:h-fit bg-[#fff]  text-[#000000]">
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


            <div className="lg:drop-shadow-md rounded-lg bg-[#fff] w-[100%] lg:w-[880px]  mt-10 lg:mt-0 pb-10">
                <div className="px-5 py-5 border-b-[1px] border-[#0000001A] ">
                    <h3 className="text-[20px] lg:text-[24px] font-bold ">Order Details</h3>
                </div>
                <div className="px-5">
                    <div className="mt-5 shadow-sm">
                        <span className="text-[20px]">Order no 217892</span>
                        <div className="mt-6 text-[16px] text-[#00000080] flex flex-col gap-2">
                            <span className="">2 items</span>
                            <span className="">Placed on 21-06-2024</span>
                            <span className="">Total: $162</span>
                        </div>
                    </div>

                    <div className="py-6">
                        <h4 className="text-[20px] font-bold">ITEMS IN YOUR ORDER</h4>
                        <div className="mt-3">
                            <div className="card shadow-md p-3 lg:p-5 ">
                                <div className="flex flex-col gap-2">
                                    <span className='text-[9px] lg:text-[18px] w-fit p-2 rounded text-[#fff] bg-[#0F4202]'>Delivered</span>
                                    <span className='text-[8px] lg:text-[20px] font-bold'>On 21-06-2024</span>
                                </div>
                                <div className="mt-3 flex flex-row gap-3 lg:gap-5 items-center">
                                    <img src="/assets/ProductOverviewImageIV.png" alt="" className="w-[75px] h-[71px] lg:w-[150px] lg:h-[150px]" />
                                
                                    <div className="flex flex-col gap-1">
                                        <h4 className='text-[12px] lg:text-[24px]'>Havic HV G-92 Gamepad</h4>
                                        <span className='text-[12px] lg:text-[20px] text-[#00000080]'>QUANTITY: 1</span>
                                        <span className='text-[8px] font-bold'>$162</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col lg:flex-row  gap-5 lg:gap-5 lg:justify-between">
                        <div className="lg:w-[400px] border-[1px] border-solid border-[#0000001A] rounded-md pb-3">
                            <h4 className="py-3 px-3  border-b-[1px] border-solid border-[#0000001A] text-[20px] font-bold">PAYMENT INFORMATION</h4>
                            <div className="flex flex-col gap-4">

                                <div className="px-3">
                                    <h6 className="text-[20px] ">Payment Method</h6>
                                    <div className="mt-2 flex flex-col gap-2 text-[16px] background: text-[#00000080]">
                                        <span className="">Pi Wallet</span>
                                    </div>
                                </div>

                                <div className="px-3">
                                    <h6 className="text-[20px] ">Payment Details</h6>
                                    <div className="mt-2 flex flex-col gap-2 text-[16px] background: text-[#00000080]">
                                        <span className="">Items total: $162</span>
                                        <span className="">Delivery fees: $5</span>
                                        <span className="">Total: $167</span>
                                    </div>
                                </div>

                                
                            </div>
                        </div>

                        <div className="lg:w-[400px] border-[1px] border-solid border-[#0000001A] rounded-md pb-3">
                            <h4 className="py-3 px-3  border-b-[1px] border-solid border-[#0000001A] text-[20px] font-bold">DELIVERY INFORMATION</h4>
                            <div className="flex flex-col gap-4">

                                <div className="px-3">
                                    <h6 className="text-[20px] ">Delivery Method</h6>
                                    <div className="mt-2 flex flex-col gap-2 text-[16px] background: text-[#00000080]">
                                        <span className="">Door Delivery</span>
                                    </div>
                                </div>

                                <div className="px-3">
                                    <h6 className="text-[20px] ">Shipping Address</h6>
                                    <div className="mt-2 flex flex-col gap-2 text-[16px] background: text-[#00000080]">
                                        <span className="">Wave Adom</span>
                                        <span className="">This is a placeholder for the delivery address</span>
                                    </div>
                                </div>

                                
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

export default UserOrderdetails