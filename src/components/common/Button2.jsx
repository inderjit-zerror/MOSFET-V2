import React from "react";

const Button2 = ({ txt }) => {
  return (
    <button className="relative flex w-fit group items-center justify-center BGTint px-[2rem] py-[0.6rem] -skew-x-[15deg] transition duration-300 ">
      <p className="paragraph TextRed text-[0.9rem]! font-medium! uppercase tracking-widest ">{txt}</p>
    </button>
  );
};

export default Button2;
