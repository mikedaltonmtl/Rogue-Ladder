'use client';

import { useState } from "react";

export default function Game() {
  
  const [fadeIn, setFadeIn] = useState(false);
  const [wrongGuess, setWrongGuess] = useState(false);
  const [randomIndices] = useState([2, 4]);

  return (
    <>
      <div className="w-full h-full px-4 flex flex-col justify-start items-start">
        Game
      </div>
    </>
  );
}
