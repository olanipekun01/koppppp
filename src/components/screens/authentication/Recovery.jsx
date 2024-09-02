import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader'
import Message from '../../Message'

const Recovery = () => {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const [show, changeShow] = useState("fa fa-eye-slash")
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        // console.log(fname, lname, email,  phoneNumber, password)
        
    }
  return (
    <>
        <div className="flex flex-row ">
            <div className="w-[100%] left_wrapper lg:w-[50%] bg-[#25133A] px-7 lg:px-[7%] py-[50px]">
                <div className="">
                    <h1 className='text-[20px] font-weight-700 mb-[30px] text-[#FFFFFF] '>KOP Mall</h1>
                    <div className=" mb-[20px]">
                        <h3 className='text-[20px] font-weight-700 mb-[10px] text-[#FFFFFF]'>Create Password</h3>
                        <p className='text-[12px] font-weight-400 text-[#FFFFFF] lg:text-[16px] '>Enter a new password different from the previous</p>
                    </div>
                    
                    <div className="divider text-[14px] text-[#FFFFFF80] font-weight-400 my-10">OR</div>
                    {error && <Message variant='danger'>{Error}</Message>}
                    <form action="" onSubmit={submitHandler} className='flex flex-col gap-3'>
                        <label className="input input-bordered flex items-center gap-2 border-[1px] border-solid border-[#FFFFFF80] bg-transparent text-[#FFFFFF80] text-[16px] font-weight-400 ">
                            <input type="password" className="grow" value={password} onChange={setPassword} />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                            
                        </label>
                        <label className="input input-bordered flex items-center gap-2 border-[1px] border-solid border-[#FFFFFF80] bg-transparent text-[#FFFFFF80] text-[16px] font-weight-400 ">
                            <input type="password" className="grow" value={confirmPassword} onChange={setConfirmPassword} />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                            
                        </label>
                        <button className="btn btn-block bg-transparent border-[1px] border-[#FCB349] text-[#FCB349] text-[20px] font-weight-700 hover:text-[#FCB349] hover:border-[#25133A] hover:bg-[#ffff]">Continue</button>
                    </form>
                </div>
            </div>
            <div className="hidden lg:flex right_wrapper h-[100vh] w-[50%] py-[50px] px-[5%]  align-center justify-center">
                <div className=""> 
                    <img src="assets/SigupHeroImg.png" className='w-[450px] h-[400px] mx-auto' alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Recovery