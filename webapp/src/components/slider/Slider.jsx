import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Style.scss";
import "swiper/css/navigation";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { useSelector } from "react-redux";

const Slider = () => {
  const { data } = useSelector((state) => state.ProductsReducer);
  const slice = data.slice(10, 20);
  console.log("slice", slice);

  SwiperCore.use([Autoplay, Pagination, Navigation]);
  return (
    <>
      <div className="swiper1">
        <div className="mySwiper">
          <Swiper
            centeredSlides={true}
            simulateTouch
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
          >
            {slice.map((item) => (
              <SwiperSlide key={item.id}>
                <img alt="product_image" src={item.image} className="img" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Slider;
