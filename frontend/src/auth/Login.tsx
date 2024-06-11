import { FormEvent, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginuserAsync } from "../features/authSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Helmet } from "react-helmet";
// import { Spinner } from "keep-react";
import Loader from "react-loaders";

export interface LoginFormData {
  email: string;
  password: string;
}
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { user, loginLoading } = useAppSelector((state) => state.auth);

  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (user?.login) {
      const fromCart =
        new URLSearchParams(location.search).get("from") === "cart";
      navigate(fromCart ? "/cart" : "/");
    }
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(loginuserAsync(formData));
  };

  const togglePasswordVisibility = (): void => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login - For Your Beauty</title>
      </Helmet>

      <section className="py-7 sm:py-10 px-4 sm:px-4 md:px-14 bg-[#FDEDF5]">
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
                Login Your Account
              </h1>

              <p className="max-w-full mb-5 text-md">
                Welcome back! Enter your details to continue.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                {/* EMAIL */}
                <div>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md block w-full p-3"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                {/* PASSWORD */}
                <div>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md block w-full p-3"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Enter Your Password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
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
                  <Link
                    to="/forget"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </Link>
                </div>

                {loginLoading ? (
                  <div className="flex justify-center mt-10">
                    <Loader type="ball-beat" active={true} />
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="w-full h-11 items-center mx-auto bg-[#EC72AF] text-white flex justify-center tracking-wide"
                  >
                    LOGIN NOW
                  </button>
                )}

                <p className="text-sm font-light text-gray-800">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/signup"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="font-medium text-primary-600 hover:underline"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
