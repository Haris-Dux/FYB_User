"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
require("./App.css");
var react_hot_toast_1 = require("react-hot-toast");
var HomePage = react_1.default.lazy(function () { return Promise.resolve().then(function () { return require("./pages/home/HomePage"); }); });
var Header_1 = require("./components/header/Header");
var ResetPass_1 = require("./auth/ResetPass");
var ForgetPass_1 = require("./auth/ForgetPass");
var Signup_1 = require("./auth/Signup");
var Login_1 = require("./auth/Login");
var NotFound_1 = require("./components/NotFound");
var PrivacyPolicy_1 = require("./components/PrivacyPolicy");
var Contact_1 = require("./pages/contact/Contact");
var About_1 = require("./pages/about/About");
var Products = react_1.default.lazy(function () { return Promise.resolve().then(function () { return require("./pages/products/Products"); }); });
var Cart_1 = require("./pages/cart/Cart");
var Checkout_1 = require("./pages/checkout/Checkout");
var SelectedItem = react_1.default.lazy(function () { return Promise.resolve().then(function () { return require("./pages/selectedItem/SelectedItem"); }); });
var OtpChecker_1 = require("./auth/OtpChecker");
var Terms_1 = require("./components/Terms");
var UserProfile_1 = require("./pages/user/UserProfile");
var react_2 = require("react");
var hooks_1 = require("./app/hooks");
var authSlice_1 = require("./features/authSlice");
var productSlice_1 = require("./features/productSlice");
var Footer_1 = require("./components/footer/Footer");
var MyOrders_1 = require("./pages/myOrders/MyOrders");
var Loader_1 = require("./components/Loader");
var fa6_1 = require("react-icons/fa6");
require("loaders.css/loaders.min.css");
require("./Loader.scss");
function App() {
    var _a = (0, react_1.useState)(false), showButton = _a[0], setShowButton = _a[1];
    (0, react_2.useEffect)(function () {
        var handleScroll = function () {
            if (window.scrollY > 500) {
                setShowButton(true);
            }
            else {
                setShowButton(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return function () {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    var handleTop = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    var dispatch = (0, hooks_1.useAppDispatch)();
    (0, react_2.useEffect)(function () {
        dispatch((0, authSlice_1.userSessionAsync)());
        dispatch((0, productSlice_1.getLatestProductsAsync)());
    });
    return (<>
      <react_router_dom_1.BrowserRouter>
        <Header_1.default />
        <react_router_dom_1.Routes>
          <react_router_dom_1.Route path="*" element={<NotFound_1.default />}/>
          <react_router_dom_1.Route path="/" element={<react_1.Suspense fallback={<Loader_1.default />}>
                <HomePage />
              </react_1.Suspense>}/>

          {/* ---------- MAIN ROUTES ---------- */}
          <react_router_dom_1.Route path="/products" element={<react_1.Suspense fallback={<Loader_1.default />}><Products /></react_1.Suspense>}/>
          <react_router_dom_1.Route path="/selectedItem/:id" element={<react_1.Suspense fallback={<Loader_1.default />}>
                <SelectedItem />
              </react_1.Suspense>}/>
          <react_router_dom_1.Route path="/cart" element={<Cart_1.default />}/>
          <react_router_dom_1.Route path="/checkout" element={<Checkout_1.default />}/>
          <react_router_dom_1.Route path="/orders" element={<MyOrders_1.default />}/>

          {/* ---------- AUTH ROUTES ---------- */}
          <react_router_dom_1.Route path="/signup" element={<Signup_1.default />}/>
          <react_router_dom_1.Route path="/login" element={<Login_1.default />}/>
          <react_router_dom_1.Route path="/reset/:id/:value" element={<ResetPass_1.default />}/>
          <react_router_dom_1.Route path="/forget" element={<ForgetPass_1.default />}/>
          <react_router_dom_1.Route path="/otp/:id" element={<OtpChecker_1.default />}/>
          <react_router_dom_1.Route path="/profile" element={<UserProfile_1.default />}/>

          {/* ---------- OTHER ROUTES ---------- */}
          <react_router_dom_1.Route path="/privacy-policy" element={<PrivacyPolicy_1.default />}/>
          <react_router_dom_1.Route path="/terms" element={<Terms_1.default />}/>
          <react_router_dom_1.Route path="/contact" element={<Contact_1.default />}/>
          <react_router_dom_1.Route path="/about" element={<About_1.default />}/>
        </react_router_dom_1.Routes>

        {showButton && (<button onClick={handleTop} className="moveTop rounded-full px-3 py-3 bg-[#EB72AF]">
            <fa6_1.FaArrowUp size={21} className="text-white"/>
          </button>)}

        <Footer_1.default />
      </react_router_dom_1.BrowserRouter>
      <react_hot_toast_1.Toaster />
    </>);
}
exports.default = App;
