import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import AboutSection from "./AboutSection";
import CtaSection from "./CtaSection";
import FeaturesLine from "./FeaturesLine";
import HeroSection from "./HeroSection";
import LatestProducts from "./LatestProducts";
import OurCategory from "./OurCategory";
import Review from "./Review";
import SecondCta from "./SecondCta";
import Skincare from "./Skincare";
import { Helmet } from "react-helmet";
import { getallOrderAsync } from "../../features/orderSlice";
import { getLatestProductsAsync } from "../../features/productSlice";

const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getLatestProductsAsync());
  }, []);

  const latestProducts = useAppSelector(
    (state) => state.products.latestProducts
  );
  const user = useAppSelector((state) => state.auth.user);
  const userID = user?.user?.id;

  useEffect(() => {
    if (userID) {
      const id = userID;
      dispatch(getallOrderAsync(id));
    }
  }, [userID, dispatch]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>For Your Beauty</title>
      </Helmet>

      <HeroSection />

      <FeaturesLine />

      <OurCategory />

      <CtaSection />

      <LatestProducts latestProducts={latestProducts} />

      <AboutSection />

      <Skincare />

      <SecondCta />

      <Review />
    </>
  );
};

export default HomePage;
