type Props = {
  clickedBy: null | number;
  id: number;
  onClick: (i: number) => void;
};

const XMarkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
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
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);

const Tile = ({ clickedBy, id, onClick }: Props) => {
  const getIcon = () => {
    if (!clickedBy) {
      return null;
    }
    return clickedBy === 1 ? <CircleIcon /> : <XMarkIcon />;
  };

  return (
    <button
      className={`tile${clickedBy ? " active" : ""}`}
      onClick={() => onClick(id)}
    >
      {getIcon()}
    </button>
  );
};

export default Tile;
