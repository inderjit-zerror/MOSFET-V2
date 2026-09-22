import React from "react";
//  -skew-x-[15deg]

const Button = ({ txt }) => {
  return (
    <button className="relative overflow-hidden flex w-fit group items-center justify-center BGRed -skew-x-[15deg] border-2 border-red-500 px-[2rem] py-[0.6rem] transition-all duration-300 hover:scale-[1.03] hover:shadow-lg">
      {/* Hover Background Sweep */}
      <div className="absolute inset-0 w-0 bg-black transition-all duration-300 ease-out group-hover:w-full"></div>

      {/* Button Text */}
      <p className="relative z-10 paragraph font-medium! text-[0.9rem]! text-white! uppercase tracking-widest">
        {txt}
      </p>
    </button>
  );
};

export default Button;
