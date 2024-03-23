'use client';

import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

const style = "flex flex-col justify-evenly items-center p-4 absolute top-[50%] left-[50%] "
  + "translate-x-[-50%] translate-y-[-50%] "
  + "h-5/6 w-2/3 max-w-[400px] "
  + "bg-white rounded-lg shadow-md shadow-slate-500 "
  + "transition ease-out delay-150 duration-500";

export default function Splash() {
  const [openSplash, setOpenSplash] = useState(true);

  return (
    <section className={openSplash ? style : "opacity-0"}>
      <CloseIcon
        aria-label="close"
        onClick={() => setOpenSplash(false)}
        sx={{
          position: 'absolute',
          right: 16,
          top: 16,
          color: (theme) => theme.palette.grey[500],
        }}
      />
      <h1 className="text-center text-3xl font-bold">Letter Ladder</h1>
      <div className="flex-col items-center justify-center text-base text-gray-500 w-5/6">
        <h4 className="text-xl mb-2">How to play:</h4>
        <ul className="list-disc pl-4">
          <li className="mb-2">Try to complete the ladder by guessing each word as quickly as possible.</li>
          <li className="mb-2">The first word has two letters revealed to help you get started.</li>
          <li className="mb-2">You can ask for a hint if you need an extra clue.</li>
          <li className="mb-2">Each word has only one letter changed from the word above.</li>
          <li className="mb-2">If you make more than three incorrect guesses, you lose the game!</li>
        </ul>
      </div>
      <footer className="flex flex-col justify-center items-center mb-4">
        <button
          onClick={() => setOpenSplash(false)}
          className="transition rounded-md px-8 py-2 text-white bg-green-700 hover:bg-green-600"
        >
          Start
        </button>
      </footer>
    </section>
  );
}
