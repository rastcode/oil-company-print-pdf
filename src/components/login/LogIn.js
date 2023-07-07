import React from "react";
import { InputContext } from "../../context/InputContext";
import "./login.css";
import { useContext, useState } from "react";
function LogIn() {
  const [user, setUser] = useState({ user: "", pass: "" });
  const [title, setTitle] = useState("نام کاربری و رمز عبور را وارد کنید");
  const { up, setIsLogin } = useContext(InputContext);
  const userPasHandler = (e) => {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
  };
  const handelLogin = () => {
    user.user === up.u && user.pass === up.p
      ? setIsLogin(true)
      : setTitle("رمز عبور یا نام کاربری اشتباه است");
  };
  return (
    <div className="login-main-container">
      <div className="login-container">
        <p>{title}</p>
        <input
          name="user"
          type="text"
          placeholder="نام کاربری"
          value={user.user}
          onChange={(e) => userPasHandler(e)}
        />
        <input
          name="pass"
          type="password"
          placeholder="رمز عبور"
          value={user.pass}
          onChange={(e) => userPasHandler(e)}
        />
        <button className="login-btn" onClick={handelLogin}>
          ورود
        </button>
      </div>
    </div>
  );
}

export default LogIn;
