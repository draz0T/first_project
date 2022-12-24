import React from "react";
import "./index.css";
import { useState, useEffect } from "react";

function XoGame() {
  const FIELDS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [x, setX] = React.useState([]);
  const [o, setO] = React.useState([]);

  const generateOValue = () => {
    return Math.floor(Math.random() * 10) + 1;
  };

  const handleXValues = (data) => {
    let copy = [...x];
    copy.push(data);
    setX(copy);
  };

  const handleOValues = () => {
    console.log(generateOValue());
    const value = generateOValue();
    if (
      x.findIndex((item) => item === value) !== -1 ||
      o.findIndex((item) => item === value) !== -1
    ) {
      return handleOValues();
    } else {
      let copy = [...o];
      copy.push(value);
      return setO(copy);
    }
  };

  React.useEffect(() => {
    if (x.length > o.length) {
      handleOValues();
    }
  }, [x.length, o.length]);

  return (
    <div className="mainContainer">
      {FIELDS.map((item) => {
        if (o.findIndex((it) => it === item) > -1) {
          return <div className="o"></div>;
        }
        if (x.findIndex((it) => it === item) > -1) {
          return <div className="x"></div>;
        }
        return (
          <div className="items" onClick={() => handleXValues(item)}></div>
        );
      })}
    </div>
  );
}

export default XoGame;
