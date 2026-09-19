import React from "react";

const Button = ({ txt }) => {
  return (
    <button className="relative flex w-fit group items-center justify-center BGRed px-[2rem] py-[0.6rem] -skew-x-[15deg] transition duration-300 ">
      <p className="paragraph font-medium! text-[0.9rem]! text-white! uppercase tracking-widest ">{txt}</p>
    </button>
  );
};

export default Button;
