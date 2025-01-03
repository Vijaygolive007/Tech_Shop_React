
import productsData from '../Data/productsData';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './AllProd.css';
import { CiCircleAlert } from 'react-icons/ci';

const AllProductsPage = ({ filter }) => {
  const renderStars = (rateCount) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        color={index < rateCount ? 'red' : 'gray'}
        className="me-2"
      />
    ));
  };

  const applyFilters = () => {
    let filteredProducts = productsData;
    const filteredIds = [13, 14, 2, 8, 9];

    // Filtering by Brand
    if (filter.brands.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filter.brands.includes(product.brand)
      );
    }

    // Filtering by Category
    if (filter.categories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filter.categories.includes(product.category)
      );
    }

    // Filtering by Price Range
    if (filter.priceRange !== 100) {
      filteredProducts = filteredProducts.filter(
        (product) => product.finalPrice <= filter.priceRange
      );
    }

    // Sorted by Selected Option
    if (filter.sortBy) {
      switch (filter.sortBy) {
        case 'latest':
          filteredProducts = filteredProducts.sort(
            (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
          );
          break;
        case 'featured':
          filteredProducts = productsData.filter((product) =>
            filteredIds.includes(product.id)
          );
          break;
        case 'topRated':
          filteredProducts = filteredProducts.sort(
            (a, b) => b.rateCount - a.rateCount
          );
          break;
        case 'lowestPrice':
          filteredProducts = filteredProducts.sort(
            (a, b) => a.finalPrice - b.finalPrice
          );
          break;
        case 'highestPrice':
          filteredProducts = filteredProducts.sort(
            (a, b) => b.finalPrice - a.finalPrice
          );
          break;
        default:
          break;
      }
    }

    return filteredProducts;
  };

  const filteredProducts = applyFilters();

  return (
    <div className="container mt-4">
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((productData) => (
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
                    src={productData.images[0]}
                    className="card-img-top p-4 img-size"
                    alt={productData.title}
                  />
                  <div className="card-body card-content">
                    <div className="rating">{renderStars(productData.rateCount)}</div>
                    <h5 className="card-title">{productData.title}</h5>
                    <p className="card-text">{productData.description}</p>
                    <hr />
                    <span className="fs-4 fw-bold">₹{productData.finalPrice}</span>
                    <strike className="ms-2 fs-4 fw-bold original-price">
                      ₹{productData.originalPrice}
                    </strike>
                    <p className="card-text">{productData.info}</p>
                    <button className="btn btn-danger w-100">Add To cart</button>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="col-12 d-grid justify-content-center">
            <CiCircleAlert size="15rem" />
            <h2>No Product Found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProductsPage;



