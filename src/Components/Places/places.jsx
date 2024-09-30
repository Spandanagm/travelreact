import React from "react";
import PlacesCard from "./PlacesCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpeg";
import Img3 from "../../assets/places/water.jpeg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";

const placesData = [
  {
    img: Img1,
    title: "Boat",
    location: "USA",
    description: "The USA offers a variety of stunning boating destinations, from the crystal-clear waters of **Lake Tahoe** in California/Nevada, surrounded by scenic mountains, to the tropical paradise of the **Florida Keys**, where boaters can explore coral reefs and uninhabited islands. The red rock canyons of **Lake Powell** on the Arizona/Utah border provide a dramatic backdrop for water adventures, while the **Chesapeake Bay** on the East Coast offers rich history, wildlife, and famous seafood. In the Pacific Northwest, the **San Juan Islands** in Washington are known for their calm waters and breathtaking wildlife, making them ideal for a serene, nature-filled boating experience.",
    
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Underwater",
    location: "Maldives",
    description:
      "The Maldives is renowned for its stunning underwater landscapes, making it a top destination for snorkeling and scuba diving enthusiasts. The archipelago boasts vibrant coral reefs teeming with marine life, including colorful tropical fish, sea turtles, and majestic manta rays. The crystal-clear waters offer excellent visibility, allowing divers to explore the intricate coral formations and abundant biodiversity. Popular dive sites, like the Banana Reef and Maaya Thila, provide opportunities to encounter everything from gentle whale sharks to playful dolphins. With its stunning atolls, the Maldives offers an unparalleled underwater experience that captivates adventurers and nature lovers alike.",
    price: 6200,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Sydney",
    location: "USA",
    description: "Sydney, USA, offers attractions like the scenic Lake Ontario, ideal for outdoor activities, and the historic sites of the Sydney Historic District, showcasing beautiful architecture. Nearby, you can explore the charming local parks and trails for hiking and nature walks..",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Los Angeles",
    location: "United states",
    description:
      "Los Angeles boasts iconic tourist attractions such as the Hollywood Sign, Griffith Observatory, and the Walk of Fame. Visitors can explore Universal Studios for movie magic, relax on the beaches of Santa Monica and Venice, and discover art at the Getty Center. The vibrant neighborhoods of Downtown LA and Beverly Hills also offer shopping, dining, and cultural experiences.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Los Vegas",
    location: "California",
    description:
      "Las Vegas is renowned for its vibrant nightlife, casinos, and entertainment. Visitors can explore the famous Las Vegas Strip, home to luxurious resorts like the Bellagio and Caesars Palace. Attractions include the dazzling Fountains of Bellagio, the High Roller observation wheel, and numerous world-class shows. The nearby Red Rock Canyon offers stunning natural landscapes, while the Fremont Street Experience provides a glimpse of vintage Vegas.",
    price: 6200,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {placesData.map((item, index) => (
              <PlacesCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;