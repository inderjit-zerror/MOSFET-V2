import React from "react";

const InTitle = ({ txt }) => {
  return (
    <span className="inline-block BGRed w-fit  capitalize tracking-widest px-[1.2rem] py-[0.4rem] mb-[1.5rem]">
      <p className="paragraph text-[0.8rem]! text-[#ECEEE9]! ">{txt}</p>
    </span>
  );
};

export default InTitle;
