import React, { useState } from 'react';
import './Products.css';
import EarBuds from './EarBuds';
import Specifications from './Specifications';
import Overview from './Overview';
import Reviews from './Reviews';

const ProductButtons = () => {
  
  const [activeCategory, setActiveCategory] = useState('Specifications');
  const renderActiveComponent = () => {
    switch (activeCategory) {
      case 'Specifications':
        return <Specifications />;
      case 'Overview':
        return <Overview />;
      case 'Review':
        return <Reviews />;
      default:
        return null; // Fallback if no matching category
    }
  };

  return (
    <>
      <div className="container d-flex justify-content-evenly mt-5 mb-3 p-3">
        <button
          className={`check-button ms-2 fs-5 ${activeCategory === 'Specifications' ? 'bg-danger' : ''}`}
          onClick={() => setActiveCategory('Specifications')}
        >
          Specifications
        </button>
        <button
          className={`check-button ms-2 fs-5 ${activeCategory === 'Overview' ? 'bg-danger' : ''}`}
          onClick={() => setActiveCategory('Overview')}
        >
          Overview
        </button>
        <button
          className={`check-button ms-2 fs-5 ${activeCategory === 'Review' ? 'bg-danger' : ''}`}
          onClick={() => setActiveCategory('Review')}
        >
          Reviews
        </button>
       
      </div>
      <div>{renderActiveComponent()}</div>
    </>
  );
};

export default ProductButtons;












