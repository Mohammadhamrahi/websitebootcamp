import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "antd";
import { useParams } from "react-router-dom";
import categorylistAction from "../../redux/categorylist/categorylistAction";
import ProductCard from "../ProductCard/ProductCard";

const Categorylist = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector(
    (state) => state.CategorylistReducer.categorylist
  );
  console.log("categorylist", data);
  useEffect(() => {
    dispatch(categorylistAction.getCategoryproduct(name));
  }, [name]);
  return (
    <div>
      <Row
        style={{
          backgroundColor: "#eee",
          marginTop: 15,
          borderRadius: " 15px 15px",
        }}
        gutter={[0, 15]}
      >
        {data.map((item) => (
          <Col
            key={item.id}
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
  );
};

export default Categorylist;
