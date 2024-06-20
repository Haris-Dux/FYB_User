import { FaStar } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const data = [
  {
    review:
      "My biggest pet peeves have been dry skin. But when I stumbled across their hydrating moisturizer, it's been my saving grace since. It's absorbent, doesn't feel too tacky on the skin which I love, and has replenished my skin. I've received so many compliments since I started using it!",
    name: "Maryam",
    url: "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Vector.png?v=1714518760",
    rating: 5,
  },
  {
    review:
      "I've been on a hunt for a long-lasting full coverage foundation since I work long hour shifts. Since I bought ForYourBeauty’s recommended foundation, it's done wonders. I was blown away by the coverage and longevity of this foundation. The skin color match is perfect too!",
    name: "Eshaal",
    url: "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Vector.png?v=1714518760",
    rating: 4,
  },
  {
    review:
      "I've gone through a ton of bottles of this hair care duo, and it never ceases to amaze me. What I love about it as a vegan, is that its formula is cruelty-free and has recyclable packaging. I wish it came in a larger size though.",
    name: "Alina Ijaz",
    url: "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Vector.png?v=1714518760",
    rating: 4,
  },
  {
    review:
      "This creamy eyeshadow palette is a must-have cosmetic for runways and shows. As an MUA, this is my favorite palette to use on my clients and models since it's incredibly pigmented, blendable and stays on all day. I highly suggest it if you're big on eyeshadows.",
    name: "Hoorain Kashif",
    url: "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Vector.png?v=1714518760",
    rating: 5,
  },
  {
    review:
      "I've never been into skin exfoliation until I was recommended this face scrub. My skin has never looked this refreshed before. I wished it was fragrance-free because I'm not too big on scented skincare. Otherwise, it's one of my favorite skin care items I own.",
    name: "Memona Aslam",
    url: "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Vector.png?v=1714518760",
    rating: 5,
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
