import React, { ReactNode } from "react";

interface CardProps {
  children: {
    empresa: string;
    rol: string;
    fecha: any;
    proceso: string;
    link: string;
  };
}

const Card: React.FC<CardProps> = ({ children }) => {
  
    return (
      <div className="h-12 w-full bg-zinc-400	  flex flex-row m-2 justify-around items-center">
        <h2 className="w-1/5 sm:w-1/6 md:w-1/5 lg:w-1/4 text-sm sm:text-base md:text-sm lg:text-base">
          {children.empresa}
        </h2>
        <h2 className="w-1/5 sm:w-1/6 md:w-1/5 lg:w-1/4 text-sm sm:text-base md:text-sm lg:text-base">
          {children.rol}
        </h2>
        <h2 className="w-1/5 sm:w-1/6 md:w-1/5 lg:w-1/4 text-sm sm:text-base md:text-sm lg:text-base">
          {children.fecha}
        </h2>
        <h2 className="w-1/5 sm:w-1/6 md:w-1/5 lg:w-1/4 text-sm sm:text-base md:text-sm lg:text-base">
          {children.proceso}
        </h2>
        <h2 className="overflow-x-auto w-1/4 sm:w-1/6 md:w-1/5 lg:w-1/4 text-sm sm:text-base md:text-sm lg:text-base cursor-pointer">
          {children.link}
        </h2>
      </div>
    );

};

export default Card;
