import { tile, svg } from "./tile.css";

interface Props {
  clickedBy: null | string;
  onClick: () => void;
}

const XMarkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={svg}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>
);

const CircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={svg}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);

const iconsDict: Record<string, JSX.Element> = {
  o: <CircleIcon />,
  x: <XMarkIcon />,
};

const Tile = ({ clickedBy, onClick }: Props) => {
  const getIcon = () => (clickedBy ? iconsDict[clickedBy] ?? null : null);

  return (
    <button
      className={clickedBy ? tile.active : tile.default}
      onClick={onClick}
    >
      {getIcon()}
    </button>
  );
};

export default Tile;
