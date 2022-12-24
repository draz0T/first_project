import React from "react";
// import index.css from "./RockPaperScissors/index.css"

function Button({ type, onClick }) {
  return (
    <button
      className="RockPapperScissors-buttons"
      onClick={() => onClick(type)}
    >
      {type}
    </button>
  );
}

export default Button;
