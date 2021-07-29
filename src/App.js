import "./styles.css";
import { info } from "./data.js";
import { useState, useEffect } from "react";

export default function App() {
  const [state, setState] = useState(info);
  const [count, setCount] = useState(15);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(15);

  useEffect(() => {
    window.addEventListener("scroll", addData);
    return () => {
      window.removeEventListener("scroll", addData);
    };
  });
  const addData = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight === scrollHeight) {
      console.log(scrollTop, scrollHeight, clientHeight);
      setEnd(end + 15);
    }
  };
  const displayJsx = state.map((data, index) => {
    return (
      <div className="row" key={index}>
        <div className="column">{data.name}</div>
        <div className="column">{data.age}</div>
        <div className="column">{data.gender}</div>
      </div>
    );
  });
  return (
    <div className="App">
      <h2>Infinite scroll</h2>
      <>{displayJsx.slice(start, end)}</>
    </div>
  );
}
