import Button from "../../components/Button";
import "./Home.css";

const SecondCta = () => {
  return (
    <>
      <section className="w-full second_cta_bg py-14 sm:py-32 px-4 sm:px-4 xl:px-0">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto flex justify-end">
          <div className="content max-w-md lg:max-w-xl">
            <h2 className="mb-6 playfair text-4xl sm:text-5xl font-semibold text-white">
              Explore Our Wide Range of Amazing Products
            </h2>

            <p className="mb-6 text-white">
              We feel proud to be your beauty spot! Pick what you need with just
              one click.
            </p>

            <Button name="Explore Products" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondCta;
