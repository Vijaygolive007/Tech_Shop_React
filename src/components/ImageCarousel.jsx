import React from "react";
import "./Carousel.css";
import productsData from "../Data/productsData";
import "./ImageCarousel.css";
import Slider from "react-slick";
import { Link } from "react-router";
const ImageCarousel = () => {
  const filteredIds = [13, 14, 2, 8, 9];

  const filteredProducts = productsData.filter((product) =>
    filteredIds.includes(product.id)
  );
  console.log(filteredProducts);
  var settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <h2 className="text-center">Featured Products</h2>
      <Slider {...settings} className="m-4">
        <div className="d-flex gap-5">
          <div className="first-image-con me-2 mt-5 ">
            <p className="text-center pt-5">{filteredProducts[3].title}</p>
            <img
              className=" image-start "
              src={filteredProducts[3].images[0]}
              alt=""
            />
            <p className="text-center">
              ₹{filteredProducts[3].finalPrice}{" "}
              <strike className="ms-2">
                ₹{filteredProducts[3].originalPrice}
              </strike>
            </p>
          </div>

          <div className="ms-3 me-2 mt-5">
            <div className=" me-2  fs-5">
              <p className="text-center">{filteredProducts[4].title}</p>
              <img
                className=" image-sec-mid "
                src={filteredProducts[4].images[0]}
                alt=""
              />
              <p className="text-center">
                ₹{filteredProducts[4].finalPrice}{" "}
                <strike className="ms-2">
                  ₹{filteredProducts[3].originalPrice}
                </strike>
              </p>
            </div>
          </div>

          <div className="ms-3 me-2">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/product/${filteredProducts[0].id}`}
            >
              <div className="fs-4 me-2 ">
                <p className="text-center">{filteredProducts[0].title}</p>
                <img
                  className=" image-mid "
                  src={filteredProducts[0].images[0]}
                  alt=""
                />
                <p className="text-center">
                  ₹{filteredProducts[0].finalPrice}{" "}
                  <strike className="ms-2">
                    ₹{filteredProducts[3].originalPrice}
                  </strike>
                </p>
              </div>
            </Link>
          </div>

          <div className="ms-3 me-2 mt-5">
            <div className=" me-2  fs-5">
              <p className="text-center">{filteredProducts[1].title}</p>
              <img
                className=" image-sec-mid "
                src={filteredProducts[1].images[0]}
                alt=""
              />
              <p className="text-center">
                ₹{filteredProducts[1].finalPrice}{" "}
                <strike className="ms-2">
                  ₹{filteredProducts[3].originalPrice}
                </strike>
              </p>
            </div>
          </div>

          <div>
            <div className="first-image-con me-2 mt-5">
              <p className="text-center pt-5">{filteredProducts[2].title}</p>
              <img
                className=" image-start "
                src={filteredProducts[2].images[0]}
                alt=""
              />
              <p className="text-center">
                ₹{filteredProducts[2].finalPrice}{" "}
                <strike className="ms-2">
                  ₹{filteredProducts[3].originalPrice}
                </strike>
              </p>
            </div>
          </div>
        </div>



        <div className="d-flex gap-5">
          <div className="first-image-con me-2 mt-5 ">
            <p className="text-center pt-5">{filteredProducts[4].title}</p>
            <img
              className=" image-start "
              src={filteredProducts[4].images[0]}
              alt=""
            />
            <p className="text-center">
              ₹{filteredProducts[4].finalPrice}{" "}
              <strike className="ms-2">
                ₹{filteredProducts[4].originalPrice}
              </strike>
            </p>
          </div>

          <div className="ms-3 me-2 mt-5">
            <div className=" me-2  fs-5">
              <p className="text-center">{filteredProducts[0].title}</p>
              <img
                className=" image-sec-mid "
                src={filteredProducts[0].images[0]}
                alt=""
              />
              <p className="text-center">
                ₹{filteredProducts[0].finalPrice}{" "}
                <strike className="ms-2">
                  ₹{filteredProducts[0].originalPrice}
                </strike>
              </p>
            </div>
          </div>

          <div className="ms-3 me-2">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/product/${filteredProducts[1].id}`}
            >
              <div className="fs-4 me-2 ">
                <p className="text-center">{filteredProducts[1].title}</p>
                <img
                  className=" image-mid "
                  src={filteredProducts[1].images[0]}
                  alt=""
                />
                <p className="text-center">
                  ₹{filteredProducts[1].finalPrice}{" "}
                  <strike className="ms-2">
                    ₹{filteredProducts[1].originalPrice}
                  </strike>
                </p>
              </div>
            </Link>
          </div>

          <div className="ms-3 me-2 mt-5">
            <div className=" me-2  fs-5">
              <p className="text-center">{filteredProducts[2].title}</p>
              <img
                className=" image-sec-mid "
                src={filteredProducts[2].images[0]}
                alt=""
              />
              <p className="text-center">
                ₹{filteredProducts[2].finalPrice}{" "}
                <strike className="ms-2">
                  ₹{filteredProducts[2].originalPrice}
                </strike>
              </p>
            </div>
          </div>

          <div>
            <div className="first-image-con me-2 mt-5">
              <p className="text-center pt-5">{filteredProducts[3].title}</p>
              <img
                className=" image-start "
                src={filteredProducts[3].images[0]}
                alt=""
              />
              <p className="text-center">
                ₹{filteredProducts[3].finalPrice}{" "}
                <strike className="ms-2">
                  ₹{filteredProducts[3].originalPrice}
                </strike>
              </p>
            </div>
          </div>
        </div>




        <div className="d-flex gap-5">
          <div className="first-image-con me-2 mt-5 ">
            <p className="text-center pt-5">{filteredProducts[0].title}</p>
            <img
              className=" image-start "
              src={filteredProducts[0].images[0]}
              alt=""
            />
            <p className="text-center">
              ₹{filteredProducts[0].finalPrice}{" "}
              <strike className="ms-2">
                ₹{filteredProducts[0].originalPrice}
              </strike>
            </p>
          </div>

          <div className="ms-3 me-2 mt-5">
            <div className=" me-2  fs-5">
              <p className="text-center">{filteredProducts[1].title}</p>
              <img
                className=" image-sec-mid "
                src={filteredProducts[1].images[0]}
                alt=""
              />
              <p className="text-center">
                ₹{filteredProducts[1].finalPrice}{" "}
                <strike className="ms-2">
                  ₹{filteredProducts[1].originalPrice}
                </strike>
              </p>
            </div>
          </div>

          <div className="ms-3 me-2">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/product/${filteredProducts[2].id}`}
            >
              <div className="fs-4 me-2 ">
                <p className="text-center">{filteredProducts[2].title}</p>
                <img
                  className=" image-mid "
                  src={filteredProducts[2].images[0]}
                  alt=""
                />
                <p className="text-center">
                  ₹{filteredProducts[2].finalPrice}{" "}
                  <strike className="ms-2">
                    ₹{filteredProducts[2].originalPrice}
                  </strike>
                </p>
              </div>
            </Link>
          </div>

          <div className="ms-3 me-2 mt-5">
            <div className=" me-2  fs-5">
              <p className="text-center">{filteredProducts[3].title}</p>
              <img
                className=" image-sec-mid "
                src={filteredProducts[3].images[0]}
                alt=""
              />
              <p className="text-center">
                ₹{filteredProducts[3].finalPrice}{" "}
                <strike className="ms-2">
                  ₹{filteredProducts[3].originalPrice}
                </strike>
              </p>
            </div>
          </div>

          <div>
            <div className="first-image-con me-2 mt-5">
              <p className="text-center pt-5">{filteredProducts[4].title}</p>
              <img
                className=" image-start "
                src={filteredProducts[4].images[0]}
                alt=""
              />
              <p className="text-center">
                ₹{filteredProducts[4].finalPrice}{" "}
                <strike className="ms-2">
                  ₹{filteredProducts[4].originalPrice}
                </strike>
              </p>
            </div>
          </div>
        </div>


        <div className="d-flex gap-5">
          <div className="first-image-con me-2 mt-5 ">
            <p className="text-center pt-5">{filteredProducts[1].title}</p>
            <img
              className=" image-start "
              src={filteredProducts[1].images[0]}
              alt=""
            />
            <p className="text-center">
              ₹{filteredProducts[1].finalPrice}{" "}
              <strike className="ms-2">
                ₹{filteredProducts[1].originalPrice}
              </strike>
            </p>
          </div>

          <div className="ms-3 me-2 mt-5">
            <div className=" me-2  fs-5">
              <p className="text-center">{filteredProducts[2].title}</p>
              <img
                className=" image-sec-mid "
                src={filteredProducts[2].images[0]}
                alt=""
              />
              <p className="text-center">
                ₹{filteredProducts[2].finalPrice}{" "}
                <strike className="ms-2">
                  ₹{filteredProducts[2].originalPrice}
                </strike>
              </p>
            </div>
          </div>

          <div className="ms-3 me-2">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/product/${filteredProducts[3].id}`}
            >
              <div className="fs-4 me-2 ">
                <p className="text-center">{filteredProducts[3].title}</p>
                <img
                  className=" image-mid "
                  src={filteredProducts[3].images[0]}
                  alt=""
                />
                <p className="text-center">
                  ₹{filteredProducts[3].finalPrice}{" "}
                  <strike className="ms-2">
                    ₹{filteredProducts[3].originalPrice}
                  </strike>
                </p>
              </div>
            </Link>
          </div>

          <div className="ms-3 me-2 mt-5">
            <div className=" me-2  fs-5">
              <p className="text-center">{filteredProducts[4].title}</p>
              <img
                className=" image-sec-mid "
                src={filteredProducts[4].images[0]}
                alt=""
              />
              <p className="text-center">
                ₹{filteredProducts[4].finalPrice}{" "}
                <strike className="ms-2">
                  ₹{filteredProducts[4].originalPrice}
                </strike>
              </p>
            </div>
          </div>

          <div>
            <div className="first-image-con me-2 mt-5">
              <p className="text-center pt-5">{filteredProducts[0].title}</p>
              <img
                className=" image-start "
                src={filteredProducts[0].images[0]}
                alt=""
              />
              <p className="text-center">
                ₹{filteredProducts[0].finalPrice}{" "}
                <strike className="ms-2">
                  ₹{filteredProducts[0].originalPrice}
                </strike>
              </p>
            </div>
          </div>
        </div>






        <div className="d-flex gap-5">
          <div className="first-image-con me-2 mt-5 ">
            <p className="text-center pt-5">{filteredProducts[2].title}</p>
            <img
              className=" image-start "
              src={filteredProducts[2].images[0]}
              alt=""
            />
            <p className="text-center">
              ₹{filteredProducts[2].finalPrice}{" "}
              <strike className="ms-2">
                ₹{filteredProducts[2].originalPrice}
              </strike>
            </p>
          </div>

          <div className="ms-3 me-2 mt-5">
            <div className=" me-2  fs-5">
              <p className="text-center">{filteredProducts[3].title}</p>
              <img
                className=" image-sec-mid "
                src={filteredProducts[3].images[0]}
                alt=""
              />
              <p className="text-center">
                ₹{filteredProducts[3].finalPrice}{" "}
                <strike className="ms-2">
                  ₹{filteredProducts[3].originalPrice}
                </strike>
              </p>
            </div>
          </div>

          <div className="ms-3 me-2">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/product/${filteredProducts[4].id}`}
            >
              <div className="fs-4 me-2 ">
                <p className="text-center">{filteredProducts[4].title}</p>
                <img
                  className=" image-mid "
                  src={filteredProducts[4].images[0]}
                  alt=""
                />
                <p className="text-center">
                  ₹{filteredProducts[4].finalPrice}{" "}
                  <strike className="ms-2">
                    ₹{filteredProducts[4].originalPrice}
                  </strike>
                </p>
              </div>
            </Link>
          </div>

          <div className="ms-3 me-2 mt-5">
            <div className=" me-2  fs-5">
              <p className="text-center">{filteredProducts[0].title}</p>
              <img
                className=" image-sec-mid "
                src={filteredProducts[0].images[0]}
                alt=""
              />
              <p className="text-center">
                ₹{filteredProducts[0].finalPrice}{" "}
                <strike className="ms-2">
                  ₹{filteredProducts[0].originalPrice}
                </strike>
              </p>
            </div>
          </div>

          <div>
            <div className="first-image-con me-2 mt-5">
              <p className="text-center pt-5">{filteredProducts[1].title}</p>
              <img
                className=" image-start "
                src={filteredProducts[1].images[0]}
                alt=""
              />
              <p className="text-center">
                ₹{filteredProducts[1].finalPrice}{" "}
                <strike className="ms-2">
                  ₹{filteredProducts[1].originalPrice}
                </strike>
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default ImageCarousel;
