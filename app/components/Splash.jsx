

export default function Splash({ setShowModal }) {

  return (
    <container className="h-screen w-screen bg-black bg-opacity-80 flex justify-center items-center">
      <section className="mx-5 flex flex-col justify-center fixed gap-8 top-20 bg-white py-7 px-7 rounded-xl shadow-2xl shadow-gray-800">
        <h1 className="flex justify-center text-3xl font-boldmb-10">Letter Ladder</h1>
        <div className="flex-row justify-center text-base text-gray-500">
          How to play:
          <ul className="list-disc pl-4">
            <li>Play daily to guess words based on hints</li>
            <li>Start with two letters revealed for the first word</li>
            <li>Change one letter from the current word to guess the next word</li>
            <li>Ask for a hint if you need an extra clue</li>
            <li>Make more than three mistakes and the game will end</li>
          </ul>
        </div>
        <footer className="flex flex-col justify-center items-center gap-2 mb-8 text-lg text-gray-800">
          <h4>Are you ready to play?</h4>
          <button onClick={() => setShowModal(false)} className="transition rounded-full px-8 py-2 text-white bg-green-700 hover:bg-green-600 active:bg-green-800">Start</button>
        </footer>
      </section>
    </container>
  );
}