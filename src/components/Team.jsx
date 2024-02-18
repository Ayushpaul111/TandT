import { team } from "../constants";
import styles from "../style";
import TeamCard from "./FeedbackCard";
import { quotes,people01 } from "../assets";

const Testimonials = () => (
  <section
    id="team"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient bottom-90" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        About Us
        {/* <br className="sm:block hidden" /> Behind The Agency */}
      </h2>
      {/* <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div> */}
    </div>
    <div
    id="lead"
    className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[770px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card"
  >
    <img
      src={quotes}
      alt="double_quotes"
      className="w-[58px] h-auto object-contain"
    />
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10 ">
    At our Digital marketing company, we turn clicks into clients and dreams into digital reality. Elevate your brand with our strategic prowess and creative finesse. Your success, our mission.
    </p>

    <div className="flex flex-row ">
      <img
        src={people01}
        alt={name}
        className="w-[48px] h-[48px] rounded-full object-cover"
      />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
        Bireswar Das
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
        Founder & Leader
        </p>
      </div>
    </div>
  </div>

    <div className="flex flex-wrap text-center md:text-start sm:justify-center justify-center w-full feedback-container relative z-[1]">
    {team.map((card) => (
   <TeamCard key={card.id} {...card} />
))}
    </div>
  </section>
);

export default Testimonials;
