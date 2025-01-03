import React, { useState } from 'react';
import './Cart.css';
import { BsCartX } from "react-icons/bs";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Ouradvantages from '../components/Ouradvantages';
import { Link } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import { removeFromCart } from '../components/ProductAction';


const Cart = () => {
  const cartDataFromStore = useSelector((state) => state.productData.cartData || []);
  const dispatch = useDispatch();

  const [quantities, setQuantities] = useState(
    cartDataFromStore.reduce((acc, product) => {
      acc[product.id] = product.quantity || 1;
      return acc;
    }, {})
  );

  const increment = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.min(prevQuantities[id] + 1, 5),
    }));
  };

  const decrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(prevQuantities[id] - 1, 1),
    }));
  };

  const removeFromCar = (id) => {
    dispatch(removeFromCart(id)); 
  };

  const originalCost = cartDataFromStore.reduce(
    (acc, product) => acc + product.originalPrice * quantities[product.id],
    0
  );
  const finalCost = cartDataFromStore.reduce(
    (acc, product) => acc + product.finalPrice * quantities[product.id],
    0
  );

  return (
    <>
      <Header />
      {cartDataFromStore.length > 0 ? (
        <div id="container" className="container">
          <div className="row">
            <div style={{ backgroundColor: 'rgb(40, 35, 35)', overflowY: 'scroll', height: '400px' }} className="col-8">
              {cartDataFromStore.map((product) => (
                <div key={product.id}>
                  <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '20% 70% 10%' }} className="row align-items-center">
                      <div className="col">
                        <img
                          className="img-fluid"
                          style={{ width: '150px' }}
                          src={product.images[0]}
                          alt={product.title}
                        />
                      </div>
                      <div className="col">
                        <p>
                          {product.title} {product.type} {product.connectivity} {product.category}
                        </p>
                        <span className="fs-5">₹{product.finalPrice * quantities[product.id]}</span>
                        <strike className="ms-4">₹{product.originalPrice * quantities[product.id]}</strike>
                        <div className="mt-4">
                          <button className="pe-2 border fs-5 bg-dark" onClick={() => decrement(product.id)} disabled={quantities[product.id] === 1} style={{ color: 'white' }}>
                            <FaMinus style={{ color: 'white' }} />
                          </button>
                          <span className=" px-2 pt-1 pb-1 fs-5 border text-danger">{quantities[product.id]}</span>
                          <button className="ps-2 border fs-5 bg-dark" onClick={() => increment(product.id)} disabled={quantities[product.id] === 5}>
                            <FaPlus style={{ color: 'white' }} />
                          </button>
                        </div>
                      </div>
                      <div className="col">
                        <FaTrash onClick={() => removeFromCar(product.id)} />
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
            <div className="col-3 ms-4">
              <h5>Order summary ({cartDataFromStore.length} items)</h5>
              <div className="container d-flex justify-content-between">
                <p>Original Price</p>
                <p>₹{originalCost}</p>
              </div>
              <div className="container d-flex justify-content-between">
                <p>Discount</p>
                <p className="text-success">₹{originalCost - finalCost}</p>
              </div>
              <div className="container d-flex justify-content-between">
                <p>Delivery</p>
                <p className="text-success">Free</p>
              </div>
              <hr />
              <div className="container d-flex justify-content-between">
                <b>Final Price</b>
                <b>₹{finalCost}</b>
              </div>
              <button className="btn btn-danger w-100 mt-4">Checkout</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="main-container">
          <div className="cart-icon">
            <BsCartX size="15rem" color="Red" />
          </div>
          <h3>Your Cart is empty</h3>
          <div className="d-flex justify-content-center">
            <Link to="/all-products" className="btn">
              <button className="btn btn-danger">Start Shopping</button>
            </Link>
          </div>
        </div>
      )}
      <Ouradvantages />
      <Footer />
    </>
  );
};

export default Cart;
