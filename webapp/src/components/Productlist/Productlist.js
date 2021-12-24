import { useEffect } from "react";
import { Skeleton, Row, Col } from "antd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import ProductActions from "../../redux/products/ProductsAction";

const Productlist = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector(
    (state) => state.ProductsReducer
  );
  useEffect(() => {
    dispatch(ProductActions.getProducts());
  }, []);
  if (loading || !data.length) return <Skeleton />;
  if (error) return <div> somthing went wrong!!!</div>;
  if (data.length) {
    {
      return (
        <Row
          style={{ backgroundColor: "#eee", marginTop: 15, borderRadius: 15 }}  
          gutter={[0, 15]}
        >
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
