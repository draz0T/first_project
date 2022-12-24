import React, { useState, useEffect } from "react";
import Button from "./components";
import "C:/Users/PC/OneDrive/Desktop/prv-proekt/prv-proekt/src/components/RPS/index.css";

function RockPaperScissors() {
  const choices = [
    {
      id: 1,
      name: "rock",
      component: "Rock",
      losesTo: 2,
      winsTo: 3,
      drawsTo: 1
    },
    {
      id: 2,
      name: "paper",
      component: "Paper",
      losesTo: 3,
      winsTo: 1,
      drawsTo: 2
    },
    {
      id: 3,
      name: "scissors",
      component: "Scissors",
      losesTo: 1,
      winsTo: 2,
      drawsTo: 3
    }
  ];

  const [player, setPlayer] = useState("");
  const [computer, setComputer] = useState("");
  const [score, setScore] = useState("");

  const handlePlayer = (data) => {
    setPlayer(data);
  };

  const handleComputer = () => {
    const value = Math.floor(Math.random() * 10) - 1;
    if (value < 3) {
      return setComputer("Rock");
    }
    if (value < 6) {
      return setComputer("Paper");
    }

    return setComputer("Scissors");
  };

  const handleShowResult = () => {
    const playerChosed = choices.find((item) => item.component === player);
    const computerChosed = choices.find(
      (item) => item.component === computer
    ).id;
    if (playerChosed.winsTo === computerChosed) {
      return setScore("Win");
    }
    if (playerChosed.losesTo === computerChosed) {
      return setScore("Lose");
    }

    return setScore("Draw");
  };

  const resetGame = () => {
    setPlayer("");
    setComputer("");
    setScore("");
  };

  useEffect(() => {
    if (player !== "" && computer === "") {
      handleComputer();
    }
    if (player !== "" && computer !== "") {
      handleShowResult();
    }
  }, [player, computer]);

  console.log(player, computer);
  return (
    <div className="Choices">
      {choices.map((item) => {
        return (
          <Button
            className="RockPapperScissors-buttons"
            onClick={handlePlayer}
            type={item.component}
          ></Button>
        );
      })}
      {score !== "" && (
        <div className="after-pick">
          <div className="reset-button" onClick={() => resetGame()}>
            Reset
          </div>
          <div className="score-button">{score}</div>
        </div>
      )}
    </div>
  );
}

export default RockPaperScissors;
