import React  from "react";
import DeleteCard from "./DeleteCard";

interface CardProps {
  children: {
    empresa: string;
    rol: string;
    fecha: any;
    proceso: string;
    link: string;
    delete:any;
    actualization: boolean;
    setActualization: any
    
  };
}

const Card: React.FC<CardProps> = ({ children }) => {
  
    return (
      <div className="h-12 w-full bg-slate-50 rounded-xl	  flex flex-row m-2 justify-around items-center text-palabra">
        <h2 className=" font-medium	 w-1/5 sm:w-1/6 md:w-1/5 lg:w-1/4 text-sm sm:text-base md:text-sm lg:text-base pl-5">
          {children.empresa}
        </h2>
        <h2 className=" font-medium w-1/5 sm:w-1/6 md:w-1/5 lg:w-1/4 text-sm sm:text-base md:text-sm lg:text-base ">
          {children.rol}
        </h2>
        <h2 className=" font-medium w-1/5 sm:w-1/6 md:w-1/5 lg:w-1/4 text-sm sm:text-base md:text-sm lg:text-base">
          {children.fecha}
        </h2>
        <h2 className="font-medium w-1/5 sm:w-1/6 md:w-1/5 lg:w-1/4 text-sm sm:text-base md:text-sm lg:text-base">
          {children.proceso}
        </h2>
        <h2 className=" font-medium overflow-x-auto w-1/4 sm:w-1/6 md:w-1/5 lg:w-1/4 text-sm sm:text-base md:text-sm lg:text-base cursor-pointer">
          {children.link}
        </h2>
        {  children.delete ? <h2 className=" font-medium w-1/6  pl-8 sm:w-1/6 md:w-1/5 lg:w-1/4 text-sm sm:text-base md:text-sm lg:text-base">
          {children.delete}
        </h2>: <DeleteCard 
        
      children={children}
        />
        
        }
        
      </div>
    );

};

export default Card;
