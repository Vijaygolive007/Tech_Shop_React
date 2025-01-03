import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../Data/productsData';
import Header from './Header';
import Footer from './Footer';
import Ouradvantages from './Ouradvantages';
import { FaCheck, FaStar } from 'react-icons/fa';
import ProductButtons from './productButtons';
import { useDispatch } from 'react-redux';
import { addToCart } from './ProductAction';
import ScrollToTop from './ScrollToTop';
const ProductDetails = () => {
  const { id } = useParams(); 
  const product = productsData.find((item) => item.id === parseInt(id)); 
  const [imagesetting,setimagesetting]=useState(0)
  const dispatch=useDispatch()



   const [buttonText, setButtonText] = useState('Add to Cart');
    const [buttonStyle, setButtonStyle] = useState({
      backgroundColor: 'red', 
      color: 'white', 
    });
  
    const handleClick = () => {
      // Change the button style and text immediately
      setButtonText('Added');
      dispatch(addToCart(product))
      setButtonStyle({
        backgroundColor: 'green', 
        color: 'white',
       
      });
  
      //  reset the style and text
      setTimeout(() => {
        setButtonText('Add to Cart');
        setButtonStyle({
          backgroundColor: 'red', 
          color: 'white',
        });
      }, 2000);
    };

  console.log(product)
  const handleClickimg1=()=>{
    setimagesetting(0)
  }
  const handleClickimg2=()=>{
    setimagesetting(1)
  }
  const handleClickimg3=()=>{
    setimagesetting(2)
  }
  const handleClickimg4=()=>{
    setimagesetting(3)
  }



  const renderStars = (rateCount) => {
      return [...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          color={index < rateCount ? 'red' : 'gray'}
          className="me-2"
        />
      ));
    };

  if (!product) {
    return <p>Product not found</p>;
  }

  return (<>
    <Header/>
    <div className='d-flex mb-4'>
      <div className=' ms-3 d-flex flex-column '>
        <img className='mt-4 p-2 border' style={{width:"100px"}} onClick={handleClickimg1} src={product.images[0]} alt="" />
        <img className='mt-4 p-2 border' style={{width:"100px"}} onClick={handleClickimg2} src={product.images[1]} alt="" />
        <img className='mt-4 p-2 border' style={{width:"100px"}} onClick={handleClickimg3} src={product.images[2]} alt="" />
        <img className='mt-4 p-2 border' style={{width:"100px"}} onClick={handleClickimg4} src={product.images[3]} alt="" />
      </div>
    <img className='col-4 ps-5' src={ product.images[imagesetting] ? product.images[imagesetting]: product.heroImage} alt={product.title} />
    <div className="container  col-5">
      <div className="card product-heading card-style">
        <div className="card-body">
          <h3>{product.title}</h3>
          <p>{product.info}</p>
          <div className="rating mb-3">{renderStars(product.rateCount)}<span className='text-dark'> |1234 Ratings</span></div>
          <hr />
          <div className='d-flex justify-content-between'>
            <div>
              <span className='fs-2 mt-3 fw-bold'>₹{product.finalPrice}</span>
              <strike className="ms-3 fs-4 strike-color fw-bold">₹{product.originalPrice}</strike>
              <p className='text-success fw-bold'>You save: ₹{product.originalPrice-product.finalPrice}  ({Math.round(product.finalPrice/product.originalPrice*100)}%)</p>
              <p>(Inclusive of all taxes)</p>
            </div>
            
            <span className='bg-success mt-5 mb-5 p-1 rounded'><FaCheck style={{color:'white'}} /> In Stock</span>
            
          </div>
          <hr />
          <p>Offers and Discounts</p>
          <div className='d-flex justify-content-around'>
            <p className='p-2 border rounded fs-5 strike-color w-100'>No Cost EMI on Credit <br/> Card</p>
            <p className='p-2 border rounded fs-5 strike-color w-100 ms-2'>Pay Later & Avail <br/>Cashback</p>
          </div>
          <hr />
          <button className='btn btn-danger px-5' onClick={handleClick} style={buttonStyle}>{buttonText}</button>
        </div>
      </div>
    </div>
    </div>
    <ProductButtons/>
    <Ouradvantages/>
    <Footer/>
    <ScrollToTop/>
    </>
  );
};

export default ProductDetails;
