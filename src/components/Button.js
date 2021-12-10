import React from "react";

const Button = ({ children, textColor, bgColor, handleClick }) => {
   return (
      <button
         onClick={handleClick}
         className={`${textColor} ${bgColor} block font-bold cursor-pointer mx-auto mt-4 mb-4 py-1 px-2 w-48 tracking-widest rounded border border-solid border-red-500 `}>
         {children}
      </button>
   );
};

export default Button;
