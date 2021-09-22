import classes from "./slider.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import imgSandwich from "../../../assets/images/sandwich-png.png";
import imgPizza from "../../../assets/images/pizza-png.png";
import imgBurger from "../../../assets/images/burger-png.png";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation]);
function Slide() {
  const data = [
    {
      img: imgSandwich,
      class:classes.imgSandwich,
      title: "Breakfas Sendwich",
      text: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
      price: "$13",
    },
    {
      img: imgPizza,
      class:classes.imgPizza,
      title: "Sicilian pizza",
      text: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
      price: "$35",
    },
    {
      img: imgBurger,
      class:classes.imgBurger,
      title: "Chesse Burger",
      text: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
      price: "$15",
    },
  ];
let next=  document.querySelector('.swiper-button-next')
console.log(next);
  return (
    <div className={classes.slider}>
      <h2> Popular Recipes</h2>
      <div className={classes.slide}>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          loop={true}
          breakpoints={{

            600: {
              slidesPerView: 2,
              spaceBetween: -40,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: -50,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: -50,
            },
            1250: {
              slidesPerView: 3,
              spaceBetween: -60,
            },

            1500: {
              slidesPerView: 3,
              spaceBetween: -80,
            },
          }}
          className={classes.mySwiper}>
          {data.map((data, idx) => {
            return(
            <SwiperSlide className={classes.prev} key={idx}>
              <div className={classes.slideBox}>
                <img className={data.class} src={data.img} alt="food" />
                <h3 className={classes.cardTitle}>{data.title}</h3>
                <p className={classes.cardText}>{data.text}</p>
                <h1 className={classes.cardPrice}>{data.price}</h1>
              </div>
            </SwiperSlide>)
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Slide;
