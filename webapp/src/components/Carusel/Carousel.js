import { Navigation, A11y } from "swiper";
import { Card } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import images from "../../img/sugest.png";
import "../Carusel/Style.scss";
import "swiper/css";
import "swiper/css/navigation";
import { useSelector } from "react-redux";

const Carousel = () => {
  const { data } = useSelector((state) => state.ProductsReducer);
  const slice = data.slice(0, 10);
  console.log(slice);
  const { Meta } = Card;
  return (
    <>
      <div className="swiper">
        <div className="carousel">
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={0}
            slidesPerView={3}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {slice.map((item) => (
              <SwiperSlide key={item.id}>
                <Card
                  className="card"
                  hoverable
                  cover={
                    <img alt="product_image" src={item.image} className="img" />
                  }
                >
                  <Meta title={item.title} description={item.price} />
                  <br />
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="picture">
          <img src={images} alt="picture1" width={200} height={250} />
        </div>
      </div>
    </>
  );
};

export default Carousel;
