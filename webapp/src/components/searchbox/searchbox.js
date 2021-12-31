import { Button, Input, Tooltip, Row, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./style.scss";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const searchbox = () => {

  // const [query, setQuery] = useState();
  // const [datasearch, setDatasearch] = useState([]);
  // const searchres = useSelector((state) => state.searchreducer.searchdata);

  // useEffect(() => {
  //   axios.get(`https://fakestoreapi.com/products`)
  //   .then(res=>)
  // });
  const { Search } = Input;
  return (
    <div>
      <Search placeholder="input search text" enterButton allowClear />
    </div>
  );
};

export default searchbox;
