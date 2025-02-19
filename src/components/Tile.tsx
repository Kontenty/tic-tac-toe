import { createElement } from "react";
import { tile, svg } from "./tile.css";

interface Props {
  clickedBy: null | string;
  color?: string;
  onClick: () => void;
}

const XMarkIcon = ({ color }: Pick<Props, "color">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={color ? svg.red : svg.default}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>
);

const CircleIcon = ({ color }: Pick<Props, "color">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={color ? svg.red : svg.default}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);

const iconsDict = {
  o: CircleIcon,
  x: XMarkIcon,
};

const Icon = ({ clickedBy, color }: Partial<Props>) => {
  if (!clickedBy) {
    return null;
  }
  return createElement(iconsDict[clickedBy as keyof typeof iconsDict], {
    color,
  });
};

const Tile = ({ clickedBy, color, onClick }: Props) => {
  return (
    <button
      className={clickedBy ? tile.active : tile.default}
      onClick={onClick}
    >
      <Icon clickedBy={clickedBy} color={color} />
    </button>
  );
};

export default Tile;
