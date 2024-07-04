import "./About.css";
import AboutSection from "../home/AboutSection";
import Review from "../home/Review";
import { Helmet } from "react-helmet";
import BoxReveal from "../../components/magicui/box-reveal";

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us - For Your Beauty</title>
      </Helmet>
      <section className="about">
        <div className="py-12 sm:py-24 about_cont px-2.5 flex justify-center items-center flex-col">
          <h2 className="mb-2 text-white text-2xl sm:text-4xl font-semibold text-center max-w-xl">
            About Us
          </h2>
          <h2 className="mb-5 text-white text-md sm:text-md font-light text-center max-w-xl">
            Home / About Us
          </h2>
        </div>
      </section>
      {/* ----------- IMAGE & TEXT SECTION -----------  */}
      <section className="body-font">
        <div className="max-w-6xl mx-auto flex px-0 py-4 sm:py-20 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Group_72014.png?v=1714583762"
            />
          </div>

          <div className="lg:flex-grow md:w-1/2 px-4 sm:px-0 xl:pl-16 lg:pl-20 md:pl-16 flex flex-col text-left">
            <BoxReveal boxColor={"#EC72AF"} duration={0.5}>
              <h1 className="playfair mb-5 font-bold max-w-md text-3xl md:text-5xl text-[#272727]">
                Our Story
              </h1>
            </BoxReveal>

            <BoxReveal boxColor={"#EC72AF"} duration={0.5}>
              <p className="mb-6 leading-relaxed">
                Welcome to For Your Beauty, where we believe that true beauty
                begins with self-care and self-love. Our journey started with a
                simple yet profound realization: everyone deserves to feel
                confident and radiant in their own skin. Driven by this passion,
                we embarked on a mission to create skincare products that are
                not only effective but also kind to your skin and the
                environment.
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#EC72AF"} duration={0.5}>
              <p className="mb-6 leading-relaxed">
                Our story is one of dedication and innovation. From humble
                beginnings, we have grown into a brand that values quality,
                sustainability, and authenticity. Each product is meticulously
                crafted using natural ingredients, ensuring that your skincare
                routine is both luxurious and nourishing. We are committed to
                transparency, and we strive to provide you with products that
                you can trust and love.
              </p>
            </BoxReveal>
          </div>
        </div>
      </section>
      {/* ----------- OUR MISSION & VISSION -----------  */}
      <section className="">
        <div className="py-5 sm:py-8 max-w-6xl mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          {/* LEFT BOX */}
          <div className="left_box text-center px-4 sm:px-10 py-12 border border-[#EC72AF]">
            <img
              className="mx-auto w-20"
              src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Mask_group.png?v=1714584117"
              alt=""
            />
            <h2 className="playfair mt-3 text-4xl font-semibold ">
              Our Vision
            </h2>
            <p className="mt-3 font-light">
              At For Your Beauty, our vision is to revolutionize the skincare
              industry by offering products that blend nature's finest
              ingredients with cutting-edge science. We aspire to create a world
              where everyone feels empowered to embrace their unique beauty,
              with skincare that is as gentle on the planet as it is on the
              skin. Our commitment to sustainability, innovation, and
              authenticity drives us to continually push the boundaries of what
              skincare can achieve.
            </p>
          </div>

          {/* RIGHT BOX */}
          <div className="right_box text-center px-4 sm:px-10 py-12 border border-[#EC72AF]">
            <img
              className="mx-auto w-20"
              src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Mask_group_1.png?v=1714584117"
              alt=""
            />
            <h2 className="playfair mt-3 text-4xl font-semibold">
              Our Mission
            </h2>
            <p className="mt-3 font-light">
              Our mission at For Your Beauty is to provide high-quality, natural
              skincare products that enhance and celebrate the beauty of all
              skin types. We are dedicated to fostering a community of
              confidence and self-love, offering solutions that not only improve
              skin health but also promote a sense of well-being. Through
              transparency, integrity, and a relentless pursuit of excellence,
              we aim to become your trusted partner in every step of your
              skincare journey.
            </p>
          </div>
        </div>
      </section>
      <AboutSection />
      <Review />
    </>
  );
};

export default About;
