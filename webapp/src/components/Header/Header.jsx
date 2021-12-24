import "./Header.scss";
import logoImg from "../../img/logo.PNG";
import { useState } from "react";
import { Modal, Button } from "antd";
import { Link } from "react-router-dom";

import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <div className="header">
      <Link to="/ModalBasketlist">
        <AiOutlineShoppingCart style={{ width: 30, height: 30 }} />
      </Link>

      <img src={logoImg} alt="" />
    </div>
  );
};

export default Header;
