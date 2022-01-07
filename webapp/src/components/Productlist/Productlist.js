import { useEffect } from "react";
import { Skeleton, Row, Col } from "antd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import ProductActions from "../../redux/products/ProductsAction";
import SwiperCarousel from "../Carusel/Carousel";
import Carousel from "../Carusel/Carousel";

const Productlist = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector(
    (state) => state.ProductsReducer
  );
  useEffect(() => {
    dispatch(ProductActions.getProducts());
  }, []);
  if (loading || !data.length) return <Skeleton active />;
  if (error) return <div> somthing went wrong!!!</div>;
  if (data.length) {
    {
      return (
        <Row
          style={{
            backgroundColor: "#eee",
            marginTop: 15,
            borderRadius: " 15px 15px",
          }}
          gutter={[0, 15]}
        >
          <Carousel />

          {data.map((item) => (
            <Col
              className="product"
              xs={24}
              md={12}
              lg={6}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      );
    }
  }
};
export default Productlist;
