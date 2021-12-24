import { useSelector } from "react-redux";
import { Skeleton, Row, Col } from "antd";
import Modalbasketcard from "../Modalbasketcard/Modalbasketcard";

const ModalBasketlist = () => {
  const { loading, selectProduct } = useSelector(
    (state) => state.ProductBasketReducer
  );

  if (loading || !selectProduct.length)
    return console.log("selectProduct", selectProduct);

  if (selectProduct.length) {
    return (
      <Row
        style={{ backgroundColor: "#eee", marginTop: 15, borderRadius: 15 }}
        gutter={[0, 15]}
      >
        {selectProduct.map((item) => (
          <Col
            key={item.id}
            className="product"
            xs={24}
            md={12}
            lg={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Modalbasketcard item={item} key={item.id} />
          </Col>
        ))}
      </Row>
    );
  }
};
export default ModalBasketlist;
