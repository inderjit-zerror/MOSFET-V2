import React from "react";

const GridLine = () => {
  return (
    <div className="pointer-events-none absolute inset-0 grid grid-cols-4 px-[3vw]">
      <div className="border-l border-black/5" />
      <div className="border-l border-black/5" />
      <div className="border-l border-black/5" />
      <div className="border-l border-r border-black/5" />
    </div>
  );
};

export default GridLine;
