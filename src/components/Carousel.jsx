import React from 'react'
import './Carousel.css'
import productsData from '../Data/productsData'
import { Link } from 'react-router'


const Carousel = () => {
   //  product IDs to display
   const filteredIds = [1, 3, 7];

   // Filter products by IDs
   const filteredProducts = productsData.filter((product) =>
     filteredIds.includes(product.id))
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active rounded-circle button-carousel" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2" className='rounded-circle button-carousel'></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3" className='rounded-circle button-carousel'></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active  p-0 m-0" data-bs-interval="10000">
        <div className='carosel-back w-100 content-carousel'>
          <div className="col-4  ">
            <p className='content-head'>{filteredProducts[0].title}</p>
            <h3>Keep The Noise Out, Or In. You Choose</h3>
           <div className='mt-2 mb-2 pt-2 pb-2'>
           <b className='cost'>₹ {filteredProducts[0].finalPrice}</b><strike className='strike-cost ms-3'>₹ {filteredProducts[0].originalPrice}</strike>
           </div>
            <div>
              <Link style={{ textDecoration: 'none' }} to={`/product/${filteredProducts[0].id}`}>
                <button className='btn btn-danger'>Shop Now</button>
              </Link>
            </div>
          </div>
          <div className='col-4 '>
              <img className='img-fluid' src={filteredProducts[0].heroImage} alt="" />
          </div>

        </div>
      </div>

      
      <div className="carousel-item" data-bs-interval="2000">
      <div className='carosel-back w-100 content-carousel'>
          <div className="col-4  ">
            <p className='content-head'>{filteredProducts[1].title}</p>
            <h3>FeatherWeight For Comfort All-Day</h3>
           <div className='mt-2 mb-2 pt-2 pb-2'>
           <b className='cost'>₹ {filteredProducts[1].finalPrice}</b><strike className='strike-cost ms-3'>₹ {filteredProducts[1].finalPrice}</strike>
           </div>
            <div>
              <Link style={{ textDecoration: 'none' }} to={`/product/${filteredProducts[1].id}`}>
                <button className='btn btn-danger'>Shop Now</button>
              </Link>
            </div>
          </div>
          <div className='col-4 '>
              <img className='img-fluid' src={filteredProducts[1].heroImage} alt="" />
          </div>

        </div>
      </div>


      <div className="carousel-item">
      <div className='carosel-back w-100 content-carousel'>
          <div className="col-4  ">
            <p className='content-head'>{filteredProducts[2].title}</p>
            <h3>Give Your Favourite Music A Boost</h3>
           <div className='mt-2 mb-2 pt-2 pb-2'>
           <b className='cost'>₹9,999</b><strike className='strike-cost ms-3'>₹14,999</strike>
           </div>
            <div>
              <Link style={{ textDecoration: 'none' }} to={`/product/${filteredProducts[2].id}`}>
                <button className='btn btn-danger'>Shop Now</button>
              </Link>
            </div>
          </div>
          <div className='col-4 '>
              <img className='img-fluid' src={filteredProducts[2].images[0]} alt="" />
          </div>

        </div>
      </div>
    </div>
  </div>
  )
}

export default Carousel