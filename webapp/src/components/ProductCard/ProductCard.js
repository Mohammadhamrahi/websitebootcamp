import "./style.scss";
import { Card, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import actionTypes from "../../redux/actionTypes";
const ProductCard = ({ item }) => {
  const selectProduct = useSelector(
    (state) => state.ProductBasketReducer.selectedProduct
  );
  const dispatch = useDispatch();
  const { Meta } = Card;

  const addtobasket = () => {
    const foundProduct = selectProduct.find(
      (product) => product.id === item.id
    );
    if (foundProduct) {
      foundProduct.amount++;
      dispatch({ type: actionTypes.UPDATE_AMOUNT, payload: foundProduct });
    } else {
      dispatch({
        type: actionTypes.ADD_TO_BASKET,
        payload: { ...item, amount: 1 },
      });
    }
  };
  return (
    <div style={{ marginTop: 30 }}>
      <Card
        hoverable
        style={{ width: 280, borderRadius: "15px 15px" }}
        cover={
          <img width={100} height={280} alt="product_image" src={item.image} />
        }
        actions={[
          <Button
            className="buttom"
            onClick={addtobasket}
            style={{ backgroundColor: "rgb(120, 138, 238", borderRadius: 8 }}
          >
            خرید
          </Button>,
        ]}
      >
        <Meta title={item.title} description={item.price} />
        <br />
      </Card>
    </div>
  );
};
export default ProductCard;
