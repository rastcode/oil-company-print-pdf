import { useState } from "react";

import Form from "./components/form/Form";
import Input from "./components/input/Input";
import html2canvas from "html2canvas";
import { InputContext } from "./context/InputContext";
import LogIn from "./components/login/LogIn";
import { useEffect } from "react";
import jsPDF from "jspdf";

function App() {
  const [information, setInformation] = useState({
    username: "",
    border: "",
    identety: "",
    first: "",
    second: "",
    third: "",
    iran: "ایران",
    forth: "",
    bak1: "",
    bak2: "",
    bak3: "",
    bak4: "",
    total: "",
    arze: "",
  });
  var options = {
    min: 12,
    max: 12,
    capsWithNumbers: true,
  };

  useEffect(() => {
    const generate = require("meaningful-string");
    let pas = generate.random(options);
    setInformation({
      identety: pas,
    });
  }, []);

  const [up, setUp] = useState({
    u: "ali",
    p: "321654",
  });

  const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin")||'');
  useEffect(() => {
    localStorage.setItem("isLogin", isLogin);
  }, [isLogin]);

  const downloadImage = () => {
    const table = document.getElementById("table-container");

    html2canvas(table, { scale: 3 }).then(function (canvas) {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "p",
        unit: "in",
        format: [17.7, 9.9],
        floatPrecision: 16,
      });
      pdf.addImage(imgData, "PNG", 0, 0);

      pdf.autoPrint({ variant: "non-conform" });
      pdf.save("download.pdf");
    });
  };
  const handelBtn = () => {
    downloadImage();
  };
  return (
    <InputContext.Provider
      value={{ setInformation, information, up, setIsLogin }}
    >
      {isLogin ? (
        <div className="main-container">
          <Input />
          <div id="table-container" className="print-container">
            <Form />
          </div>

          <button className="submit-btn" onClick={handelBtn}>
            دانلود PDF
          </button>
        </div>
      ) : (
        <div className="main-login">
          <LogIn />
        </div>
      )}
    </InputContext.Provider>
  );
}

export default App;
