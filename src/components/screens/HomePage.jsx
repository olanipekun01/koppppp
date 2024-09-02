import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons'
import Header from '../layouts/Header'
import Header2 from '../layouts/Header2'
import Footer from '../layouts/Footer'
import ImageSlider from '../ImageSlider'
import { Apple, Camera, Car, Gamepad2, Heart, House, Lamp, Laptop, Phone, Shell, Smartphone, Truck, Watch } from 'lucide-react'
import {IconProp} from '@fortawesome/fontawesome-svg-core'
import ProductCard from '../ProductCard'
import ProductCardii from '../ProductCardii'
import { flash_sales, logos, products } from '../../data'
import Category from '../Category'

const slideImg ="assets/Slider_1.png"


const IMAGES = [slideImg, slideImg, slideImg, slideImg, slideImg]





const HomePage = () => {
  return (
    <>
        <Header2 />
        {/* <FontAwesomeIcon icon={faCoffee} /> */}
        
        <div className='mt-20 lg:px-28 px-[5%] h-[140px] lg:h-[345px] flex space-between'> 
          {/* <div className="category_div hidden lg:flex flex-col justify-between w-[25%] bg-[#25133A] p-5 text-[#FFFFFF]">
            <div className="category_div_card">
              <Smartphone />
              <span>Phones & Tablets</span>
            </div>
            <div className="category_div_card">
              <i className="w-[24px] h-[24px]"><Lamp /></i>
              <span>Appliances</span>
            </div>
            <div className="category_div_card">
              <Laptop />
              <span>Computing</span>
            </div>
            <div className="category_div_card">
              <Watch />
              <span>Wearable Tech</span>
            </div>
            <div className="category_div_card">
              <Apple />
              <span>Supermarket</span>
            </div>
            <div className="category_div_card">
              <Camera />
              <span>Cameras</span>
            </div>
            <div className="category_div_card">
              <Gamepad2 />
              <span>Gaming</span>
            </div>
            <div className="category_div_card">
              <House />
              <span>Land & Properties</span>
            </div>
            <div className="category_div_card">
              <Car />
              <span>Automobiles</span>
            </div>
            <div className="category_div_card">
              <Shell />
              <span>Other Categories</span>
            </div>
          </div> */}
          <Category />
          <div className='w-[90%] lg:w-[72%]' style={{ height: "100%", margin: "0 auto"}}>
            <ImageSlider imageUrls={IMAGES} />
          </div>
        </div>

        <div className="flash_sales_section lg:px-28 px-[5%] mt-20">
            <div className='flex gap-3 items-center '>
              <img className='w-14px h-27px lg:w-[20px] lg:h-[40px]' src="/assets/Rectangle.png" alt="" />
              <span className="text-[#FDAF3E] text-[12px] lg:text-[24px]  font-bold">Today's</span>
            </div>
            <div><h3 className='text-[#000000] text-[18px] lg:text-[36px] font-semibold mt-6 lg:mt-8 '>Flash Sales</h3></div>

            <div className="product_card_wrapper mt-6 lg:mt-8 pb-3 flex flex-row flex-nowrap gap-6 overflow-x-scroll scrolling-auto">
              
              {flash_sales.map(data => (
                <ProductCardii key={data.id} data={data} />
              ))}
            </div>
        </div>

        <div className="lg:px-28 px-[2%]">
          <div className="mt-20  px-[5%] relative best_selling bg-[#000000] flex items-center justify-between h-[180px] lg:h-[500px] ">
            <div className="">
              <span className='text-[5.75px] lg:text-[16px] text-[#fff] font-semibold mb-5'>Best Selling</span>
              <h1 className='text-[17.28px] lg:text-[48px] text-[#FAFAFA] font-semibold w-[160px] lg:w-[443px] leading-5 lg:leading-10'>Enhance Your Music Experience</h1>
              <div className="time_wrapper flex items-center gap-4 mt-3 lg:mt-6
              ">
                <div className="flex flex-col bg-white w-[27px] h-[27px] lg:w-[64px] lg:h-[64px] justify-center items-center rounded-full">
                  <span className="text-[7.2px] lg:text-[16px] text-[#000000] font-semibold">23</span>
                  <span className="text-[7px] lg:text-[11px] text-[#000000]">Hours</span>
                </div>
                <div className="flex flex-col bg-white w-[27px] h-[27px] lg:w-[64px] lg:h-[64px] justify-center items-center rounded-full">
                  <span className="text-[7.2px] lg:text-[16px] text-[#000000] font-semibold">23</span>
                  <span className="text-[7px] lg:text-[11px] text-[#000000]">Hours</span>
                </div>
                <div className="flex flex-col bg-white w-[27px] h-[27px] lg:w-[64px] lg:h-[64px] justify-center items-center rounded-full">
                  <span className="text-[7.2px] lg:text-[16px] text-[#000000] font-semibold">23</span>
                  <span className="text-[7px] lg:text-[11px] text-[#000000]">Hours</span>
                </div>
                <div className="flex flex-col bg-white w-[27px] h-[27px] lg:w-[64px] lg:h-[64px] justify-center items-center rounded-full">
                  <span className="text-[7.2px] lg:text-[16px] text-[#000000] font-semibold">23</span>
                  <span className="text-[7px] lg:text-[11px] text-[#000000]">Hours</span>
                </div>
              </div>
              <button className='mt-4 lg:mt-8 bg-[#4B3D88] py-1 px-5 lg:py-4 lg:px-12 text-[5.76px] lg:text-[16px] text-[#FAFAFA] font-medium'>Buy Now!</button>
            </div>
            <div className="">
              <img className='absolute top-0 left-[50%] lg:w-[504px] lg:h-[500px] w-[182px] h-[182px] z-10' src="/assets\Ellipse 23.png" alt="" />
              <img className='w-[205px] lg:w-[568px] lg:h-[330px] h-[119px] z-20 relative' src="/assets\JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png" alt="" />
            </div>
          </div>
        </div>


        <div className="featured_section lg:px-28 px-[5%] mt-20">
          <div className='flex gap-3 items-center '>
            <img className='w-14px h-27px lg:w-[20px] lg:h-[40px]' src="/assets/Rectangle.png" alt="" />
            <span className="text-[#FDAF3E] text-[12px] lg:text-[24px]  font-bold">Featured</span>
          </div>
          <h3 className='text-[#000000] text-[18px] lg:text-[36px] font-semibold mt-6 lg:mt-8 '>New Arrival</h3>

          <div className="mt-6 lg:mt-8 flex flex-col lg:flex-row gap-12">
            <div className="grad_1 h-[414px] lg:h-[600px] lg:w-[570px] rounded-md relative flex justify-end flex-col ">
              <img className='absolute bottom-0 z-10 lg:w-511px lg:h-[511px]' src="/assets/ps5-slim-goedkope-playstation_large.png" alt="" />
              <div className="relative z-20 px-8 py-8">
                <h4 className='text-[#FAFAFA] text-[23px] lg:text-[32px] font-bold leading-4'>PlayStation 5</h4>
                <p className=" mt-4 opacity-70 text-[#FAFAFA] text-[12px] lg:text-[16px] w-[178px] w-[242px] font-bold leading-5">Black and White version of the PS5 coming out on sale.</p>
                <button className="mt-2 lg:mt-8 bg-[#FCB349] rounded-sm py-3 px-9 lg:py-4 lg:px-12 text-[11px] lg:text-[16px] text-[#000000] font-medium">Buy Now!</button>
              </div>
            </div>
            <div className="flex flex-col gap-5 lg:gap-8 lg:w-[570px] ">
              <div className="flex flex-row items-start h-[196px]  lg:h-[284px] rounded-sm">
                <div className="grad_1 h-[100%] w-[50%] px-4 py-3 flex flex-col justify-end">
                  <div className="">
                    <h4 className="text-[#FAFAFA] text-[22px] lg:text-[32px] font-bold leading-4">Smart Watches</h4>
                    <p className="mt-4 opacity-70 text-[#FAFAFA] text-[12px] lg:text-[16px] w-[178px] font-bold leading-5">This is a placeholder for product description.</p>
                    <button className="mt-2 lg:mt-8 bg-[#FCB349] rounded-sm py-2 px-5 lg:py-4 lg:px-12 text-[11px] lg:text-[16px] text-[#000000] font-medium">Buy Now!</button>
                  </div>
                </div>
                <div className="grad_2 h-[100%] w-[50%] flex justify-center">
                  <img src="/assets/daniel-korpai-hbTKIbuMmBI-unsplash-removebg-preview.png" alt="" className="lg:w-223px lg:h-279px" />
                </div>
              </div>
              <div className="flex justify-between h-[196px] lg:h-[284px]">
                <div className="w-[47%] relative h-[100%] grad_1 flex flex-col justify-end">
                  <img className='absolute top-5 left-0 right-0 m-auto z-10 w-[131px] h-[152px] lg:w-[210px] lg:h-[222px]' src="/assets/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png.png" alt="" />
                  <div className="relative z-20 px-4 py-3 ">
                    <h4 className='text-[#FAFAFA] text-[22px] lg:text-[32px] font-bold leading-4'>Speakers</h4>
                    <p className="mt-4 opacity-70 text-[#FAFAFA] text-[12px] lg:text-[16px] w-[178px] font-bold leading-5">Amazon wireless speakers</p>
                    <button className="mt-2 lg:mt-8 bg-[#FCB349] rounded-sm py-2 px-5 lg:py-4 lg:px-12 text-[11px] lg:text-[16px] text-[#000000] font-medium">Buy Now!</button>
                  </div>
                </div>
                <div className="w-[47%] relative h-[100%] grad_1 flex flex-col justify-end">
                  <img className='absolute top-5 left-0 right-0 m-auto z-10 w-[75px] h-[78px] lg:w-[109px] lg:h-[113px]' src="/assets/frankie-VghbBAYqUJ0-unsplash-removebg-preview.png" alt="" />
                  <div className="relative z-20 px-4 py-3">
                    <h4 className='text-[#FAFAFA] text-[22px] lg:text-[32px] font-bold leading-4'>Mouse</h4>
                    <p className="mt-4 opacity-70 text-[#FAFAFA] text-[12px] lg:text-[16px] w-[178px] font-bold leading-5">Logitech Mouse.</p>
                    <button className="mt-2 lg:mt-8 bg-[#FCB349] rounded-sm py-2 px-5 lg:py-4 lg:px-12 text-[11px] lg:text-[16px] text-[#000000] font-medium">Buy Now!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="explore_products_section lg:px-28 px-[5%] mt-20">
            <div className='flex gap-3 items-center '>
              <img className='w-14px h-27px lg:w-[20px] lg:h-[40px]' src="/assets/Rectangle.png" alt="" />
              <span className="text-[#FDAF3E] text-[12px] lg:text-[24px]  font-bold">Featured</span>
            </div>
            <div><h3 className='text-[#000000] text-[18px] lg:text-[36px] font-semibold mt-6 lg:mt-8 '>New Arrival</h3></div>

            <div className="product_card_wrapper pb-3 mt-6 lg:mt-8 flex flex-row gap-6 flex-wrap">
              
              {products.map(product => (
                <ProductCard key={product.id} product={product}/>
              ))}
            </div>
        </div>


        <div className="category_section lg:px-28 px-[5%] mt-20">
          <div className='flex gap-3 items-center '>
            <img className='w-14px h-27px lg:w-[20px] lg:h-[40px]' src="/assets/Rectangle.png" alt="" />
            <span className="text-[#FDAF3E] text-[12px] lg:text-[24px]  font-bold">Categories</span>
          </div>
          <div><h3 className='text-[#000000] text-[18px] lg:text-[36px] font-semibold mt-6 lg:mt-8 '>Browse By Category</h3></div>

          <div className="category_card_wrapper mt-6 lg:mt-8 flex flex-row gap-6">
            <div className="catgory_card hover:bg-[#FDAF3E] w-[85px] h-[72px] lg:w-[170px] lg:h-[145px] gap-2 flex flex-col  items-center justify-center border-[1px] border-[#0000004D] rounded-[4px]">
                <i ><Smartphone className='h-[28px] w-[28px] mx-auto lg:h-[56px] lg:w-[56px]' /></i>
                <p className='text-[8px] mx-auto  lg:text-[16px] text-[#000]'>Phones</p>
            </div>
          </div>

        </div>

        <div className="official_store_section lg:px-28 px-[5%] mt-20">
          <div className="">
            <h3 className='text-[24px] lg:text-[32px] font-bold text-center'>Official Store</h3>
          </div>

          <div className="store_card_wrapper mt-4 lg:mt-6 flex flex-wrap justify-between gap-y-3">
            {logos.map(logo => (
              <div key={logo.id} className="store_card w-[97px] h-[93px] lg:w-[170px] lg:h-[163px] flex flex-col justify-center items-center rounded-[5%] bg-[#4B3D88]">
                <img className="w-[69px] h-[34px] lg:w-[120px] lg:h-[63px]" src={logo.icon} alt=""  />
              </div>
            ))
          }
          </div>
        </div>


        <div className="lg:px-44 px-[5%] mt-20 flex flex-row justify-between items-start">
            <div className="card flex flex-col justify-center items-center">
              <i className="p-2 lg:p-3 w-fit border-[#fee8c8] border-[6px] lg:border-[10px] text-[#fff] bg-[#25133A] rounded-full"><Truck className='w-[16px] h-[16px] lg:w-[40px] lg:h-[40px]' /></i>
              <h4 className="mt-3 text-[8px] lg:text-[20px] font-bold">FREE AND FAST DELIVERY</h4>
              <p className='mt-2 text-[5.6px] lg:text-[14px]'>Free delivery for all orders over $140</p>
            </div>

            <div className="card flex flex-col justify-center items-center">
              <i className="p-2 lg:p-3 w-fit border-[#fee8c8] border-[6px] lg:border-[10px] text-[#fff] bg-[#25133A] rounded-full"><Truck className='w-[16px] h-[16px] lg:w-[40px] lg:h-[40px]' /></i>
              <h4 className="mt-3 text-[8px] lg:text-[20px] font-bold">24/7 CUSTOMER SERVICE</h4>
              <p className='mt-2 text-[5.6px] lg:text-[14px]'>Friendly 24/7 customer support</p>
            </div>
            
            <div className="card flex flex-col justify-center items-center">
              <i className="p-2 lg:p-3 w-fit border-[#fee8c8] border-[6px] lg:border-[10px] text-[#fff] bg-[#25133A] rounded-full"><Truck className='w-[16px] h-[16px] lg:w-[40px] lg:h-[40px]' /></i>
              <h4 className="mt-3 text-[8px] lg:text-[20px] font-bold">MONEY BACK GUARANTEE</h4>
              <p className='mt-2 text-[5.6px] lg:text-[14px]'>We reurn money within 30 days</p>
            </div>

        </div>


        
        <div className="lg:px-28 px-[5%] mt-20 flex flex-col lg:flex-row justify-between items-start">
          <div className="relative bg-[#FCB349] flex flex-row justify-between px-2 lg:px-5 w-[100%] lg:w-[48%] lg:h-[194px]">
            <div className="flex flex-col justify-end">
              <img className='absolute top-0 left-0 w-[54px] h-[108px] lg:w-[75px] lg:h-[150px] z-10' src="/assets/Ellipse26.png" alt="" />
              <img className='relative z-20 lg:bottom-0' src="/assets/image67.png" alt="" />
            </div>
            <div className=" flex flex-col justify-center items-center">
              <h4 className='w-[169px] lg:w-[234px] font-bold text-[23px] lg:text-[32px] text-right leading-7 lg:leading-10'>Save More on Apple Products</h4>
            </div>
          </div>

          <div className="relative mt-4 lg:mt-0 bg-[#FCB349] flex flex-row justify-between px-2 lg:px-5 w-[100%] lg:w-[48%] lg:h-[194px]">
            <div className="flex flex-col justify-end">
              <img className='absolute top-0 left-0 w-[54px] h-[108px] lg:w-[75px] lg:h-[150px] z-10' src="/assets/Ellipse26.png" alt="" />
              <img className='relative z-20 lg:bottom-0' src="/assets/image68.png" alt="" />
            </div>
            <div className=" flex flex-col justify-center items-center">
              <h4 className='w-[169px] lg:w-[234px] font-bold text-[23px] lg:text-[32px] text-right leading-7 lg:leading-10'>Enjoy 3 months warranty on All Products</h4>
            </div>
          </div>

        </div>


  
        
        <Footer />
    </>
  )
}

export default HomePage