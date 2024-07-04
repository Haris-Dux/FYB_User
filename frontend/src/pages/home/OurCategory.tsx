import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import WordPullUp from "../../components/magicui/word-pull-up";

const OurCategory: React.FC = () => {
  const navigate = useNavigate();

  const handleProducts = (categoryName: string) => {
    navigate(`/products?category=${categoryName}`);
    window.scroll(0, 0);
  };

  return (
    <>
      <section className="py-14 sm:py-16 px-4 sm:px-4 xl:px-0">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          {/* <h2 className="mb-2.5 playfair text-center text-4xl font-bold"></h2> */}
          <WordPullUp
            className="mb-2.5 playfair text-center text-4xl font-bold"
            words="Our Category"
          />
          <p className=" mx-auto h-0.5 w-16 bg-[#EC72AF]"></p>

          {/* CONTENT */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-4 xl:gap-6">
            <article
              onClick={() => handleProducts("Skincare")}
              className="group relative overflow-hidden rounded-lg shadow transition hover:shadow-lg cursor-pointer"
            >
              <img
                alt=""
                src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/Categories_Banners.webp?v=1718298006"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-black/50 to-transparent pt-60 sm:pt-56 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <h3 className="playfair mb-2 mt-0.5 text-xl font-medium text-white">
                    Skincare
                  </h3>

                  <p className="text-white text-sm tracking-wider flex items-center gap-1">
                    Shop Now <IoIosArrowRoundForward size={25} />
                  </p>
                </div>
              </div>
            </article>

            <article
              onClick={() => handleProducts("Body Care")}
              className="group relative overflow-hidden rounded-lg shadow transition hover:shadow-lg cursor-pointer"
            >
              <img
                alt=""
                src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/Categories_Banners_Body_Wash.webp?v=1718298005"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-black/50 to-transparent pt-60 sm:pt-56 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <h3 className="playfair mb-2 mt-0.5 text-xl font-medium text-white">
                    Bodycare
                  </h3>

                  <p className="text-white text-sm tracking-wider flex items-center gap-1">
                    Shop Now <IoIosArrowRoundForward size={25} />
                  </p>
                </div>
              </div>
            </article>

            <article
              onClick={() => handleProducts("Haircare")}
              className="group relative overflow-hidden rounded-lg shadow transition hover:shadow-lg cursor-pointer"
            >
              <img
                alt=""
                src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/Categories_Banners_Hair_Care.webp?v=1718298005"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-black/50 to-transparent pt-60 sm:pt-56 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <h3 className="playfair mb-2 mt-0.5 text-xl font-medium text-white">
                    Haircare
                  </h3>

                  <p className="text-white text-sm tracking-wider flex items-center gap-1">
                    Shop Now <IoIosArrowRoundForward size={25} />
                  </p>
                </div>
              </div>
            </article>

            <article
              onClick={() => handleProducts("Cosmetics")}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                alt=""
                src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/cosmetic.webp?v=1718298006"
                className="absolute object-cover w-full h-full"
              />

              <div className="relative bg-gradient-to-t from-black/50 to-transparent pt-60 sm:pt-56 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <h3 className="playfair mb-2 mt-0.5 text-xl font-medium text-white">
                    Cosmetics
                  </h3>

                  <p className="text-white text-sm tracking-wider flex items-center gap-1">
                    Shop Now <IoIosArrowRoundForward size={25} />
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurCategory;
