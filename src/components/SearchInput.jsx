import React, { useState } from "react";
import { FaUser, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./header.css";
import ButtonsFaGoTw from "./buttonsFaGoTw";

const Modal = ({ isLogin, handleCloseModal, toggleForm, isSearch }) => {
  return (
    <div
      className="modal-backdrop main-back-container"
      onClick={handleCloseModal}
    >
      <div
        className="modal-dialog modal-dialog-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {isSearch ? "Search" : isLogin ? "Login" : "Signup"}
            </h5>
            <button
              type="button"
              className="button-cross fw-3"
              onClick={handleCloseModal}
              aria-label="Close"
            >
              X
            </button>
          </div>
          <div className="modal-body p-3">
            {isSearch ? (
              <>
                <input
                  type="text"
                  className="w-100 p-1 m-2 bg-dark"
                  placeholder="Search for products..."
                />
                <button type="button" className="search-button p-1 m-2 w-100">
                  Search
                </button>
              </>
            ) : isLogin ? (
              <>
                <input
                  type="email"
                  name="email"
                  className="w-100 p-1 m-2 bg-dark"
                  placeholder="Email"
                />
                <input
                  type="password"
                  name="password"
                  className="w-100 p-1 m-2 bg-dark"
                  placeholder="Password"
                />
                <button type="button" className="login-button p-1 m-2 w-100">
                  Login
                </button>
                <ButtonsFaGoTw />
              </>
            ) : (
              <>
                <input
                  type="text"
                  name="username"
                  className="w-100 p-1 m-2 bg-dark"
                  placeholder="Username"
                />
                <input
                  type="email"
                  name="email"
                  className="w-100 p-1 m-2 bg-dark"
                  placeholder="Email"
                />
                <input
                  type="password"
                  name="password"
                  className="w-100 p-1 m-2 bg-dark"
                  placeholder="Password"
                />
                <input
                  type="password"
                  name="cpassword"
                  className="w-100 p-1 m-2 bg-dark"
                  placeholder="Confirm Password"
                />
                <button type="button" className="login-button p-1 m-2 w-100">
                  Signup
                </button>
                <ButtonsFaGoTw />
              </>
            )}
          </div>
          {!isSearch && (
            <p className="text-center mt-3">
              {isLogin
                ? "New to Tech-Shop?"
                : "Already have an account?"}{" "}
              <b className="cursor-bold" onClick={toggleForm}>
                {isLogin ? "Signup" : "Login"}
              </b>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);
  const handleSignin = () => {
    setIsSearch(false);
    setShowModal(true);
  };
  const handleSearch = () => {
    setIsSearch(true);
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <header className="container d-flex justify-content-between pt-3 mb-3">
        <div>
          <h1>TECH SHOP</h1>
        </div>
        <div className="d-flex">
          <div className="search">
            <FaSearch className="m-3 fs-3" onClick={handleSearch} />
            <p className="tooltip-search">Search</p>
          </div>
          <div className="shop-cart">
            <Link to="/Cart">
              <FaShoppingCart className="m-3 fs-3" />
            </Link>
            <p className="tooltip-cart">Cart</p>
          </div>
          <div className="user-profile">
            <FaUser className="m-3 fs-4" />
            <div className="tooltip-profile">
              <h5 className="head-profile">Hello!</h5>
              <p className="para-profile">Access account and manage orders</p>
              <button className="profile-button" onClick={handleSignin}>
                Login/Signup
              </button>
              <hr />
              <p className="para-profile">Please Login</p>
            </div>
          </div>
        </div>
      </header>

      {showModal && (
        <Modal
          isLogin={isLogin}
          isSearch={isSearch}
          handleCloseModal={handleCloseModal}
          toggleForm={toggleForm}
        />
      )}
    </>
  );
};

export default Header;
  