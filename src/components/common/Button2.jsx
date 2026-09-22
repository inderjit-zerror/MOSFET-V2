import React from "react";

//  -skew-x-[15deg]

const Button2 = ({ txt }) => {
  return (
    <button className="relative overflow-hidden flex w-fit group items-center justify-center bg-white border-2 border-white px-[2rem] py-[0.6rem]  transition-all duration-300 hover:scale-[1.03] hover:shadow-lg">
      {/* Hover Background Sweep */}
      <div className="absolute inset-0 w-0 BGRed transition-all duration-300 ease-out group-hover:w-full"></div>

      {/* Button Text */}
      <p className="relative z-10 paragraph TextRed text-[0.9rem]! font-medium! uppercase tracking-widest transition-colors duration-300 group-hover:text-white!">
        {txt}
      </p>
    </button>
  );
};

export default Button2;
