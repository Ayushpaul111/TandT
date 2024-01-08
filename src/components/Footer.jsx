import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="tandt"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          Be Together, Build Together.
        </p>

        <div
          className={`${styles.paragraph} mt-4 max-w-[312px]`}
          style={{ display: "flex", alignItems: "center" }}
        >
          <svg
            height="18px"
            version="1.1"
            viewBox="0 0 18 18"
            width="18px"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="#fff" // Set the fill color to match your background color
          >
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
              <g fill="#fff" transform="translate(-85.000000, -126.000000)">
                <g transform="translate(85.000000, 126.000000)">
                  <path
                    d="M3.6,7.8 C5,10.6 7.4,12.9 10.2,14.4 L12.4,12.2 C12.7,11.9 13.1,11.8 13.4,12 C14.5,12.4 15.7,12.6 17,12.6 C17.6,12.6 18,13 18,13.6 L18,17 C18,17.6 17.6,18 17,18 C7.6,18 0,10.4 0,1 C0,0.4 0.4,0 1,0 L4.5,0 C5.1,0 5.5,0.4 5.5,1 C5.5,2.2 5.7,3.4 6.1,4.6 C6.2,4.9 6.1,5.3 5.9,5.6 L3.6,7.8 L3.6,7.8 Z"
                    id="Shape"
                  />
                </g>
              </g>
            </g>
          </svg>
          <span style={{ marginLeft: "8px" }}>+91 75019 56105</span>
        </div>
        <div
          className={`${styles.paragraph} mt-1 max-w-[312px]`}
          style={{ display: "flex", alignItems: "center" }}
        >
          <svg
            height="16px"
            version="1.1"
            viewBox="0 0 20 16"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
              <g fill="#fff" transform="translate(-168.000000, -43.000000)">
                <g transform="translate(168.000000, 43.000000)">
                  <path
                    d="M18,0 L2,0 C0.9,0 0,0.9 0,2 L0,14 C0,15.1 0.9,16 2,16 L18,16 C19.1,16 20,15.1 20,14 L20,2 C20,0.9 19.1,0 18,0 L18,0 Z M18,4 L10,9 L2,4 L2,2 L10,7 L18,2 L18,4 L18,4 Z"
                    id="Shape"
                  />
                </g>
              </g>
            </g>
          </svg>
          <span style={{ marginLeft: "8px" }}>support@takeandtricks.com</span>
        </div>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2022 Take and Tricks. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
