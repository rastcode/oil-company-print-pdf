import React from "react";
import "./Form.css";
import naft from "../../assets/image/naft.png";
import { InputContext } from "../../context/InputContext";
import { useContext } from "react";

function Form() {
  const { information, setInformation } = useContext(InputContext);
  const {
    username,
    border,
    identety,
    bak1,
    bak2,
    bak3,
    bak4,
    arze,
    first,
    second,
    third,

    forth,
  } = information;

  let totaly =
    parseInt(information.bak1) +
    parseInt(information.bak2) +
    parseInt(information.bak3) +
    parseInt(information.bak4);

  return (
    <div id="table-container" className="form-container">
      <div className="border-container">
        <div className="date-container">
          <div className="tarikh">1399/2/5</div>
          <div className="image-container">
            <div className="img">
              <img src={naft} alt="" />
            </div>
          </div>
          <div className="tarikh">14:56</div>
        </div>
        <div className="company-name">شرکت ملی پخش فراورده های نفتی</div>
        <div className="info-container">
          <div className="info">
            <p>نام کاربری :</p>
            <p>{username}</p>
          </div>
          <div className="info">
            <p>نقطه مرزی :</p>
            <p>{border}</p>
          </div>
          <div className="info">
            <p>شناسه :</p>
            <p>{identety}</p>
          </div>
          <div className="info">
            <p>پلاک :</p>
            <div className="pelak-items">
              <p>
                {third ? `${third} ${second}${first} ${"ایران"} ${forth} ` : ""}
              </p>
              <p>
                {third
                  ? `${forth}  ${"ایران"}  ${third} ${second} ${first}  `
                  : ""}
              </p>
            </div>
          </div>
        </div>
        <div className="gas-container">
          <div className="baks">
            <div className="bak">
              <p>باک 1 :</p>
              <p>{bak1}</p>
            </div>
            <div className="bak">
              <p>باک 2 :</p>
              <p>{bak2}</p>
            </div>
          </div>
          <div className="baks">
            <div className="bak">
              <p>باک 3 :</p>
              <p>{bak3}</p>
            </div>
            <div className="bak">
              <p>باک 4 :</p>
              <p>{bak4}</p>
            </div>
          </div>
          <div className="baks">
            <div className="bak">
              <p>عرضه :</p>
              <p>{arze}</p>
            </div>
            <div className="bak">
              <p>حجم کل :</p>
              <p>{` ${totaly}Lit `}</p>
            </div>
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
