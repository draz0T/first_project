import React, { useEffect } from "react";
import "./index.css";
import "./../Clock/app";

function Clock() {
  const [clock, setClock] = React.useState({ sec: 55, min: 59, hour: 11 });

  const handleClock = () => {
    let copy = { ...clock };

    if (clock.sec === 59) {
      copy.sec = 0;
      if (clock.min === 59) {
        copy.min = 0;
        copy.hour = clock.hour + 1;
      } else {
        copy.min = clock.min + 1;
      }
    } else {
      copy.sec = clock.sec + 1;
    }

    setClock(copy);
  };

  useEffect(() => {
    setTimeout(() => {
      handleClock();
    }, 1000);
  }, [clock.sec]);

  return (
    <div className="clock">
      <div
        className="secondsHandle"
        style={{ transform: `rotate(${clock.sec * 6}deg)` }}
      ></div>
      <div
        className="minutesHandle"
        style={{ transform: `rotate(${clock.min * 6}deg)` }}
      ></div>
      <div
        className="hoursHandle"
        style={{ transform: `rotate(${clock.hour * 30}deg)` }}
      ></div>
      {/* <div className="dot"></div> */}
      <span className="twelve">12</span>
      <span className="one">1</span>
      <span className="two">2</span>
      <span className="three">3</span>
      <span className="four">4</span>
      <span className="five">5</span>
      <span className="six">6</span>
      <span className="seven">7</span>
      <span className="eight">8</span>
      <span className="nine">9</span>
      <span className="ten">10</span>
      <span className="eleven">11</span>
    </div>
  );
}

export default Clock;
