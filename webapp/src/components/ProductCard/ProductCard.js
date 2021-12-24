import "./style.scss";
import { Card, Button } from "antd";
import { useDispatch } from "react-redux";
import actionTypes from "../../redux/actionTypes";
const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const { Meta } = Card;
  return (
    <Card
      hoverable
      style={{ width: 280, borderRadius: "15px 15px" }}
      cover={
        <img width={100} height={280} alt="product_image" src={item.image} />
      }
      actions={[
        <Button
          onClick={(item) =>
            dispatch({ type: actionTypes.ADD_TO_BASKET, paload: item })
          }
          style={{ backgroundColor: "rgb(120, 138, 238", borderRadius: 8 }}
        >
          خرید
        </Button>,
      ]}
    >
      <Meta title={item.title} description={item.price} />
      <br />
    </Card>
  );
};
export default ProductCard;
