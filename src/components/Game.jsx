import Board from "./Board";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const Game = ({ gameMode }) => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;
  const playersText =
    gameMode === "multi" ? "2 Players" : "Your play with the computer";

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  function computerMove() {
    const freeCells = currentSquares
      .map((cell, index) => (cell === null ? index : null))
      .filter((index) => index != null);
    if (freeCells.length === 0) return;
    const randomIndex = freeCells[Math.floor(Math.random() * freeCells.length)];
    const nextSquares = currentSquares.slice();
    nextSquares[randomIndex] = xIsNext ? "X" : "O";
    handlePlay(nextSquares);
  }

  useEffect(() => {
    if (gameMode === "singl" && !xIsNext) {
      const timer = setTimeout(computerMove, 500);
      return () => clearTimeout(timer);
    }
  },[xIsNext, currentSquares, gameMode]);

  return (
    <div className="flex flex-col items-center gap-20 p-20 h-screen w-full bg-gray-900 text-white">
      <div>
        <h1
          className={`text-4xl w-[400px] flex justify-center ${styles.neonText} ${styles.neonBorder} `}
        >
          Tic-tac-toe
        </h1>
        <p className="mt-10 text-center italic text-xl"> {playersText} </p>
      </div>

      <div className="flex gap-20">
        <div className="w-xl">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
            gameMode={gameMode}
          />
        </div>
        <div>
          <p className="w-sm text-2xl font-bold">Hictory</p>
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  );
};

export default Game;
