import { Apple, Lamp, Laptop, Smartphone } from 'lucide-react'
import React, {useState, useEffect} from 'react'
import { listCategories } from '../actions/productsActions'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import {Link, useParams } from 'react-router-dom'

const Category = () => {
    const dispatch = useDispatch()
    const categoryList = useSelector((state) => state.categoryList);
    const {error, loading, categories} = categoryList

    useEffect(() => {
        dispatch(listCategories())
    }, [dispatch])


  return (
    <>
        <div className="category_div hidden max-h-[390px] lg:flex flex-col justify-between w-[20%] bg-[#25133A] p-5 text-[#FFFFFF]">
            
            {
                loading ? (<Loader />) : error ? (
                    <Message variant='danger'>{error}</Message>
                ) : (
                    <div className="card_wrapper w-[100%] lg:w-[80%] flex flex-row flex-wrap gap-3">
                        {categories.map(cat => (
                            <Link key={cat.id} className="category_div_card text-decoration-none" to={`/store/${cat.id}`}>
                                
                                <Smartphone />
                                <span>{cat.name}</span>
                                
                            </Link>
                        ))}
                    </div>
                )
            }
           
        </div>
    </>
  )
}

export default Category