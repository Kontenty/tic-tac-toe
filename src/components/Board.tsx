import { useState } from "react";
import Tile from "./Tile";
import { board, resetBtn } from "./board.css";

interface TileI {
  clickedBy: null | number;
  id: number;
}

const initialTiles = (): TileI[] =>
  [...Array(9).keys()].map((key) => ({
    clickedBy: null,
    id: key,
  }));

const Board = () => {
  const [tiles, setTiles] = useState(() => initialTiles());
  const [activePlayer, setActivePlayer] = useState(1);

  const handleClick = (i: number) => {
    setTiles((state) => {
      state[i].clickedBy = activePlayer;
      return state;
    });
    setActivePlayer((state) => (state % 2) + 1);
  };

  const handleReset = () => {
    setActivePlayer(1);
    setTiles(initialTiles());
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
