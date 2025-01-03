import React, { useState } from 'react';
import './Products.css';
import HeadPhones from './HeadPhones';
import EarBuds from './EarBuds';
import EarPhones from './EarPhones';
import NeckBands from './NeckBands';
import AllProd from './AllProd';

const Products = () => {
  
  const [activeCategory, setActiveCategory] = useState('all');
  const renderActiveComponent = () => {
    switch (activeCategory) {
      case 'all':
        return <AllProd />;
      case 'headphones':
        return <HeadPhones />;
      case 'earbuds':
        return <EarBuds />;
      case 'earphones':
        return <EarPhones />;
      case 'neckbands':
        return <NeckBands />;
      default:
        return null; // Fallback if no matching category
    }
  };

  return (
    <>
      <h2 className="text-center">Top Products</h2>
      <div className="container d-flex justify-content-evenly">
        <button
          className={`check-button ms-2 fs-5 ${activeCategory === 'all' ? 'bg-danger' : ''}`}
          onClick={() => setActiveCategory('all')}
        >
          All
        </button>
        <button
          className={`check-button ms-2 fs-5 ${activeCategory === 'headphones' ? 'bg-danger' : ''}`}
          onClick={() => setActiveCategory('headphones')}
        >
          HeadPhones
        </button>
        <button
          className={`check-button ms-2 fs-5 ${activeCategory === 'earbuds' ? 'bg-danger' : ''}`}
          onClick={() => setActiveCategory('earbuds')}
        >
          Earbuds
        </button>
        <button
          className={`check-button ms-2 fs-5 ${activeCategory === 'earphones' ? 'bg-danger' : ''}`}
          onClick={() => setActiveCategory('earphones')}
        >
          EarPhones
        </button>
        <button
          className={`check-button ms-2 fs-5 ${activeCategory === 'neckbands' ? 'bg-danger' : ''}`}
          onClick={() => setActiveCategory('neckbands')}
        >
          Neckbands
        </button>
      </div>
      <div>{renderActiveComponent()}</div>
    </>
  );
};

export default Products;












