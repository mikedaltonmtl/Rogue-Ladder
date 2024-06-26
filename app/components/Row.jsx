import classnames from 'classnames';

export default function Row({ firstAnswer, guess, guessed, wrongGuess, randomIndices, step }) {
  const rowFormat = classnames(
    "flex justify-center items-center w-[52px] h-[52px] m-1 text-center uppercase font-extrabold text-[2em]",
    {
      "flipRow": guessed,
      "border-2 border-gray-500": !guessed,
      "wrongGuess": wrongGuess
    }
  );

  return (
    <div className="flex justify-center">
      {guess.split('').map((letter, i) => {
        if (step === 0 && randomIndices.includes(i)) {
          return (
            <div key={i} className={`${rowFormat} bg-letter-correct border-letter-correct text-white`}>
              {firstAnswer[i]}
            </div>
          );
        }
        return (
          <div key={i} className={rowFormat}>
            {letter}
          </div>
        );
      })}
    </div>
  );
}
