import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Skeleton } from "antd";
import { useParams } from "react-router-dom";
import categorylistAction from "../../redux/categorylist/categorylistAction";
import ProductCard from "../ProductCard/ProductCard";

const Categorylist = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.CategorylistReducer.categorylist);
  console.log("categorylist", data);
  useEffect(() => {
    dispatch(categorylistAction.getCategoryproduct(name));
  }, [name]);

  return data.length > 0 ? (
    <div marginTop={50}>
      <Row
        style={{
          backgroundColor: "#eee",
          marginTop: 15,
          borderRadius: " 15px 15px",
        }}
        gutter={[0, 15]}
      >
        {data.map((item, index) => (
          <Col
            key={index.id}
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
    </div>
  ) : (
    <Skeleton />
  );
};

export default Categorylist;
