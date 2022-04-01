import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState("");
  const [clear, setClear] = useState([]);

  const serial = (e) => {
    document.getElementsByClassName("write");
    setCount(e.target.value);
  };
  const Func = (elem) => {
    if (elem.keyCode === 13) {
      setClear((value) => {
        return [...value, count];
      });
    }
    setClear((value) => {
      return [...value, count];
    });
    setCount("");
  };

  return (
    <>
      <div className="set">
      <div className="merge">
    <h1>TODO APP</h1>
        <div className="fake">
          <input
            type="text"
            placeholder="Search"
            id="input"
            onChange={serial}
            value={count}
          />
          <input type="button" value={"Send"} onClick={Func} id="btn" />
        </div>
        </div>
        <div className="main">
          {clear.map((val, index) => {
            return (
              <p className="write" id="index" key={index}>
                {val}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default App;
