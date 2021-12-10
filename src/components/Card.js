import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";

const Card = ({ tour, deleteTours }) => {
   const { id, image, info, price, name } = tour;

   //toggle the state of the text
   const [moreInfo, setMoreInfo] = useState(false);
   //truncate the text when false
   const more = moreInfo ? info : `${info.substring(0, 200)}...`;
   const nameMeSomething = moreInfo ? "show less" : "read more ";

   return (
      <article className="w-full  rounded-sm overflow-hidden mb-8">
         <div style={{ width: "100%", height: "20rem", position: "relative" }}>
            <Image src={image} layout="fill" objectFit="cover" />
         </div>

         <div className=" bg-white shadow-lg">
            <div className="px-6 py-4">
               <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-blue-900">{name}</h4>
                  <h4 className="bg-blue-300 text-blue-900 font-bold rounded py-1 px-2">${price}</h4>
               </div>
               <p className="text-gray-700 text-base">
                  {more}
                  <button className="moreLess" onClick={() => setMoreInfo(!moreInfo)}>
                     {nameMeSomething}
                  </button>
               </p>

               <Button handleClick={() => deleteTours(id)} textColor="text-red-800" bgColor="bg-transparent">
                  Not Interested
               </Button>
            </div>
         </div>
      </article>
   );
};

export default Card;
