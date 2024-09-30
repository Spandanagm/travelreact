import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tajmahal.jpeg";
import Img2 from "../../assets/places/water.jpeg";
import Img3 from "../../assets/places/boat.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Top places to visit in India",
    description:
      "India is a treasure trove of breathtaking landscapes, historical landmarks, and vibrant cultures, making it a top destination for travelers. The **Taj Mahal** in Agra, one of the Seven Wonders of the World, stands as a timeless symbol of love and architectural brilliance. Rajasthan, known for its royal heritage, offers the majestic **Amer Fort** in Jaipur, the serene lakes and palaces of **Udaipur**, and the desert beauty of **Jaisalmer**. In the south, the lush backwaters of **Kerala** provide a tranquil experience, with houseboat cruises through palm-fringed waterways. For nature lovers and adventure seekers, the northern hill stations of **Manali**, **Shimla**, and the valleys of **Kashmir** offer scenic landscapes and thrilling activities like trekking and skiing. The spiritual heart of India can be found in **Varanasi**, where ancient rituals on the banks of the Ganges River unfold daily, and in **Rishikesh**, a global hub for yoga and meditation. The golden beaches of **Goa** are perfect for relaxation and nightlife, while **Mumbai**, with its bustling streets and film industry, and **Delhi**, with its blend of modernity and historical monuments like the **Red Fort** and **Qutub Minar**, offer a dynamic urban experience. Each region of India presents its own unique charm, from the Himalayas to the coastal plains, making it a country that fascinates and inspires at every turn.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 1,
    image: Img2,
    title: "Top places to visit in US",
    description:
      "The United States is a vast and diverse country with an array of iconic landmarks, natural wonders, and vibrant cities. The bustling metropolis of **New York City** is a must-visit for its famous landmarks like the **Statue of Liberty**, **Times Square**, and **Central Park**, as well as its world-class museums and theaters. On the West Coast, **Los Angeles** is home to Hollywood and the sunny beaches of Southern California, while nearby **San Francisco** offers the **Golden Gate Bridge**, historic **Alcatraz Island**, and vibrant neighborhoods like Chinatown. Nature lovers will be captivated by the grandeur of **Grand Canyon National Park** in Arizona, the breathtaking scenery of **Yellowstone** in Wyoming, and the majestic peaks of **Yosemite** in California. For a mix of culture and history, **Washington, D.C.** showcases iconic monuments such as the **White House**, **Lincoln Memorial**, and Smithsonian museums. The coastal charm of **Miami** offers a blend of tropical beaches and Cuban-influenced culture, while **Las Vegas** dazzles with its world-renowned entertainment and nightlife. The diversity of the US—from the vibrant streets of **Chicago** to the picturesque landscapes of **Hawaii** and **Alaska**—offers something for every kind of traveler.",
    date: "April 22, 2022",
  },
  {
    id: 1,
    image: Img3,
    title: "Top places to visit in Japan",
    description:
      "Japan is a country where ancient traditions harmoniously blend with cutting-edge modernity, offering an incredible variety of places to visit. **Tokyo**, the bustling capital, is a must-see for its towering skyscrapers, neon-lit streets, historic temples like **Senso-ji**, and popular districts like **Shibuya** and **Shinjuku**. For a more traditional experience, **Kyoto** is renowned for its stunning temples, including the **Kinkaku-ji (Golden Pavilion)**, **Fushimi Inari Shrine**, and its tranquil bamboo groves in **Arashiyama**. **Osaka**, Japan's food capital, offers vibrant nightlife and historic landmarks like **Osaka Castle**. The iconic **Mount Fuji** near **Hakone** provides breathtaking views and hiking opportunities, while **Nara** is famous for its ancient **Todai-ji Temple** and freely roaming deer. For a more serene experience, **Hokkaido** offers beautiful landscapes, hot springs, and winter sports. History enthusiasts should visit **Hiroshima**, home to the **Peace Memorial Park**, a poignant reminder of the city’s resilience. Additionally, the tropical islands of **Okinawa** offer pristine beaches, crystal-clear waters, and a relaxed island atmosphere. Japan’s fusion of modern marvels, cultural heritage, and natural beauty makes it a fascinating destination for all types of travelers.",
    author: "Someone",
    date: "April 22, 2022",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;