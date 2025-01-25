import { style, styleVariants } from "@vanilla-extract/css";

const shadowStyle =
  "rgb(204, 219, 232) 3px 3px 8px -1px inset, rgba(255, 255, 255, 0.5) -3px -3px 8px -1px inset";

const base = style({
  backgroundColor: "#fcfcfc",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  border: "none",
  transition: "all 0.3s ease-in-out",
  ":hover": {
    boxShadow: shadowStyle,
  },
});

export const tile = styleVariants({
  default: [base, { boxShadow: "none" }],
  active: [base, { boxShadow: shadowStyle }],
});
