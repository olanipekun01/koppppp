import React from 'react'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import { Apple, BookUser, Gift, Heart, LogOut, Pencil, Trash, UserRound, Wallet } from 'lucide-react'
import Header2 from '../../layouts/Header2'

const UserSavedItems = () => {
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
                    <h3 className="text-[20px] lg:text-[24px] font-bold ">Saved Items</h3>
                </div>

                {/* <div className="py-11 px-2 lg:px-5">
                    <div className="card rounded-lg p-3 lg:p-5 flex flex-row justify-between items-start border-[0.5px] border-solid border-[#0000001A]">
                        <div className="flex flex-row gap-3 lg:gap-5 items-start">
                            <img src="/assets/ProductOverviewImageIV.png" alt="" className="w-[75px] h-[71px] lg:w-[150px] lg:h-[150px]" />
                        
                            <div className="flex flex-col gap-2 lg:gap-3">
                                <h4 className='text-[12px] lg:text-[24px]'>Havic HV G-92 Gamepad</h4>
                                <span className="text-[12px] lg:text-[24px]">$162</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 lg:gap-6 items-end">
                            <a href="" className="lg:px-10 px-2 rounded lg:rounded-lg text-[#25133A] text-[8px] lg:text-[16px]  py-2 lg:py-3  bg-[#FCB349]">Buy Now!</a>
                            <div className="px-1 py-1 lg:py-3 rounded lg:rounded-lg  border-[1px] lg:border-none border-[##FCB349] text-[8px] lg:text-[16px] font-medium flex flex-row gap-1 lg:gap-2  items-center">
                                <Trash className="w-[7px] h-[9px] lg:w-[14px] lg:h-[18px]" />
                                <span className="">Remove</span>
                            </div>
                        </div>
                    </div>

                </div> */}

                <div className="py-11 flex flex-col justify-center items-center ">
                    <div className="flex flex-col items-center gap-6 w-[400px]">
                        <div className="">
                            <img src="/assets/saveditems.svg" alt="" className="w-[221px] h-[144px]" />
                        </div>
                        <div className="">
                            <h4 className="text-[20px] text-center font-bold">You don’t have any item saved yet!</h4>
                            <p className="mt-4 text-[16px] text-center font-medium">Found something you like? Tap on the heart shaped icon next to the item to add it to your wishlist! All your saved items will appear here.</p>
                        </div>
                        <a href="" className="lg:px-10 px-5 rounded lg:rounded-lg text-[#25133A] text-[8px] lg:text-[16px]  py-2 lg:py-3  bg-[#FCB349]">Continue Shopping</a>
                    
                    </div>
                </div>

            </div>
        
        </div>

        
        <Footer />


    </>
  )
}

export default UserSavedItems