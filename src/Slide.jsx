import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import logo from "./images/IMG_9427.JPG";
import logo2 from "./images/IMG_9428.JPG";
import logo3 from "./images/IMG_9440.JPG";
const Slide = () => {
  const params = {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  };

  return (
    <div className="">
      <Swiper {...params}>
        <div className={` imagegrid`}>
          <img src={logo} alt="swipe" />
        </div>
        <div className={`imagegrid`}>
          <img src={logo2} alt="swipe" />
        </div>
        <div className={` imagegrid`}>
          <img src={logo3} alt="swipe" />
        </div>
      </Swiper>
    </div>
  );
};

export default Slide;
