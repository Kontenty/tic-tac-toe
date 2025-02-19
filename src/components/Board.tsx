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

const checkWinner = (
  board: TileI[],
  player: string
): { win: boolean; numbers?: number[] } => {
  const moves = board.filter((t) => t.clickedBy === player).map((t) => t.id);
  const notWon = { win: false };
  if (moves.length < 3) {
    return notWon;
  }

  for (let i = 0; i < moves.length - 2; i++) {
    const first = moves[i];
    if (checkConsecutive(moves, i, 1)) {
      return { win: true, numbers: [first, first + 1, first + 2] };
    }
    if (first === 2 && checkConsecutive(moves, i, 2)) {
      return { win: true, numbers: [first, first + 2, first + 4] };
    }
    if (checkConsecutive(moves, i, 3)) {
      return { win: true, numbers: [first, first + 3, first + 6] };
    }
    if (checkConsecutive(moves, i, 4)) {
      return { win: true, numbers: [first, first + 4, first + 8] };
    }
  }
  return notWon;
};

const Board = () => {
  const [tiles, setTiles] = useState(() => initialTiles());
  const [activePlayer, setActivePlayer] = useState("o");
  const [isWinner, setIsWinner] = useState(false);

  const handleClick = (i: number) => {
    if (isWinner) {
      return;
    }
    let newTiles = [...tiles];
    newTiles[i].clickedBy = activePlayer;
    const { win, numbers } = checkWinner(newTiles, activePlayer);
    setTiles(newTiles);
    if (win) {
      setIsWinner(true);
      newTiles = newTiles.map((tile) => {
        if (tile.clickedBy === activePlayer && numbers?.includes(tile.id)) {
          return { ...tile, color: "red" };
        }
        return tile;
      });
    }
    setTiles(newTiles);
    setActivePlayer(activePlayer === "x" ? "o" : "x");
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
            color={tile.color}
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
