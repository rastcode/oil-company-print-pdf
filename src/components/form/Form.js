import React from "react";
import "./Form.css";
import naft from "../../assets/image/naft.png";
import { MainContext } from "../../context/MainContext";
import { useContext } from "react";
import Info from "./Info";
import Pelak from "./Pelak";
import Bak from "./Bak";

function Form() {
  const { information, date } = useContext(MainContext);
  const {
    username,
    border,
    identety,
    bak1,
    bak2,
    bak3,
    bak4,
    arze,

    total,
  } = information;

  return (
    <div id="table-container" className="form-container">
      <div className="border-container">
        <div className="date-container">
          <div className="tarikh">{date && date.toString().split(" ", 1)}</div>
          <div className="image-container">
            <div className="img">
              <img src={naft} alt="" />
            </div>
          </div>
          <div className="tarikh">
            {date && date.toString().split(" ").slice(1)}
          </div>
        </div>
        <div className="company-name">شرکت ملی پخش فراورده های نفتی</div>
        <div className="info-container">
          <Info
            className={"info"}
            placeholder={"نام کاربری : "}
            value={username}
          />
          <Info
            className={"info"}
            placeholder={"نقطه مرزی : "}
            value={border ? border : "پرویزخان"}
          />

          <div className="info">
            <p>شناسه: </p>
            <div className="identety">
              <p>{identety}</p>
              <p className="tranship">ترانشیپ ورودی</p>
            </div>
          </div>
          <Pelak className={"info"} placeholder={"پلاک :"} />
        </div>
        <div className="gas-container">
          <div className="baks">
            <Bak name={"باک 1 :"} value={bak1} />
            <Bak name={"باک 2 :"} value={bak2} />
          </div>
          <div className="baks">
            <Bak name={"باک 3 :"} value={bak3} />
            <Bak name={"باک 4 :"} value={bak4} />
          </div>
          <div className="baks">
            <Bak name={"عرضه :"} value={arze} />
            <Bak name={"حجم کل :"} value={total ? ` ${total}Lit ` : "0"} />
          </div>
        </div>
        <div className="warning-container">اطلاعات ارسال شد</div>
        <div className="signatuare-container">
          <div className="sign-area">مهر وامضا</div>
        </div>
      </div>
    </div>
  );
}

export default Form;
