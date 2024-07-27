import { Link } from "react-router-dom";
import "./Home.css";

const SecondCta = () => {
  return (
    <>
      <section className="w-full second_cta_bg py-14 sm:py-32 px-4 sm:px-4 xl:px-0">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          <div className="content max-w-xs text-black sm:max-w-lg xl:max-w-lg">
            <h2 className="mb-6 playfair  text-4xl sm:text-5xl font-semibold">
              Beauty Bundles for Every Need
            </h2>

            <p className="mb-6 max-w-xs sm:max-w-md lg:max-w-full">
              Discover all-in-one beauty solutions designed for flawless skin.
            </p>

            <Link
              to="/bundle"
              onClick={() => window.scroll(0, 0)}
              className="px-6 py-2.5 bg-[#EC72AF] text-white"
            >
              Explore Bundles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondCta;
