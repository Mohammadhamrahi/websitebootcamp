import { Button, Input, Tooltip, Row, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./style.scss";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const searchbox = () => {
  return (
    <div>
      <input
        placeholder="...جستوجو کنید"
        style={{ textAlign: "right", width: 350, height: 40 }}
        class="icon"
      ></input>
    </div>
  );
};

export default searchbox;
