import "./Header.scss";
import logoImg from "../../img/logo.PNG";
import { Badge, Row, Col, Popover, Button } from "antd";
import { Link } from "react-router-dom";
import Searchbox from "../searchbox/searchbox";
import ShopingCart from "../shopingcart/ShopingCart";
import { useSelector } from "react-redux";

const Header = () => {
  const basket = useSelector(
    (state) => state.ProductBasketReducer.selectedProduct
  );
  const rendercontent = () => {
    return basket?.map((item) => (
      <div
        style={{
          paddingBottom: 8,
          marginBottom: 8,
          borderBottom: "1px solid #eee",
        }}
      >
        <span style={{ marginleft: 10 }}>
          <img
            src={item.image}
            style={{ width: 50, height: 60, marginRight: 8 }}
          />
          <span>{item.title}</span>
          <span style={{ color: "rgb(122, 120, 120)" }}>x{item.amount}</span>
        </span>
      </div>
    ));
  };

  const content = () => {
    return (
      <div>
        {rendercontent()}
        <Link to="/Basketlist" style={{ color: "black" }}>
          <Button>خرید</Button>
        </Link>
      </div>
    );
  };
  return (
    <Row>
      <Col xs={12} md={6} lg={24}>
        <div className="header">
          <Popover content={content()} title="لیست خرید" trigger="click">
            <Badge
              count={basket.length}
              style={{ marginTop: 20, marginRight: 12 }}
              showZero
            >
              <ShopingCart />
            </Badge>
          </Popover>

          <Searchbox />
          <img src={logoImg} alt="" />
        </div>
      </Col>
    </Row>
  );
};

export default Header;
