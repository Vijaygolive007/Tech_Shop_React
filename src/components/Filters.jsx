import React, { useState } from 'react';
import AllProductsPage from './AllProductsPage';
import Header from './Header';
import Ouradvantages from './Ouradvantages';
import Footer from './Footer';
import './Filter.css';
import ScrollToTop from './ScrollToTop';


const Filters = () => {
  const [filter, setFilter] = useState({
    sortBy: null,
    brands: [],
    categories: [],
    priceRange: 100, 
  });

  const [resetKey, setResetKey] = useState(0);

  const handleSort = (sortOption) => {
    setFilter((prev) => ({ ...prev, sortBy: sortOption }));
  };

  const handleCheckboxChange = (type, value) => {
    setFilter((prev) => {
      const updatedArray = prev[type].includes(value)
        ? prev[type].filter((item) => item !== value)
        : [...prev[type], value];
      return { ...prev, [type]: updatedArray };
    });
  };

  const handleRangeChange = (event) => {
    setFilter((prev) => ({ ...prev, priceRange: Number(event.target.value) }));
  };

  const clearFilters = () => {
    setFilter({
      sortBy: null,
      brands: [],
      categories: [],
      priceRange: 100, 
    });
    setResetKey((prevKey) => prevKey + 1); // Force checkbox re-render
  };

  const hasFilters =
    filter.sortBy || filter.brands.length > 0 || filter.categories.length > 0 || filter.priceRange !== 100;

  return (
    <>
      <Header />
      <div className="d-flex ms-3">
        <div className="col-2">
          <div>
            {hasFilters && (
              <button className="btn btn-danger mb-3" onClick={clearFilters}>
                Clear Filters
              </button>
            )}
          </div>
          <b>Sort By</b>
          <hr />
          <div className="d-grid justify-content-start">
            {['latest', 'featured', 'topRated', 'lowestPrice', 'highestPrice'].map((option) => (
              <button
                key={option}
                className="sort-buttons"
                style={{
                  
                  color: filter.sortBy === option ? 'red' : 'white',
                }}
                onClick={() => handleSort(option)}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>

          <p className="mt-2">
            <b>Filter By</b>
          </p>
          <hr />
          <p>
            <b>Brands</b>
          </p>
          {['JBL', 'boAt', 'Sony'].map((brand) => (
            <div key={brand}>
              <input
                type="checkbox"
                id={brand.toLowerCase()}
                key={`${brand}-${resetKey}`} // Force checkbox reset
                onChange={() => handleCheckboxChange('brands', brand)}
              />
              <label className="ms-3" htmlFor={brand.toLowerCase()}>
                {brand}
              </label>
            </div>
          ))}

          <p className="mt-3">
            <b>Category</b>
          </p>
          {['Headphones', 'Earbuds', 'Earphones', 'Neckbands'].map((category) => (
            <div key={category}>
              <input
                type="checkbox"
                id={category.toLowerCase()}
                key={`${category}-${resetKey}`} // Force checkbox reset
                onChange={() => handleCheckboxChange('categories', category)}
              />
              <label className="ms-3" htmlFor={category.toLowerCase()}>
                {category}
              </label>
            </div>
          ))}

          <p className="mt-3">
            <b>Price Range</b> (Max: ₹{filter.priceRange})
          </p>
          <input
            type="range"
            className="range-slider text-danger"
            style={{accentColor:"red"}}
            min="0"
            max="20000"
            value={filter.priceRange}
            onChange={handleRangeChange}
          />
        </div>

        <div className="col-10">
          <AllProductsPage filter={filter} />
        </div>
      </div>
      <Ouradvantages />
      <Footer />
      <ScrollToTop/>
    </>
  );
};

export default Filters;

