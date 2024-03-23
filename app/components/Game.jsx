'use client';

import { useState } from "react";

import Splash from "./Splash";
import Grid from "./Grid";


export default function Game() {
  const [fadeIn, setFadeIn] = useState(false);
  const [wrongGuess, setWrongGuess] = useState(false);
  const [randomIndices] = useState([2, 4]);

  const startGame = function() {
    console.log('start game');
  };

  return (
    <main className="h-screen w-screen">
      <Splash startGame={startGame} />
      <div className="w-full h-full px-4 flex flex-col justify-start items-start">
        Game
        <section>
          <Grid fadeIn={fadeIn} wrongGuess={wrongGuess} randomIndices={randomIndices.sort()} />
        </section>
      </div>
    </main>
  );
}
