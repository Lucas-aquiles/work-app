"use client";
import React from "react";
import DeleteCard from "./DeleteCard";

interface ProcesoStyles {
  [proceso: string]: string;
}
interface CardProps {
  empresa: string;
  rol: string;
  fecha: any;
  proceso: string;
  link: string;
  eliminar?: string;
  actualization: boolean | any;
  setActualization: (value: boolean) => void | any;
}

const Card: React.FC<CardProps> = (props) => {
  const {
    empresa,
    rol,
    fecha,
    proceso,
    link,
    eliminar,
    actualization,
    setActualization,
  } = props;
  const procesoStyles: ProcesoStyles = {
    "Etapa del proceso": "",
    "Inicio": "bg-blue-400 text-slate-50 pl-4	mr-5 rounded-xl	",
    "Intermedio": "bg-green-500 text-slate-50 	pl-4 mr-5 rounded-xl	",
    "Avanzado": "bg-violet-500 text-slate-50 pl-4	mr-5 rounded-xl	",
  };
  
  const procesoStyleClass = procesoStyles[proceso];

  return (
    <div className="h-12 w-full bg-slate-50 rounded-xl	  flex flex-row m-2 justify-around items-center text-palabra">
      <h2 className=" font-medium	 w-1/5 sm:w-1/6 md:w-1/5 lg:w-1/4 text-sm sm:text-base md:text-sm lg:text-base pl-5">
        {empresa}
      </h2>
      <h2 className=" font-medium w-1/5 sm:w-1/6 md:w-1/5 lg:w-1/4 text-sm sm:text-base md:text-sm lg:text-base ">
        {rol}
      </h2>
      <h2 className=" font-medium w-1/5 sm:w-1/6 md:w-1/5 lg:w-1/4 text-sm sm:text-base md:text-sm lg:text-base">
        {fecha}
      </h2>
      <h2 className={`font-medium w-1/5 sm:w-1/6 md:w-1/5 lg:w-1/4 text-sm sm:text-base md:text-sm lg:text-base ${procesoStyleClass}`}>
    {proceso}
  </h2>
      { link === "Link"?
       <h2 className=" pl-10 font-medium overflow-x-auto w-1/4 sm:w-1/6 md:w-1/5 lg:w-1/4 text-sm sm:text-base md:text-sm lg:text-base ">
          {link}
      </h2>
        : 
      <h2 className=" font-medium overflow-x-auto w-1/4 sm:w-1/6 md:w-1/5 lg:w-1/4 text-sm sm:text-base md:text-sm lg:text-base cursor-pointer">
        <a href={`https://${link}`} target="_blank">
          {link}
        </a>
      </h2>}


      {eliminar ? (
        <h2 className=" font-medium w-1/6  pl-8 sm:w-1/6 md:w-1/5 lg:w-1/4 text-sm sm:text-base md:text-sm lg:text-base">
          {eliminar}
        </h2>
      ) : (
        <DeleteCard
          empresa={empresa}
          rol={rol}
          fecha={fecha}
          proceso={proceso}
          link={link}
          actualization={actualization}
          setActualization={setActualization}
        />
      )}
    </div>
  );
};

export default Card;
