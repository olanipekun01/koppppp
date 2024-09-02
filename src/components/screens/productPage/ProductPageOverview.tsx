import React, { useEffect, useState } from 'react';
import Header2 from '../../layouts/Header2';
import Footer from '../../layouts/Footer';
import ProductCardii from '../../ProductCardii';
import { flash_sales } from '../../../data';
import { Heart, Recycle, Truck } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../../../actions/productsActions';
import Loader from "../../Loader";
import Message from "../../Message";
// import { RootState } from '../../../store'; // Make sure to import the RootState type from your store configuration
import { AppDispatch } from '../../../store';
import type { Dispatch } from 'redux';

interface StarProps {
  filled: boolean;
}

const Star: React.FC<StarProps> = ({ filled }) => {
  return (
    <FontAwesomeIcon 
      className={filled ? 'text-[#ffc107] w-[10px] lg:h-[20px] lg:w-[20px] h-[10px]' : 'text-[#ccc] w-[10px] h-[10px] lg:h-[20px] lg:w-[20px]'} 
      icon={faStar} 
    />
  );
};

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <span className='' key={index}>
          <Star filled={rating > index} />
        </span>
      ))}
    </>
  );
};

interface ProductPageOverviewProps {
  params?: number; // Replace with appropriate type
}


const ProductPageOverview: React.FC<ProductPageOverviewProps> = ({ params }) => {
  // const ProductPageOverview: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [qty, setQty] = useState<number>(1);
  const { id } = useParams<{ id: string }>();
  // const dispatch = useDispatch();
  // const dispatch: Dispatch<any> = useDispatch();
  const dispatch: AppDispatch = useDispatch<AppDispatch>();
  const productDetails = useSelector((state: AppDispatch) => state.productDetails);
  const { error, loading, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(id));
    setQty(product?.stockCount || 1);
  }, [dispatch, id]);

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };

  const qtyDeleteHandler = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const qtyAddHandler = () => {
    if (product && qty < product.stockCount) {
      setQty(qty + 1);
    }
  };

  return (
    <>
    <Header2 />

      <div className="mt-20">
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          product && (
            <>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:px-28 px-[5%]">
              <div className="flex flex-row gap-5">
                <div className="div flex flex-col justify-between">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="small_image_card flex flex-col justify-center items-center bg-[#F5F5F5] w-[85px] h-[69px] lg:w-[170px] lg:h-[137px]">
                      <img className="w-[60px] h-[57px] lg:w-[112px] lg:h-[97px]" src="/assets/ProductOverviewSmallImageI.png" alt="" />
                    </div>
                  ))}
                </div>
                <div className="large_image_card flex flex-col justify-center items-center bg-[#F5F5F5] w-[250px] h-[300px] lg:w-[350px] lg:h-[450px] xl:w-[500px] xl:h-[600px]">
                  <img className="w-[223px] h-[157px]  lg:w-[296px] lg:h-[165px] xl:w-[446px] xl:h-[315px]" src={product?.image} alt="" />
                </div>
              </div>
              <div className="div mt-4 lg:mt-0 lg:w-[400px] xl:w-[400px]">
                <h3 className="text-[24px] font-semibold">{product?.name}</h3>
                <div className="flex gap-4 items-center mt-4">
                  <div>{StarRating({ rating: 4 })}</div>
                  <span className="text-[#000000] text-[14px] lg:text-[14px] font-weight-semibold opacity-8">(56) Reviews</span>
                  <span className="text-[#000000] text-[14px] lg:text-[14px] font-weight-semibold opacity-8">|</span>
                  <span className="text-[14px] text-[#000000] font-weight-semibold opacity-8">{product?.is_available ? "In stock" : "Out of stock"}</span>
                </div>
                {/* <div className="mt-4">
                    <p>Category: {product.category.name}</p> 
                </div> */}
                <div className="div text-left mt-4"><span className="text-[20px] font-medium">π{product?.amount}</span></div>
                <p className="mt-4 text-[14px] font-normal">{product?.description}</p>
                <div className="mt-4 flex flex-row justify-between items-center">
                  <div className="flex items-start flex-row">
                    <button className="border-[1px] border-solid border-[#00000080] flex flex-col justify-center items-center w-[30px] h-[44px] text-[20px] font-semibold" onClick={qtyDeleteHandler}>-</button>
                    <span className="border-[1px] border-solid border-[#00000080] flex flex-col justify-center items-center w-[65px] h-[44px] text-[20px] font-semibold">{qty}</span>
                    <button className="border-[1px] border-solid border-[#FCB349] bg-[#FCB349] text-white flex flex-col justify-center items-center w-[30px] h-[44px] text-[20px] font-semibold" onClick={qtyAddHandler}>+</button>
                  </div>
                  <button className="w-[179px] rounded-lg text-[#25133A] text-[20px] py-3 bg-[#FCB349]" onClick={addToCartHandler}>Add to cart!</button>
                  <i className="w-[44px] h-[44px] flex flex-col justify-center rounded items-center border-[1px] border-solid border-[#00000080]"><Heart className="w-[21px] h-[19px]" /></i>
                </div>
                <div className="mt-6 border-separate border-[1px] border-solid rounded-lg px-4">
                  <div className="flex flex-row items-center gap-3 py-6 border-b-[1px] border-solid">
                    <div><Truck className="w-[40px] h-[40px]" /></div>
                    <div className="div flex flex-col gap-2">
                      <h4 className="text-[16px] font-medium">Free Delivery</h4>
                      <span className="text-[12px] font-medium underline">Enter your postal code for Delivery Availability</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-3 py-6">
                    <div><Recycle className="w-[40px] h-[40px]" /></div>
                    <div className="div flex flex-col gap-2">
                      <h4 className="text-[16px] font-medium">Return Delivery</h4>
                      <span className="text-[12px] font-medium underline">Free 30 Days Delivery Returns. Details</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="join join-vertical w-full px-[4%] mt-9">
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title text-xl font-medium">Overview</div>
                <div className="collapse-content">
                  <p>This is a placeholder for details about the product such as dimension, color, and related content.</p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">Description</div>
                <div className="collapse-content">
                  <div>
                    <div className="flex flex-col gap-3">
                      <div className="card text-[20px] flex flex-row px-5 border-[1px]">
                        <span className="py-4 text-[#25133A] font-medium">Category:</span>
                        {/* <span className="py-4 text-[#00000080] font-medium">{product?.category.name}</span> */}
                      </div>
                      <div className="card text-[20px] flex flex-row px-5 border-[1px]">
                        <span className="py-4 text-[#25133A] font-medium">Brand:</span>
                        <span className="py-4 text-[#00000080] font-medium">{product?.brand}</span>
                      </div>
                      <div className="card text-[20px] flex flex-row px-5 border-[1px]">
                        <span className="py-4 text-[#25133A] font-medium">Model:</span>
                        <span className="py-4 text-[#00000080] font-medium">{product?.model}</span>
                      </div>
                      <div className="card text-[20px] flex flex-row px-5 border-[1px]">
                        <span className="py-4 text-[#25133A] font-medium">Availability:</span>
                        <span className="py-4 text-[#00000080] font-medium">{product?.availability}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
          )
        )}
      </div>

      <Footer />
    </>
  );
};

export default ProductPageOverview;
