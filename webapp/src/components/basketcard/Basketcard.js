import {  Row, Col } from "antd";
const Basketcard = ({ item }) => {
  return (
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
