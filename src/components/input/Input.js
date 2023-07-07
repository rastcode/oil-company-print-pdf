import React, { useContext } from "react";
import { InputContext } from "../../context/InputContext";
import "./Input.css";

function Input() {
  const { information, setInformation } = useContext(InputContext);

  const handelInput = (e) => {
    const value = e.target.value;

    setInformation({
      ...information,
      [e.target.name]: value,
    });
  };

  return (
    <div className="input-container">
      <div className="info-input">
        <form className="form-group" action="">
          <input
            className="inpute"
            type="text"
            name="username"
            placeholder="نام کاربری"
            value={information.username}
            onChange={(e) => handelInput(e)}
          />
          <input
            className="inpute"
            type="text"
            name="border"
            placeholder=" نقطه مرزی"
            value={information.border}
            onChange={(e) => handelInput(e)}
          />
          <input
            className="inpute"
            type="text"
            name="identety"
            placeholder=" شناسه"
            value={information.identety}
            onChange={(e) => handelInput(e)}
          />
          <div className="pelake">
            <input
              className="pelak"
              type="number"
              name="forth"
              placeholder=" 29"
              value={information.forth}
              onChange={(e) => handelInput(e)}
            />
            <input
              className="pelak"
              type="text"
              name="iran"
              placeholder=" ایران"
              value={information.iran}
              onChange={(e) => handelInput(e)}
            />
            <input
              className="pelak"
              type="number"
              name="third"
              placeholder=" 777"
              value={information.third}
              onChange={(e) => handelInput(e)}
            />
            <input
              className="pelak"
              type="text"
              name="second"
              placeholder=" ب"
              value={information.second}
              onChange={(e) => handelInput(e)}
            />
            <input
              className="pelak"
              type="number"
              name="first"
              placeholder=" 11"
              value={information.first}
              onChange={(e) => handelInput(e)}
            />
          </div>

          <input
            className="inpute"
            type="number"
            name="bak1"
            placeholder=" باک 1"
            value={information.bak1}
            onChange={(e) => handelInput(e)}
          />
          <input
            className="inpute"
            type="number"
            name="bak2"
            placeholder=" باک 2"
            value={information.bak2}
            onChange={(e) => handelInput(e)}
          />
          <input
            className="inpute"
            type="number"
            name="bak3"
            placeholder=" باک 3"
            value={information.bak3}
            onChange={(e) => handelInput(e)}
          />
          <input
            className="inpute"
            type="number"
            name="bak4"
            placeholder=" باک 4"
            value={information.bak4}
            onChange={(e) => handelInput(e)}
          />

          <input
            className="inpute"
            type="text"
            name="arze"
            placeholder=" عرضه"
            value={information.arze}
            onChange={(e) => handelInput(e)}
          />
        </form>
      </div>
    </div>
  );
}

export default Input;
