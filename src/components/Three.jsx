import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";

const cardData = [
  {
    title: "Social Media Marketing",
    description: "We promote your market through social media marketing.",
  },
  {
    title: "Search Marketing",
    description: "Make sure your customers notice you.",
  },
  {
    title: "Content Creation",
    description: "We create contents that attract potential customers.",
  },
  {
    title: "Video Creation",
    description:
      "Make and promote your videos and turn viewers into customers.",
  },
  {
    title: "Web Development",
    description: "Innovate and build modern apps for your business.",
  },
  {
    title: "App Development",
    description: "We develop perfect and fast website.",
  },

  {
    title: "E-commerce Development",
    description:
      "Developing your e-commerce website to accept payments,behave in response to user action.",
  },
  {
    title: "Google ads",
    description: "Reach customers where ever they are.",
  },
];

const CardDeal = () => (
  <section id="service" className={layout.sectionInfo}>
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
      {/* <div className="absolute z-[0] w-[20%] h-[10%] top-[55%] right-[78%] rounded-full blue__gradient bottom-40"></div> shit bg i'll fix later */}
      {cardData.map((data, index) => (
        <div
          key={index}
          className="bg-black-gradient-2 rounded-[20px] box-shadow overflow-hidden shadow-lg "
        >
          {/* <img className="w-full" src={card} alt={data.title} /> */}
          <div className="px-6 py-4 relative z-[1]">
            <h2 className={` font-bold text-3xl text-white mb-2`}>
              {data.title}
            </h2>
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
