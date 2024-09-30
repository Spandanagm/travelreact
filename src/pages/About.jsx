import React from "react";
import BlogsComp from "../Components/Blogs/BlogsComp";
import Location from "../Components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About Us
          </h1>
          <p>
            Welcome to our platform! We are dedicated to connecting students and providing a marketplace for buying and selling used accessories. Our mission is to foster a community where students can support each other, share experiences, and make informed purchases.
          </p>
          <br />
          <p>
            Our platform not only serves as a trading space but also as a hub for student interactions. We believe in empowering students by providing them with the tools they need to thrive in their academic and personal lives. From textbooks to laptops, we aim to make your student journey easier and more affordable.
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
