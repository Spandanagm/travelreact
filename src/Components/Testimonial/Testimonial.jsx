import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TestimonialData = [
  {
    id: 1,
    name: "Samuel",
    text: "Traveling has opened my eyes to the beauty and diversity of our world. Each place tells a story, and I cherish the connections I’ve made along the way.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "John Doe",
    text: "Every journey is a new adventure, filled with unforgettable experiences and memories. From breathtaking landscapes to rich cultures, traveling inspires me every day.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Smith",
    text: "Traveling enriches my life in ways I never imagined. Exploring new destinations allows me to discover different perspectives and appreciate the world's wonders.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <div data-aos="fade-up" data-aos-duration="300" className="py-10">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Testimonial
          </p>
          <h1 className="text-3xl font-bold">Testimonial</h1>
          <p className="text-xs text-gray-400">
            Traveling has profoundly changed my perspective on life. Each destination 
            offers unique cultures and experiences that enrich my soul. From the stunning
            landscapes of the Swiss Alps to the vibrant streets of Tokyo, every journey creates 
            unforgettable memories. Meeting people from diverse backgrounds deepens my appreciation 
            for the world. Traveling truly ignites my curiosity and fills me with joy!
          </p>
        </div>
        {/* Testimonial section */}
        <div
          data-aos="zoom-in"
          data-aos-duration="300"
          className="grid grid-cols-1 max-w-[800px] mx-auto gap-6"
        >
          <Slider {...settings}>
            {TestimonialData.map(({ id, name, text, img }) => {
              return (
                <div key={id} className="my-6">
                  <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                    <img
                      src={img}
                      alt=""
                      className="rounded-full block mx-auto"
                    />
                    <h1 className="text-xl font-bold">{name}</h1>
                    <p className="text-gray-500 text-sm">{text}</p>
                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                      ,,
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
