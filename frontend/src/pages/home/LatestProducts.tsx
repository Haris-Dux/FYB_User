import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

interface Image {
  downloadURL: string;
  name: string;
  type: string;
}
interface Product {
  id: string;
  name: string;
  category: string;
  image:Image
  averageRating:number
  sale_price:number | undefined
  price:number
  stock:number
}

const LatestProducts = ({ latestProducts }:{latestProducts:Product[]}) => {
  const navigate = useNavigate();
  const [slidesToShow, setSlidesToShow] = useState(4);
  const sliderRef = useRef<Slider>(null);

  const loading = useAppSelector((state) => state.products.Productloading);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setSlidesToShow(4); // Full Desktop view
      } else if (window.innerWidth >= 1024) {
        setSlidesToShow(3); // Desktop view
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2); // Tablet view
      } else {
        setSlidesToShow(1); // Mobile view
      }
    };

    // Initial update
    handleResize();

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // HANDLE ITEM CLICK
  const handleItemClick = (productId:string) => {
    navigate(`/selectedItem/${productId}`);
    window.scroll(0, 0);
  };

    // STAR RATING
    const StarRating = ({ rating }:{rating:number}) => {
      const stars = [];
      for (let i = 0; i < rating; i++) {
        stars.push(<FaStar key={i} className="text-[#FFC209]" />);
      }
      return <div className="flex">{stars}</div>;
    };

  return (
    <>
      <section className="py-14 sm:py-16 px-5 sm:px-4 xl:px-0">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          <div className="header px-0 sm:px-5 flex justify-between items-center flex-wrap gap-6">
            <div className="name">
              <h2 className="mb-2.5 playfair text-center text-4xl sm:text-5xl font-bold">
                Latest Products
              </h2>
              <p className="h-0.5 w-16 bg-[#EC72AF]"></p>
            </div>

            <div className="slider_button hidden sm:flex flex-row">
              {/* left arrow */}
              <button
                onClick={previous}
                className="mx-1.5 inline-block rounded-full border text-[#EC72AF] hover:text-white border-[#EC72AF] hover:bg-[#EC72AF] p-2.5 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-left "
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>

              {/* right arrow */}
              <button
                onClick={next}
                className="mx-1.5 inline-block rounded-full border text-[#EC72AF] hover:text-white border-[#EC72AF] hover:bg-[#EC72AF] p-2.5 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right "
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* DATA */}
          <div className="data">
            <div className="mt-8 sm:mt-12">
              {/* <Slider ref={sliderRef} {...settings}> */}
              {!loading ? (
                <>
                  <Slider ref={sliderRef} {...settings}>
                    {latestProducts?.map((data, index) => (
                      <div
                        key={index}
                        onClick={() => handleItemClick(String(data.id))}
                        className="mx-0 pb-7"
                      >
                        <div className="group mb-3 relative group w-60 mx-auto pt-0 bg-white border border-gray-400 hover-border-2 hover:border-[#EC72AF] cursor-pointer">
                          <img
                            className="object-cover w-full h-56"
                            src={data.image.downloadURL}
                            alt="products"
                          />

                          <div className="py-5 text-center">
                            <h3 className="playfair mb-2 text-lg font-semibold text-gray-800">
                              {data.name}
                            </h3>

                            {/* STARS */}
                            <div className="mb-2 flex items-center justify-center gap-1">
                            {data?.averageRating === 0 ? (
                                    <FaStar className="text-white" />
                                  ) : (
                                    <StarRating rating={data?.averageRating} />
                                  )}
                            </div>

                            <p className="mb-3 text-md text-gray-500">
                              ({data.category})
                            </p>

                            {data.sale_price  && data.sale_price > 0 ? (
                                  <div className="flex justify-center items-center gap-2">
                                    <p className="mb-3 text-md font-semibold text-black">
                                      Rs. {data.sale_price}
                                    </p>
                                    <p className="mb-3 text-md font-semibold text-gray-500 line-through">
                                      Rs. {data.price}
                                    </p>
                                  </div>
                                ) : (
                                  <>
                                  <p className="mb-3 text-md font-semibold text-black">
                                    Rs. {data.price}
                                  </p>
                                </>
                                )}

                            <button className="hidden group-hover:block absolute w-28 sm:w-40 -bottom-5 left-0 right-0 text-sm mx-auto py-3 bg-[#EC72AF] text-white font-semibold">
                              Shop Now
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </>
              ) : (
                <>
                  <Slider ref={sliderRef} {...settings}>
                    {[0, 1, 2, 3, 4, 5].map((_data, index:number) => (
                      <li key={index} className="px-5">
                        <div className="group mb-5 relative rounded-lg w-full bg-white border border-gray-400 cursor-pointer animate-pulse">
                          <div className="bg-gray-300 h-56 w-full"></div>

                          <div className="py-5 text-center">
                            <div className="bg-gray-300 h-5 w-3/4 mx-auto mb-2 rounded-lg"></div>
                            <div className="flex items-center justify-center gap-1 mb-2">
                              <div className="bg-gray-300 h-4 w-4 rounded-full"></div>
                              <div className="bg-gray-300 h-4 w-4 rounded-full"></div>
                              <div className="bg-gray-300 h-4 w-4 rounded-full"></div>
                              <div className="bg-gray-300 h-4 w-4 rounded-full"></div>
                              <div className="bg-gray-300 h-4 w-4 rounded-full"></div>
                            </div>
                            <div className="bg-gray-300 h-4 w-1/2 mx-auto mb-2 rounded-lg"></div>
                            <div className="bg-gray-300 h-5 w-1/3 mx-auto mb-2 rounded-lg"></div>
                            <div className="bg-gray-300 h-4 w-1/4 mx-auto mb-3 rounded-lg"></div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </Slider>
                </>
              )}
              {/* </Slider> */}
            </div>

            <div className="slider_button sm:hidden flex flex-row justify-center">
              {/* left arrow */}
              <button
                onClick={previous}
                className="mx-1.5 inline-block rounded-full border text-[#EC72AF] hover:text-white border-[#EC72AF] hover:bg-[#EC72AF] p-2.5 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-left "
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>

              {/* right arrow */}
              <button
                onClick={next}
                className="mx-1.5 inline-block rounded-full border text-[#EC72AF] hover:text-white border-[#EC72AF] hover:bg-[#EC72AF] p-2.5 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right "
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestProducts;
