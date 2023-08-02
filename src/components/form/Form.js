import React from "react";
import "./Form.css";
import emza from "../../assets/image/emza.png";
import etelaat from "../../assets/image/etrlaat.png";
import naft1 from "../../assets/image/naft1.png";
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
    <div id="table-container" className="main-form-container">
      <div  className="form-container">
      <div className="border-container">
        <div className="date-container">
          <div className="tarikh">{date && date.toString().split(" ", 1)}</div>
          <div className="image-container">
            <div className="img">
              <img src={naft1} alt="" />
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
            placeholder={"نام کاربر : "}
            value={username}
          />
          <Info
            className={"info"}
            placeholder={"نقطه مرزی : "}
            value={border ? border : "پرویزخان"}
          />

          <div className="info1">
            <p>شناسه: </p>

            <p className="khareji">{identety}</p>
            <p className="tranship">ترانشیپپ ورودی</p>
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
        <div className="warning-container"><div className="etelaat"><img src={etelaat} alt="" /></div></div>
        <div className="signatuare-container">
          <div className="sign-area"><div className="emza"><img src={emza} alt="" /></div></div>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Form;
