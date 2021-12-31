import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import "./style.scss";
import actionTypes from "../../redux/actionTypes";

const Basketlist = () => {
  const dispatch = useDispatch();
  const selectProduct = useSelector(
    (state) => state.ProductBasketReducer.selectedProduct
  );
  let totelPrice = 0;
  for (let i = 0; i < selectProduct.length; i++) {
    totelPrice += selectProduct[i].price * selectProduct[i].amount;
  }
  const incrense = (item) => {
    item.amount++;
    dispatch({ type: actionTypes.UPDATE_AMOUNT, payload: item });
  };

  const dencrense = (item) => {
    if (item.amount === 0) {
      return null;
    }
    item.amount--;
    dispatch({ type: actionTypes.UPDATE_AMOUNT, payload: item });
  };
  if (!selectProduct.length) {
    return (
      <div className="productbasket">
        <h1>سبد خرید</h1>
        <div className="noproductbasket">خالیه</div>
      </div>
    );
  }

  const productbasketlist = () => {
    return selectProduct.map((item) => {
      return (
        <Row style={{ marginTop: 20, display: "flex", alignItems: "center" }}>
          <Col xs={24} md={8}>
            <div>
              <img
                style={{ marginLeft: 200 }}
                width={150}
                height={150}
                src={item.image}
              />
            </div>
          </Col>
          <Col xs={24} md={16}>
            <div>
              <h2>{item.title}</h2>
              <p style={{ width: 320 }}>{item.description}</p>
            </div>
            <h3 sty>${item.price * item.amount}</h3>
            <h4>مقدار:{item.amount}</h4>
            <span>
              <Button
                onClick={() => incrense(item)}
                size="small"
                type="primary"
                shape="circle"
              >
                +
              </Button>
            </span>
            <span>
              <Button
                disabled={!item.amount ? true : false}
                onClick={() => dencrense(item)}
                size="small"
                type="primary"
                shape="circle"
              >
                -
              </Button>
            </span>
            <Button
              style={{ border: "none", marginLeft: 250, color: "#474747" }}
              onClick={() =>
                dispatch({
                  type: actionTypes.REMOVE_FROM_BASKET,
                  payload: item.id,
                })
              }
            >
              حذف
              <DeleteOutlined />
            </Button>
          </Col>
          <div
            style={{
              border: "1px solid #eee",
              width: "70%",
              margin: "auto",
            }}
          ></div>
        </Row>
      );
    });
  };

  return (
    <>
      {productbasketlist()}

      <h4 style={{ paddingBottom: 25, textAlign: "center", marginTop: 20 }}>
        جمع قیمت:{totelPrice.toFixed(2)}
      </h4>
    </>
  );
};

export default Basketlist;
