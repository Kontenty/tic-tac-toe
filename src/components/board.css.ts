import { style } from "@vanilla-extract/css";

export const board = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 5rem)",
  gridAutoRows: "5rem",
  gap: "1px",
  backgroundColor: "#333",
  margin: "1rem",
});

export const resetBtn = style({
  padding: "0.75rem 1.25rem",
  borderRadius: "2rem",
  backgroundColor: "#fff",
  border: "1px solid black",
});
