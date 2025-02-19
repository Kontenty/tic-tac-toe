import { useState } from "react";
import Tile from "./Tile";
import { board, resetBtn } from "./board.css";

interface TileI {
  clickedBy: null | string;
  id: number;
  color?: string;
}

const initialTiles = (): TileI[] =>
  [...Array(9).keys()].map((key) => ({
    clickedBy: null,
    id: key,
  }));

const checkConsecutive = (arr: number[], i: number, increment: number) => {
  const next1 = arr[i] + increment;
  const next2 = arr[i] + 2 * increment;
  if (arr.includes(next1) && arr.includes(next2)) {
    if (increment === 1) {
      return arr[i] % 3 === 0;
    }
    return true;
  }
  return false;
};

const checkWinner = (board: TileI[], player: string) => {
  const moves = board.filter((t) => t.clickedBy === player).map((t) => t.id);
  if (moves.length < 3) {
    return false;
  }

  for (let i = 0; i < moves.length - 2; i++) {
    if (
      checkConsecutive(moves, i, 1) ||
      checkConsecutive(moves, i, 2) ||
      checkConsecutive(moves, i, 3) ||
      checkConsecutive(moves, i, 4)
    )
      return true;
  }
  return false;
};

const Board = () => {
  const [tiles, setTiles] = useState(() => initialTiles());
  const [activePlayer, setActivePlayer] = useState("o");
  const [isWinner, setIsWinner] = useState(false);

  const handleClick = (i: number) => {
    if (isWinner) {
      return;
    }
    const newTiles = [...tiles];
    newTiles[i].clickedBy = activePlayer;
    const isWin = checkWinner(newTiles, activePlayer);
    setTiles(newTiles);
    setActivePlayer(activePlayer === "x" ? "o" : "x");
    if (isWin) {
      setIsWinner(true);
    }
  };

  const handleReset = () => {
    setActivePlayer("o");
    setTiles(initialTiles());
    setIsWinner(false);
  };

  return (
    <>
      <div className={board}>
        {tiles.map((tile) => (
          <Tile
            key={tile.id}
            clickedBy={tile.clickedBy}
            onClick={() => handleClick(tile.id)}
          />
        ))}
      </div>
      <button className={resetBtn} onClick={handleReset}>
        Reset
      </button>
    </>
  );
};

export default Board;
