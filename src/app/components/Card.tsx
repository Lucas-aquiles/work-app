import React, { ReactNode } from 'react';

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
    <div className="h-20 w-full  bg-slate-50 flex flex-row   justify-around  items-center">
      
    <h2> {children.empresa}  </h2> 
    <h2> {children.rol}  </h2>
    <h2> {children.fecha}  </h2> 
    <h2> {children.proceso}  </h2> 
    <h2> {children.link}  </h2> 


 

      </div>
   
  );
};

export default Card;