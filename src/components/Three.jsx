import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";

const cardData = [
  {
    title: "Social Media Marketing",
    icon: "https://cdn-icons-png.flaticon.com/512/8152/8152167.png",
    description: "We promote your market through social media marketing.",
  },
  {
    title: "Search Marketing",
    icon: "https://cdn-icons-png.flaticon.com/512/5237/5237585.png",
    description: "Make sure your customers notice you.",
  },
  {
    title: "Content Creation",
    icon: "https://www.pngfind.com/pngs/b/692-6929527_brand-content-creation-computer-aided-design-icon-hd.png",
    description: "We create contents that attract potential customers.",
  },
  {
    title: "Video Creation",
    icon: "https://cdn-icons-png.flaticon.com/512/6253/6253299.png",
    description:
      "Make and promote your videos and turn viewers into customers.",
  },
  {
    title: "Web Development",
    icon: "https://cdn-icons-png.flaticon.com/512/9517/9517119.png",
    description: "Innovate and build modern apps for your business.",
  },
  {
    title: "App Development",
    icon: "https://cdn-icons-png.flaticon.com/512/5738/5738031.png",
    description: "We develop perfect and fast website.",
  },

  {
    title: "E-commerce Development",
    icon: "https://cdn-icons-png.flaticon.com/512/2867/2867321.png",
    description:
      "Developing your e-commerce website to accept payments,behave in response to user action.",
  },
  {
    title: "Google ads",
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-ads-icon.png",
    description: "Reach customers where ever they are.",
  },
];

const CardDeal = () => (
  <section id="service" className={layout.sectionInfo}>
    <div className="p-10 grid grid-cols-1 ss:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-5 ">
      {/* <div className="absolute z-[0] w-[20%] h-[10%] top-[55%] right-[78%] rounded-full blue__gradient bottom-40"></div> shit bg i'll fix later */}
      {cardData.map((data, index) => (
        <div
          key={index}
          className="flex flex-col bg-gradient-to-t rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52 feature-card"
        >
          {/* <img className="w-full" src={card} alt={data.title} /> */}
          <div className="px-6 py-4 relative z-[1] ">
            <img
              src={data.icon}
              alt=""
              class="h-20 mx-auto mb-2 justify-center"
            />
            <h2 className={`text-center text-lg text-white px-2 pb-2`}>
              {data.title}
            </h2>
            <p
              className={`${styles.paragraph}text-gray-700 text-center text-base max-w-[470px] mt-5`}
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
