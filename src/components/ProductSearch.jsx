import React, { useState } from "react";
import productsData from "../Data/productsData";
import { Link } from "react-router";

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");


  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  
  const filteredProducts = productsData.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a product..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar w-100 bg-dark"
      />
      
      <div className="product-list">
        {searchTerm && filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product">
              <Link
                style={{ textDecoration: 'none' , color:'white' }}
                to={`/product/${product.id}`}
              ><p>{product.title}</p></Link>
            </div>
          ))
        ) : (
          searchTerm && <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductSearch;

