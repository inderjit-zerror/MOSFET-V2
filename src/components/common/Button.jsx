import React from "react";

const Button = ({txt}) => {
  return (
    <button className="relative flex w-fit group items-center gap-[0.6rem] BGRed px-[1rem] py-[0.5rem] text-[0.8rem] tracking-tighter font-medium  transition duration-300 ">
      <span className="h-[0.45rem] w-[0.45rem] BGTint transition-all duration-150 ease-in group-hover:rounded-full group-hover:scale-[0.8]"></span>
      <p className="paragraph TextTint text-[0.9rem]!">{txt}</p> 
      <span className="absolute -left-[0.25rem] -top-[0.25rem] transition-all duration-150 ease-in group-hover:-left-[0.35rem] group-hover:-top-[0.35rem] h-[0.40rem] w-[0.40rem] border-l-[0.11rem] border-t-[0.11rem] border-[#EE2F2E]"></span>
      <span className="absolute -left-[0.25rem] -bottom-[0.25rem] transition-all duration-150 ease-in group-hover:-left-[0.35rem] group-hover:-bottom-[0.35rem] -rotate-90 h-[0.40rem] w-[0.40rem] border-l-[0.11rem] border-t-[0.11rem] border-[#EE2F2E]"></span>
      <span className="absolute -top-[0.25rem] -right-[0.25rem] transition-all duration-150 ease-in group-hover:-top-[0.35rem] group-hover:-right-[0.35rem] -rotate-90 h-[0.40rem] w-[0.40rem] border-b-[0.11rem] border-r-[0.11rem] border-[#EE2F2E]"></span>
      <span className="absolute -bottom-[0.25rem] -right-[0.25rem] transition-all duration-150 ease-in group-hover:-bottom-[0.35rem] group-hover:-right-[0.35rem] h-[0.40rem] w-[0.40rem] border-b-[0.11rem] border-r-[0.11rem] border-[#EE2F2E]"></span>
    </button>
  );
};

export default Button;
