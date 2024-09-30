import React from "react";
import Hero from "../Components/Hero/Hero";
import NatureVid from "../assets/videos/naturevid.mp4";
import BlogsComp from "../Components/Blogs/BlogsComp";
import Places from "../Components/Places/places";
import Testimonial from "../Components/Testimonial/Testimonial";
import Banner from "../Components/Banner/Banner";
import BannerPic from "../Components/BannerImg/BannerImg.jsx";
import BannerImg from "../assets/cover-women.jpg";
import Banner2 from "../assets/travel-cover2.jpg";
import OrderPopup from "../Components/OrderPopup/OrderPopup"; // Correct import

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(true);
  };
  return (
    <>
      <div>
        <div className="h-[700px] relative">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={NatureVid} type="video/mp4" />
          </video>
          <Hero />
        </div>
        <Places handleOrderPopup={handleOrderPopup} />
        <BannerPic img={BannerImg} />
        <BlogsComp />
        <Banner />
        <BannerPic img={Banner2} />
        <Testimonial />
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};

export default Home;

