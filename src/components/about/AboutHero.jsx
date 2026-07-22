// import React from "react";
// import GridLine from "../common/GridLine";

// const AboutHero = () => {
//   return (
//     <div className="w-full h-svh flex justify-center items-center relative BGTint pt-[8vh] pb-[4vh] px-[3vw]">
//       <GridLine />

//       <div className="w-full h-full overflow-hidden relative flex items-end p-10">
//         <img
//           src="https://images.unsplash.com/photo-1714703394123-73990ecd0d7c?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt="IMG"
//           className="w-full h-full object-cover object-bottom absolute top-0 left-0 z-1"
//         />

//         <h1 className="heading1 text-[5rem]! text-[#FBFBF7] relative z-20">
//           MOSFET is an advanced <br />
//           automotive technology company.
//         </h1>

//          <div className="absolute inset-0 bg-gradient-to-t from-red-600/60 via-red-600/0 to-transparent z-10" />
//       </div>
//     </div>
//   );
// };

// export default AboutHero;

import React from "react";
import GridLine from "../common/GridLine";

const AboutHero = () => {
  return (
    <div className="w-full h-svh flex justify-center items-center relative BGTint pt-[8vh] pb-[4vh] px-[4vw] sm:px-[3vw]">
      <GridLine />

      <div className="w-full h-full overflow-hidden relative flex items-end p-4 sm:p-6 md:p-10">
        <img
          src="https://images.unsplash.com/photo-1714703394123-73990ecd0d7c?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="IMG"
          className="w-full h-full object-cover object-bottom absolute top-0 left-0 z-1"
        />

        <h1 className="heading1 text-[2rem]! sm:text-[2.75rem]! md:text-[4rem]! lg:text-[5rem]! text-[#FBFBF7] relative z-20 leading-[1.05]!">
         Engineering Safer, Smarter Vehicles, <br className="hidden sm:block" />
          automotive technology company.
        </h1>

         <div className="absolute inset-0 bg-gradient-to-t from-red-600/60 via-red-600/0 to-transparent z-10" />
      </div>
    </div>
  );
};

export default AboutHero;