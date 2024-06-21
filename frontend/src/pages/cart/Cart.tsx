import { useEffect } from "react";
import { IoAddOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { BsTrash3 } from "react-icons/bs";
// import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  decreaseQuantity,
  getCartTotal,
  increaseQuantity,
  removeFromCart,
} from "../../features/ActionsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.auth.user);

  // getting data from store
  const { cart, totalPrice } = useAppSelector(
    (state: RootState) => state.actions
  );

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cart - For Your Beauty</title>
      </Helmet>

      <section className="w-full py-14 sm:py-14 px-5 sm:px-8 lg:px-10 xl:px-0 bg-[#FFF3F9] min-h-[90vh]">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="header">
            <div className="flex justify-between items-center">
              <div className="playfair text-3xl lg:text-5xl font-semibold">
                Cart
              </div>
              <div className="text-md font-semibold text-[#EC72AF] underline underline-offset-4">
                <Link to="/products">Return to Shop</Link>
              </div>
            </div>
          </div>

          <div className="">
            {cart && cart.length > 0 ? (
              <div className=" py-6">
                <div className="rounded-xl">
                  {/* First Product Row */}
                  {cart.map((product: any) => (
                    <div
                      key={product.id}
                      className="grid md:grid-cols-4 items-center gap-8 px-4 py-6 mb-4 bg-white border-b border-gray-400 rounded-xl"
                    >
                      <div className="md:col-span-2 flex  flex-wrap items-center gap-6">
                        <div className="shrink-0 shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)] p-0">
                          <img
                            className="w-28 h-22 object-contain rounded-md"
                            src={product?.image.downloadURL}
                            alt={product?.name}
                          />
                        </div>

                        <div>
                          <h3 className="playfair text-lg tracking-wide font-bold text-[#333]">
                            {product?.name}
                          </h3>
                          <h6 className="text-md text-gray-500 mt-2">
                            Category:{" "}
                            <strong className="">
                              {product.category === "Body Care"
                                ? "Bodycare"
                                : product.category}
                            </strong>
                          </h6>
                          <h6 className="text-md text-gray-500 mt-2 flex items-center">
                            Price:{" "}
                            <strong className="ml-2 flex items-center">
                              {product?.sale_price !== 0 ||
                              product?.sale_price > 0 ? (
                                <>
                                  <p className="">Rs. {product?.sale_price}</p>
                                </>
                              ) : (
                                <p className="">Rs. {product?.price}</p>
                              )}
                            </strong>
                          </h6>
                        </div>
                      </div>

                      <div className="flex">
                        <button
                          onClick={() => dispatch(decreaseQuantity(product.id))}
                          className="bg-transparent py-2 font-semibold text-[#333]"
                          type="button"
                        >
                          <FiMinus size={22} />
                        </button>

                        <input
                          type="text"
                          className="mx-1 h-8 w-10 rounded-md border border-gray-400 text-center bg-transparent text-black"
                          value={product.quantity}
                          readOnly
                        />

                        <button
                          onClick={() => dispatch(increaseQuantity(product.id))}
                          className="bg-transparent py-2 font-semibold text-[#333]"
                          type="button"
                        >
                          <IoAddOutline size={22} />
                        </button>
                      </div>

                      <div className="flex items-center">
                        <h4 className="text-lg font-bold text-[#333]">
                          {/* Rs.{product.price * product.quantity} */}
                          {product?.sale_price > 0 ? (
                            <>
                              <p className="">
                                Rs. {product.sale_price * product.quantity}
                              </p>
                            </>
                          ) : (
                            <p className="">
                              Rs. {product.price * product.quantity}
                            </p>
                          )}
                        </h4>

                        <div
                          onClick={() => dispatch(removeFromCart(product.id))}
                          className="w-3 mr-4 cursor-pointer shrink-0 ml-auto"
                        >
                          <BsTrash3 size={20} className="hover:text-red-700" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end items-center">
                  {/* APPLY COUPN CODE */}
                  <div className="total">
                    <div className="mt-8 space-y-1 text-right text-lg">
                      <p>
                        Total amount:
                        <span className="font-semibold">
                          {" "}
                          Rs. {totalPrice.toFixed(2)}
                        </span>
                      </p>

                      {/* <p className="text-sm py-1">
                        Taxes and shipping calculated at checkout
                      </p> */}
                    </div>

                    <div className="mt-4 flex justify-end space-x-4">
                      <Link
                        to="/products"
                        onClick={() => window.scroll(0, 0)}
                        type="button"
                        className="rounded-md border border-black px-3 py-2 text-sm tracking-wide font-semibold text-black shadow-sm hover:bg-[#EC72AF] hover:border-[#EC72AF] hover:text-white"
                      >
                        Back to shop
                      </Link>

                      {user ? (
                        <Link
                          to="/checkout"
                          onClick={() => window.scroll(0, 0)}
                          type="button"
                          className="rounded-md border px-3 py-2 text-sm tracking-wide font-semibold shadow-sm bg-[#EC72AF] border-[#EC72AF] text-white"
                        >
                          Checkout
                        </Link>
                      ) : (
                        <Link
                          to="/login?from=cart"
                          onClick={() => window.scroll(0, 0)}
                          type="button"
                          className="rounded-md border px-3 py-2 text-sm tracking-wide font-semibold shadow-sm bg-[#EC72AF] border-[#EC72AF] text-white"
                        >
                          Checkout
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // IF THERE IS NOTHING IN THE CART
              <div className="container text-gray-800">
                <div className="mx-0 text-center">
                  <div className="py-5">
                    <img
                      className="w-64 mx-auto"
                      src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/pngwing.com.png?v=1715031022"
                      alt=""
                    />
                    <h3 className="mt-5 text-xl font-medium">
                      No Item In Cart
                    </h3>
                    <Link
                      to="/products"
                      className="mt-2 text-xl font-medium text-[#EC72AF] underline underline-offset-2"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
