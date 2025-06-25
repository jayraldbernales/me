"use client";

import useCanvasCursor from "../hooks/use-canvasCursor";

const CanvasCursor = () => {
  useCanvasCursor();

  return (
    <canvas
      className="pointer-events-none fixed inset-0"
      id="canvas"
      style={{ zIndex: 9999 }}
    />
  );
};
export default CanvasCursor;
