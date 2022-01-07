import "./Footer.scss";
import logoImg from "../../img/logo.PNG";
import instagramlogo from "../../img/Instagram_icon.png";
import telegramicon from "../../img/telegramicon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div className="imglogo">
          <img src={logoImg} alt="" />
        </div>
        <div
          style={{
            border: "1px solid #eee",
            width: "95%",
            margin: "auto",
          }}
        ></div>
        <div className="footericon">
          <span>
            <img src={telegramicon} />
          </span>
          <span>
            <img src={instagramlogo} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
