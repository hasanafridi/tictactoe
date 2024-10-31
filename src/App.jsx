import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
  const [gameHistory, setGameHistory] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameHistory((prevGameHistory) => {
      let currentSquare = "X";

      if (prevGameHistory.length > 0 && prevGameHistory[0].player === "X") {
        currentSquare = "O";
      }
      const updatedGameHistory = [
        { square: { rowIndex, colIndex }, player: currentSquare },
        ...prevGameHistory,
      ];
      return updatedGameHistory;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          gameHistory={gameHistory}
        />
      </div>
      <Log gameHistory={gameHistory} />
    </main>
  );
}

export default App;
