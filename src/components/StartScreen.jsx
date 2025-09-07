import React from "react";
import styles from "./styles.module.css"

const StartScreen = ({ onSelect }) => {
  return (
    <div className="bg-gray-900 text-white h-screen flex flex-col  items-center ">
      <h1 className={`font-bold mx-[150px] mt-40 text-center text-8xl ${styles.neonText} ${styles.neonBorder}`}  > Tic-Tac-Toe </h1>
      <p className="mt-20 mb-7 text-3xl italic " >Pick game mode</p>
      <div className="flex justify-center gap-5">
        <button className={`${styles.neonBorder} w-[120px] cursor-pointer`} onClick={() => onSelect("singl")}> 1 Player</button>
        <button className={`${styles.neonBorder} w-[120px] cursor-pointer`} onClick={() => onSelect("multi")}> 2 Players</button>
      </div>
    </div>
  );
};

export default StartScreen;
