import { FaStar } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const data = [
  {
    review:
      "I recently tried the shampoo and conditioner from For Your Beauty, and my hair has never felt better! The products are gentle yet effective, leaving my hair smooth and shiny. I love the natural ingredients and the pleasant fragrance. Highly recommend!",
    name: "Maryam",
    url: "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Vector.png?v=1714518760",
    rating: 5,
  },
  {
    review:
      "For Your Beauty's serum is a game-changer for my skincare routine. It absorbs quickly and makes my skin feel so soft and hydrated. I've noticed a real difference in the appearance of fine lines. Plus, it's not greasy at all. Will definitely buy again!",
    name: "Eshaal",
    url: "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Vector.png?v=1714518760",
    rating: 4,
  },
  {
    review:
      "I have sensitive skin, so I was nervous about trying a new body wash. But the one from For Your Beauty is amazing! It's so gentle and doesn't irritate my skin at all. My skin feels clean and moisturized after every shower. Absolutely love it!",
    name: "Alina Ijaz",
    url: "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Vector.png?v=1714518760",
    rating: 4,
  },
  {
    review:
      "The toner from For Your Beauty is a must-have. It refreshes my skin and helps reduce redness. I use it every morning and night, and my skin looks clearer and brighter. It's a great addition to my skincare routine.",
    name: "Hoorain Kashif",
    url: "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Vector.png?v=1714518760",
    rating: 5,
  },
  {
    review:
      "I struggle with acne, so I decided to try the acne dot cleaner from For Your Beauty. It's incredible! The dots work overnight to reduce pimples and redness. They are easy to use and really effective. I'm so happy with the results!",
    name: "Memona Aslam",
    url: "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Vector.png?v=1714518760",
    rating: 5,
  },
  {
    review:
      "I recently bought the scalp scrub from For Your Beauty, and it has transformed my scalp health. It removes buildup and leaves my scalp feeling fresh and clean. My hair also seems to be growing faster and looks healthier. Amazing product!",
    name: "Rubab Alam",
    url: "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Vector.png?v=1714518760",
    rating: 4,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<FaStar key={i} className="text-[#FFC209]" />);
  }
  return <div className="flex">{stars}</div>;
};

const Review = () => {
  return (
    <>
      <section className="py-14 sm:py-20 bg-[#FFF3F9]">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          <h2 className="mb-2.5 playfair text-center text-4xl sm:text-5xl font-bold">
            What our Client Says
          </h2>
        </div>

        <Marquee direction="left" className="testimonial_marquee mt-14">
          {data.map((data, i) => (
            <article
              className="group mx-10 py-8 px-6 bg-white max-w-sm border border-gray-300 rounded-2xl"
              key={i}
            >
              <div className="card">
                <img className="mb-5" src={data.url} alt="" />

                <p>{data.review}</p>

                <div className="mt-5 flex justify-start items-center gap-3">
                  <div className="img w-10">
                    <img
                      className="rounded-full w-full"
                      src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/user.png?v=1718392709"
                      alt=""
                    />
                  </div>

                  <div className="profile">
                    <h3 className="mb-0.5 text-lg font-medium text-gray-900">
                      {data.name}
                    </h3>

                    <div className="mb-2 flex items-center justify-start gap-1">
                      <StarRating rating={data?.rating} />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </Marquee>
      </section>
    </>
  );
};

export default Review;
