import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";

const cardData = [
  {
    title: "Mountain",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, Voluptatibus quia, Nonea! Maiores et perferendis eaque.",
  },
  {
    title: "Mountain",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, Voluptatibus quia, Nonea! Maiores et perferendis eaque.",
  },
  {
    title: "Mountain",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, Voluptatibus quia, Nonea! Maiores et perferendis eaque.",
  },
  // Add more card data as needed
];

const CardDeal = () => (
  <section className={layout.section}>
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
      {/* <div className="absolute z-[0] w-[20%] h-[10%] top-[55%] right-[78%] rounded-full blue__gradient bottom-40"></div> shit bg i'll fix later */}
      {cardData.map((data, index) => (
        <div
          key={index}
          className="bg-black-gradient-2 rounded-[20px] box-shadow overflow-hidden shadow-lg "
        >
          {/* <img className="w-full" src={card} alt={data.title} /> */}
          <div className="px-6 py-4 relative z-[1]">
            <div className={`${styles.heading2} font-bold text-xl mb-2`}>
              {data.title}
            </div>
            <p
              className={`${styles.paragraph}text-gray-700 text-base max-w-[470px] mt-5`}
            >
              {data.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default CardDeal;
