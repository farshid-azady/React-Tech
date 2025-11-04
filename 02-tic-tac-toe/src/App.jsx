import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  function handleSelectSquare() {
    setActivePlayer((currActivePlayer) =>
      currActivePlayer === "X" ? "O" : "X"
    );
  }
  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="">
            <Player initialName="player 1" symbol="X" />
            <Player initialName="player 2" symbol="O" />
            
          </ol>
          <GameBoard onSelectSquare={handleSelectSquare}/>
        </div>
        LOG
      </main>
    </>
  );
}

export default App;
