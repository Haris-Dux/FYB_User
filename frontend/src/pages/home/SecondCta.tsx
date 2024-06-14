import Button from "../../components/Button";
import "./Home.css";

const SecondCta = () => {
  return (
    <>
      <section className="w-full second_cta_bg py-14 sm:py-32 px-4 sm:px-4 xl:px-0">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          <div className="content max-w-xs text-white sm:max-w-xl xl:max-w-2xl">
            <h2 className="mb-6 playfair  text-4xl sm:text-5xl font-semibold">
              Discover the Essence of Natural Beauty
            </h2>

            <p className="mb-6 max-w-xs sm:max-w-md lg:max-w-full">
              Dive into a world of pure, organic skincare. Your journey to
              radiant, healthy skin starts here.
            </p>

            <Button name="Explore Products" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondCta;
