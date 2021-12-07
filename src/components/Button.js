import React from 'react'

const Button = ({children,textColor,bgColor}) => {
   return (
      <button className={`text-${textColor} bg-${bgColor}  font-bold py-2 px-4 cursor-pointer my-1 mx-1 border-2`}>
         {children}
      </button>
   )
}

export default Button


