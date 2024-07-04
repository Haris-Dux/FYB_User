import { Link } from "react-router-dom";
import { FadeText } from "../../components/magicui/fade-text";
import WordPullUp from "../../components/magicui/word-pull-up";

const HeroSection: React.FC = () => {
  return (
    <>
      <section className="w-full ">
        <div className="flex justify-center items-center flex-col-reverse lg:flex-row bg-[#FDEDF5]">
          {/* IMAGE SECTION */}
          <div className="img_side min-w-[50%]">
            <img
              className="object-cover object-center"
              src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/Main_Banner.webp?v=1718298006"
              alt="banner_img"
            />
          </div>

          {/* CONTENT SECTION */}
          <div className="text_side min-w-[50%] h-full py-20 sm:py-12 px-5 sm:px-8">
            <div className="content lg:max-w-xl mx-auto">
              {/* <h1 className="playfair max-w-[35rem] mb-6 text-4xl sm:text-5xl xl:text-6xl font-semibold">
                Keep It Natural With Our New Cosmetic Range
              </h1> */}
              <WordPullUp
                className="playfair text-start max-w-[35rem] mb-6 text-4xl sm:text-5xl xl:text-6xl font-semibold"
                words="Keep It Natural With Our New Cosmetic Range"
              />
              {/* <p className="roboto mb-6 text-sm sm:text-lg font-normal">
                Your one-stop destination for natural slaying looks and glowing
                skin. Shop from our carefully handpicked beauty products.
              </p> */}

              <p>
                <FadeText
                  className="roboto text-sm sm:text-lg font-normal"
                  direction="right"
                  framerProps={{
                    show: { transition: { delay: 1.7 } },
                  }}
                  text="Your one-stop destination for natural slaying looks and glowing
                skin. Shop from our carefully handpicked beauty products."
                />
              </p>

              <div className="button mt-6">
                <Link
                  to="/products"
                  onClick={() => window.scroll(0, 0)}
                  className="px-6 py-2.5 bg-[#EC72AF] text-white"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
