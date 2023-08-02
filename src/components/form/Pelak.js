import React from "react";
import { MainContext } from "../../context/MainContext";
import { useContext } from "react";

function Pelak() {
  const { information } = useContext(MainContext);
  return (
    <div className="info">
      <p > پلاک:</p>
      <div className="pelak-items">
        <p>
          {`${information.third ? information.third : ""} ${
            information.second ? information.second : ""
          }${information.first ? information.first : ""} ${information.iran?information.iran:''} ${
            information.forth ? information.forth : ""
          } `}
        </p>
        <p>
          {`${information.forth1 ? information.forth1 : ""}  ${
            information.iran1 ? information.iran1 : ""
          }  ${information.third1 ? information.third1 : ""} ${
            information.second1 ? information.second1 : ""
          } ${information.first1 ? information.first1 : ""}  `}
        </p>
      </div>
    </div>
  );
}

export default Pelak;
