import { useState } from "react";
import Tile from "./Tile";

interface TileI {
  clickedBy: null | number;
  id: number;
}

const initial: TileI[] = [...Array(10).keys()].map((key) => ({
  clickedBy: null,
  id: key,
}));

const Board = () => {
  const [tiles, setTiles] = useState(initial);
  const [activePlayer, setActivePlayer] = useState(1);

  const handleClick = (i: number) => {
    setTiles((state) => {
      state[i].clickedBy = activePlayer;
      return state;
    });
    setActivePlayer((state) => (state % 2) + 1);
  };

  return (
    <div className="board">
      {tiles.map((tile) => (
        <Tile
          key={tile.id}
          clickedBy={tile.clickedBy}
          id={tile.id}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Board;
