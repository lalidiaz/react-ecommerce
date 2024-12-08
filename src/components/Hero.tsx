import { Link } from "react-router-dom";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight  sm:text-6xl ">
          Your Daily Ritual of Radiance
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8">
          Our thoughtfully curated skincare collection honors your skin's
          natural wisdom, combining scientific precision with mindful
          simplicity. Each product is an invitation to pause, nurture, and
          transform – creating moments of self-care that whisper rather than
          announce.
        </p>
        <div className="mt-10 ">
          <Link to="products" className="btn btn-primary ">
            Find Your Essential
          </Link>
        </div>
      </div>
      <div className="hidden  h-[28rem] lg:carousel carousel-center   p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-80  object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
