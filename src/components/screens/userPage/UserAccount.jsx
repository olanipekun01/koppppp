import React from 'react'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import { Apple, BookUser, Gift, Heart, LogOut, Pencil, UserRound, Wallet } from 'lucide-react'
import Header2 from '../../layouts/Header2'

const UserAccount = () => {
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

            <div className="lg:drop-shadow-md rounded-lg bg-[#fff]  ">
                <div className="px-5 py-5 border-b-[1px] border-[#0000001A] flex justify-between">
                    <h3 className="text-[20px] font-bold  ">Account Overview</h3>
                    <Pencil className='text-[#FCB349]' />
                </div>
                <div className="flex flex-col lg:flex-row lg:px-6 lg:gap-6">
                    <div className="mt-8 lg:w-[369px] border-[1px] border-solid border-[#0000001A] rounded-lg px-2 lg:px-4 h-[201px]">
                        <h4 className="py-2 text-[16px] font-normal border-b-[1px] border-[#0000001A]">Account Details</h4>
                        <div className="lg:w-[50%]">
                            <span className="text-[14px] font-normal mt-4 ">Wave Adom</span>
                            <p className="text-[14px] font-normal text-[#00000080] mt-4">iamwaveofficial@gmail.com</p>
                        </div>
                    </div>
                    <div className="mt-8 border-[1px] lg:w-[440px] border-solid border-[#0000001A] rounded-lg px-2 lg:px-4 ">
                        <h4 className="py-2 text-[16px] font-normal border-b-[1px] border-[#0000001A]">Address Book</h4>
                        <div className="lg:w-[50%] lg:pb-5">
                            <span className="text-[14px] font-normal mt-4">Your default shipping address:</span>
                            <p className="text-[14px] font-normal text-[#00000080] mt-4">Wave Adom Shop G8-18 Areena market, Oshodi, Lagos OSHODI-BOLADE, Lagos</p>
                            <p className="text-[14px] font-normal text-[#00000080] mt-4">+234 8072101662 / +234 8033542913</p>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>

        


        <Footer />
    </>
  )
}

export default UserAccount