import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getallOrderAsync, updateOrderAsync } from "../../features/orderSlice";
import { Helmet } from "react-helmet";
import { Button, Modal } from "keep-react";
import { useNavigate } from "react-router-dom";
import Loader2 from "../../components/Loader";
import Loader from "react-loaders";

export interface data {
  id: string | undefined;
  orderProgress: string;
}

interface Image {
  downloadURL: string;
  name: string;
  type: string;
}
interface Product {
  id: string;
  name: string;
  category: string;
  image: Image;
  averageRating: number;
  sale_price: number | undefined;
  price: number;
  stock: number;
  quantity: number;
}

const MyOrders = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useAppSelector((state) => state.auth.user);
  const userID = user?.user?.id;

  const [isOpen, setIsOpen] = useState(false);
  const [orderId, setOrderId] = useState<string>();

  const openModal = (id: string) => {
    setIsOpen(true);
    setOrderId(id);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  const allOrder = useAppSelector((state) => state.orders.allOrders);
  const loading = useAppSelector((state) => state.orders.loading);
  const updateLoading = useAppSelector((state) => state.orders.updateLoading);

  const selectedOrder = allOrder.find((data) => data?.id === orderId);

  useEffect(() => {
    if (userID) {
      const id = userID;
      dispatch(getallOrderAsync(id));
    }
  }, [userID, dispatch]);

  // HANDLE DELETE
  const handleDelete = (id: string | undefined) => {
    const formData = {
      id,
      orderProgress: "Cancelled",
    };
    dispatch(updateOrderAsync(formData)).then((res) => {
      const id = userID;
      if (res.payload.message === "Order Data Updated") {
        dispatch(getallOrderAsync(id));
        closeModal();
      }
      window.scroll({
        behavior:"smooth",
        top:0
      })
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "text-yellow-500";
      case "Delivered":
        return "text-green-500";
      case "Dispatched":
        return "text-blue-500";
      case "Cancelled":
        return "text-red-500";
      default:
        return "text-gray-700";
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Orders - For Your Beauty</title>
      </Helmet>

      {loading ? (
        <div className="flex justify-center items-center min-h-screen ">
          <Loader2 />
        </div>
      ) : (
        <section className="w-full  py-14 sm:py-12 px-5 sm:px-8 lg:px-10 xl:px-0 min-h-[90vh]">
          <div className="max-w-5xl xl:max-w-6xl mx-auto">
            <h2 className="playfair text-3xl font-bold">Order Details</h2>
            <div className="mt-3 text-sm">
              Check the status of recent and old orders
            </div>
            {allOrder.map((data: any) => (
              <div
                key={data?.OrderID}
                className="mt-8 flex flex-col overflow-hidden rounded-xl border border-[#EB72AF] md:flex-row"
              >
                {/* ORDER DETAILS */}
                <div className="w-full border-r border-gray-300 bg-[#FFF3F9] md:max-w-xs">
                  <div className="parent py-6 px-6 flex flex-col justify-between h-full gap-y-10">
                    {/* ORDER DETAILS */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2">
                      <div className="mb-4">
                        <div className="text-md sm:text-md font-semibold">
                          Order ID
                        </div>
                        <div className="text-md font-medium text-gray-700">
                          {data?.OrderID}
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="text-md sm:text-md font-semibold">
                          Date
                        </div>
                        <div className="text-md font-medium text-gray-700">
                          {new Date(data?.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="text-md sm:text-md font-semibold">
                          Total Amount
                        </div>
                        <div className="text-md font-medium text-gray-700">
                          Rs. {data?.totalAmount}
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="text-md sm:text-md font-semibold">
                          Order Status
                        </div>
                        <div
                          className={`text-md font-medium ${getStatusColor(
                            data?.orderProgress
                          )}`}
                        >
                          {data?.orderProgress}
                        </div>
                      </div>
                    </div>

                    {/* ORDER CANCEL BUTTON */}
                    <div className="button">
                      {data?.orderProgress &&
                        data?.orderProgress === "Pending" && (
                          <div>
                            <button
                              onClick={() => openModal(data?.id)}
                              className="mt-5 flex items-center gap-2 bg-[#EB72AF] text-white px-4 py-2 rounded-lg"
                            >
                              <span>Cancel Order</span>
                            </button>
                          </div>
                        )}
                    </div>
                  </div>
                </div>

                {/* ORDER ITEMS */}
                <div className="flex-1 bg-white">
                  <div className="py-6 px-3 sm:px-6">
                    <ul className="gap-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                      {data &&
                        data?.items?.map((product: Product) => (
                          <li
                            key={product?.id}
                            className="flex px-3 flex-col justify-between space-x-5 py-7 md:flex-row border rounded-xl bg-[#FFF3F9]"
                          >
                            <div className="flex flex-1 items-stretch">
                              <div className="flex-shrink-0">
                                <img
                                  className="h-20 w-20 rounded-lg bg-white border border-gray-200 object-contain"
                                  src={product?.image.downloadURL}
                                  alt="order_img"
                                />
                              </div>

                              <div className="ml-5 flex flex-col justify-between">
                                <div className="flex-1">
                                  <p className="text-sm font-bold text-gray-900">
                                    {product?.name}
                                  </p>
                                  <p className="mt-1.5 text-sm font-medium text-gray-500">
                                    {product?.category}
                                  </p>
                                </div>

                                <p className="mt-4 text-sm font-medium text-gray-500">
                                  x {product?.quantity}
                                </p>
                              </div>
                            </div>

                            <div className="ml-auto flex flex-col items-end justify-between">
                              <p className="text-right text-sm font-bold text-gray-900">
                                {product?.sale_price !== 0 ||
                                product?.sale_price > 0 ? (
                                  <>
                                    <p className="">
                                      Rs. {product?.sale_price}
                                    </p>
                                  </>
                                ) : (
                                  <p className="">Rs. {product?.price}</p>
                                )}
                              </p>
                            </div>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ORDER CANCEL MODAL */}
      <Modal isOpen={isOpen} onClose={closeModal}>
        <Modal.Body className="space-y-3">
          <Modal.Content>
            <div className="!mb-6">
              <h3 className="mt-3 mb-2 text-body-1 font-medium text-metal-900">
                Confirm order cancellation?
              </h3>
            </div>
          </Modal.Content>
          <Modal.Footer>
            {updateLoading ? (
             <div className="flex justify-center items-center w-full">
             <Loader type="ball-beat" active={true} />
             </div>
            ) : (
              <>
                {" "}
                <Button
                  onClick={closeModal}
                  size="sm"
                  variant="outline"
                  color="secondary"
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => handleDelete(selectedOrder?.id)}
                  className="bg-[#EB72AF] hover:bg-[#EB72AF]"
                  size="sm"
                >
                  Confirm
                </Button>
              </>
            )}
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MyOrders;
