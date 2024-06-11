import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { updateuserAsync, userSessionAsync } from "../../features/authSlice";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import Loader from "react-loaders";

const UserProfile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state: any) => state.auth.user);
  const {updateLoading} = useAppSelector((state: any) => state.auth);
  const userID = user?.user?.id;

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  const [formData, setFormData] = useState<any>({
    name: user?.user?.name || "",
    email: user?.user?.email || "",
    phone: user?.user?.phone || "",
    address: user?.user?.address || "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user?.user?.name || "",
        email: user?.user?.email || "",
        phone: user?.user?.phone || "",
        address: user?.user?.address || "",
      });
    }
  }, [user]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // HANDLE SUBMIT
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const id = userID;

    const updatedFields: Partial<any> = {};

    Object.keys(formData).forEach((key) => {
      if (formData[key] !== user?.user[key]) {
        updatedFields[key] = formData[key];
      }
    });

    if (Object.keys(updatedFields).length === 0) {
      toast.error("No changes made");
      return;
    }

    dispatch(updateuserAsync({ id, ...updatedFields })).then((res) => {
      if (res.payload.message === "Update Successfull") {
        toast.success(res.payload.message);
      }
      dispatch(userSessionAsync());
    });
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Profile - For Your Beauty</title>
      </Helmet>

      <section className="w-full bg-[#FDEDF5] py-14 sm:py-12 px-2 sm:px-8 lg:px-10 xl:px-0">
        <div className="py-6 px-3 sm:p-8 rounded-xl max-w-4xl bg-white xl:max-w-4xl mx-auto">
          {/* PERSONAL INFO */}
          <div className="mb-8">
            <h2 className="mb-3 playfair text-2xl font-bold text-gray-800">
              Personal Information
            </h2>
            <p className="text-sm text-gray-600">
              Manage your name, password and account settings.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
              {/* full name label */}
              <div className="sm:col-span-3">
                <label
                  className="inline-block text-sm text-gray-800 mt-2.5"
                  htmlFor="af-account-full-name"
                >
                  Full name
                </label>
              </div>

              {/* full name input fields */}
              <div className="sm:col-span-9">
                <div className="sm:flex gap-3">
                  <input
                    className="bg-gray-50 mb-3 sm:mb-0 border border-gray-300 text-gray-900 sm:text-sm rounded-md block w-full p-3 placeholder:text-gray-500"
                    placeholder="Enter your Full Name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* full email label */}
              <div className="sm:col-span-3">
                <label
                  className="inline-block text-sm text-gray-800 mt-2.5"
                  htmlFor="af-account-email"
                >
                  Email
                </label>
              </div>

              {/* full email input fields */}
              <div className="sm:col-span-9">
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md block w-full p-3 placeholder:text-gray-500"
                  id="af-account-email"
                  placeholder="Enter Your Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="sm:col-span-3">
                <div className="inline-block">
                  <label
                    className="inline-block text-sm text-gray-800 mt-2.5"
                    htmlFor="af-account-phone"
                  >
                    Phone
                  </label>
                </div>
              </div>

              <div className="sm:col-span-9">
                <div className="sm:flex">
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md block w-full p-3 placeholder:text-gray-500"
                    id="af-account-phone"
                    placeholder="Enter Phone Number"
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  className="inline-block text-sm text-gray-800 mt-2.5"
                  htmlFor="af-account-bio"
                >
                  Address
                </label>
              </div>

              <div className="sm:col-span-9">
                <textarea
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md block w-full p-3 placeholder:text-gray-500"
                  id="af-account-bio"
                  placeholder="Enter Your Address..."
                  rows={5}
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mt-7 flex justify-end gap-x-2">
              {updateLoading ? (
                <button className="w-40 h-11 items-center mx-auto flex justify-center tracking-wide">
                  <Loader type="ball-beat" active={true} />
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-40 h-11 items-center mx-auto bg-[#EC72AF] text-white flex justify-center tracking-wide"
                >
                  Save changes
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
