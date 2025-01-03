import React from 'react';
import productsData from '../Data/productsData';
import { FaStar } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router';

const Headphones= () => {
  const headphones = productsData.filter(product => product.category === "Headphones");
  const renderStars = (rateCount) => {
      return [...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          color={index < rateCount ? 'red' : 'gray'}
          className='me-2'
        />
      ));
    };
    return (<>
      {headphones.length > 0 ? (
        <div className="container">
          <div className="row">
            {headphones.map((productData) => (
              <div className="col-md-3 mb-4 product-card" key={productData.id}>
                <Link
                  style={{ textDecoration: 'none' }}
                  to={`/product/${productData.id}`}
                >
                  <div
                    className="card cards bg-dark"
                    style={{ width: '18rem', color: 'white' }}
                  >
                    <img
                      src={ productData.images[0]}
                      className="card-img-top p-4 img-size"
                      alt={productData.title}
                    />
                    <div className="card-body card-content">
                      <div className="rating">{renderStars(productData.rateCount)}</div>
                      <h5 className="card-title">{productData.title}</h5>
                      <p className="card-text">{productData.description}</p>
                      <hr />
                      <span className='fs-4 fw-bold'>₹{productData.finalPrice}</span>
                      <strike className="ms-2 fs-4 fw-bold original-price">₹{productData.originalPrice}</strike>
                      <p className="card-text">{productData.info}</p>
                      <button className='btn btn-danger w-100 '>Add To cart</button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            <div className='col-md-3'>
              <div className="col-md-3 mb-4 product-card bg-dark" style={{height:"530px"}}>
                <div
                  className="card bg-light text-center d-flex align-items-center justify-content-center bg-dark"
                  style={{ width: '18rem', height: '100%' }}
                >
                  <div className="card-body bg-dark" style={{marginTop:"70%"}}>
                    <Link to="/all-products" className="btn" >
                        <p className="card-title fs-3" style={{color:"white"}}>Browse All Products <FaArrowRightLong style={{color:"white"}}/></p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>No Products Found</>
      )}
    </>
  );
};
export default Headphones;

