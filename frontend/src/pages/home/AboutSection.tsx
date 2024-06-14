import { Link } from "react-router-dom";

const AboutSection: React.FC = () => {
  const handleTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="py-10 px-0">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto bg-[#FFF3F9]">
          <div className=" flex justify-center items-center flex-wrap">
            <div className="content lg:w-[50%] px-5 sm:px-16 md:px-10 py-14">
              <div className="data">
                <h2 className="mb-6 playfair text-4xl sm:text-5xl font-bold">
                  About Us
                </h2>
                <p className="mb-6 text-md">
                  For Your Beauty is your go-to resort for all things beauty!
                  Our story began with an urge to empower individuals to help
                  glorify their uniqueness in their most natural selves. We
                  believe that everyone deserves to feel radiant and confident
                  in their skin, and that's why we came into being. We produce
                  and promote quality products, inclusivity and all-skin
                  compatibility, cruelty-free cosmetics, and
                  environment-sustainable practices.
                </p>

                <Link
                  to="/about"
                  onClick={handleTop}
                  className="text-md mx-auto px-10 py-3 bg-[#EC72AF] text-white font-medium"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="group img_side lg:w-[50%] overflow-hidden">
              <img
                className="ransition duration-500 group-hover:scale-105"
                src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/Banner_4.webp?v=1718298006"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
