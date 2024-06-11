import { FormEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { resetPassAsync } from "../features/authSlice";
import { Helmet } from "react-helmet";
import { useAppDispatch } from "../app/hooks";

const ResetPass = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const params = useParams();

  const { id } = params;

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const { password, confirmPassword } = formData;

  // HANDLE SUBMIT
  const handleSubmit = async (e:FormEvent) => {
    const resetPassword = password;
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        await dispatch(resetPassAsync({ id, resetPassword })).then((res) => {
          if (res.payload.message) {
            navigate("/login");
            setFormData({
              password: "",
              confirmPassword: "",
            });
          }
        });
      } catch (error) {
        console.error("Error resetting password:", error);
      }
    } else {
      console.error("Passwords do not match");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Reset Password - For Your Beauty</title>
      </Helmet>

      <section className="py-10 sm:py-10 px-4 sm:px-4 md:px-14 bg-[#FDEDF5]">
        <div className="max-w-5xl xl:max-w-4xl mx-auto">
          <div className="flex justify-center items-center flex-col-reverse sm:flex-row gap-10 md:gap-2 min-h-[80vh]">
            {/* IMAGE SIDE */}
            <div className="min-w-[50%] mx-auto hidden md:flex">
              <img
                className="w-[90%]"
                src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Rectangle_3951_1.png?v=1715021877"
                alt="login Img"
              />
            </div>

            {/* FORM SIDE */}
            <div className="min-w-[60%] md:min-w-[50%]">
              <h1 className="playfair max-w-xs sm:max-w-full mb-5 text-4xl sm:text-4xl font-bold">
                Reset Password
              </h1>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                {/* EMAIL */}
                <div>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md block w-full p-3"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md block w-full p-3"
                    type={showPassword ? "text" : "password"}
                    id="confirmpassword"
                    name="confirmPassword"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                {/* TOGGLE PASSWORD VISIBILITY */}
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        aria-describedby="remember"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-0 dark:bg-gray-700 dark:border-gray-600"
                        id="remember"
                        type="checkbox"
                        onChange={togglePasswordVisibility}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        className="text-gray-500 dark:text-gray-300 select-none cursor-pointer"
                        htmlFor="remember"
                      >
                        show password
                      </label>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 mx-auto bg-[#EC72AF] text-white flex justify-center tracking-wide"
                >
                  SUBMIT NOW
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPass;
