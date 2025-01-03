import { useState, useEffect } from "react";
import { FaUser, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import ButtonsFaGoTw from './ButtonsFaGoTw.jsx';
import "./Header.css";
import { useSelector } from "react-redux";
import ProductSearch from "./ProductSearch.jsx";

// Modal Component
const Modal = ({ title, content, handleCloseModal }) => {
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
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="button-cross fw-3"
              onClick={handleCloseModal}
              aria-label="Close"
            >
              X
            </button>
          </div>
          <div className="modal-body p-3">{content}</div>
        </div>
      </div>
    </div>
  );
};

const Modal2 = ({ content, handleCloseModal }) => {
  return (
    <div
      className="modal-backdrop main-model2-con"
      onClick={handleCloseModal}
    >
      <div
        className="modal-dialog modal-dialog-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">
          <div className="modal-header">
          </div>
          <div className="modal-body p-3">{content}</div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  // Auto-updating cartData from Redux
  const cartDataFromStore = useSelector((state) => state.productData.cartData || []);

  const [cartData, setCartData] = useState(cartDataFromStore);

  useEffect(() => {
    setCartData(cartDataFromStore); // Updates whenever cart data changes in the Redux store
  }, [cartDataFromStore]);

  const toggleForm = () => setIsLogin(!isLogin);
  const handleCloseModal = () => {
    setShowModal(false);
    setSearchModal(false);
  };

  const handleSearchModal = () => {
    setSearchModal(true);
    setShowModal(false);
  };

  const handleSigninModal = () => {
    setShowModal(true);
    setSearchModal(false);
  };

  return (
    <>
      <header className="container d-flex justify-content-between pt-3 mb-3">
        <div>
          <Link className="Link" to='/'> <h1 className="heading">TECH SHOP</h1> </Link>
        </div>
        <div className="d-flex">
          <div className="search">
            <FaSearch className="m-3 fs-3 " style={{color:"white"}} onClick={handleSearchModal}/>
            <p className="tooltip-search">Search</p>
          </div>
          <div className="search">
            <Link to="/Cart" className="text-decoration-none">
              <FaShoppingCart className="mt-3 ms-3 fs-3" style={{color:"white"}} />
              {cartData.length > 0 && (
                <sup className="bg-danger px-1 rounded-circle fs-6 fw-bold" style={{color: 'white'}}>
                  {cartData.length}
                </sup>
              )}
            </Link>
            <p className="tooltip-search">Cart</p>
          </div>
          <div className="user-profile">
            <FaUser className="m-3 ms-4 fs-4" style={{color:"white"}} />
            <div className="tooltip-profile">
              <h5 className="head-profile">Hello!</h5>
              <p className="para-profile">Access account and manage orders</p>
              <button className="profile-button" onClick={handleSigninModal}>
                Login/Signup
              </button>
              <hr />
              <p className="para-profile">Please Login</p>
            </div>
          </div>
        </div>
      </header>

      {/* Login/Signup Modal */}
      {showModal && (
        <Modal
          title={isLogin ? "Login" : "Signup"}
          handleCloseModal={handleCloseModal}
          content={
            <>
              <p className="mt-3">
                {isLogin ? "New to Tech-Shop?" : "Already have an account?"}{" "}
                <b
                  className="cursor-bold"
                  onClick={toggleForm}
                  style={{ cursor: "pointer" }}
                >
                  {isLogin ? "Signup" : "Login"}
                </b>
              </p>
              {isLogin ? (
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
                  <button
                    type="button"
                    className="login-button p-1 m-2 w-100"
                  >
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
                  <button
                    type="button"
                    className="login-button p-1 m-2 w-100"
                  >
                    Signup
                  </button>
                  <ButtonsFaGoTw />
                </>
              )}
            </>
          }
        />
      )}

      {/* Search Modal */}
      {searchModal && (
        <Modal2
          handleCloseModal={handleCloseModal}
          content={
            <>
             <ProductSearch/>
            </>
          }
        />
      )}
    </>
  );
};

export default Header;
