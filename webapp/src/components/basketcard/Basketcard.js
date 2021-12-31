import { Card, Row, Col } from "antd";
const Basketcard = ({ item }) => {
  const { Meta } = Card;
  return (
    // <Card
    //   // onClick={() => hovercard}
    //   hoverable
    //   style={{ width: 280, borderRadius: "15px 15px" }}
    //   cover={
    //     <img width={100} height={280} alt="product_image" src={item.image} />
    //   }
    // >
    //   <Meta title={item.title} description={item.price} />
    //   <br />
    // </Card>
    <Row>
      <Col xs={24} md={8}>
        <div>
          <img width={100} height={280} src={item.image} />
        </div>
      </Col>
      <Col xs={24} md={16}>
        <div>
          <h1>{item.title}</h1>
        </div>
        <p>{item.price}</p>
      </Col>
    </Row>
  );
};
export default Basketcard;
