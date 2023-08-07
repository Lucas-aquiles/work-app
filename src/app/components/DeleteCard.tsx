import React, { useContext,useState,useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { DataContext } from "../page";


interface CardProps {
  children: {
    empresa: string;
    rol: string;
    fecha: any;
    proceso: string;
    link: string;
    delete:any
    actualization: boolean;
    setActualization: any;
  };
}
interface ChildrenData {
    empresa: string;
    rol: string;
    fecha: string;
    proceso: string;
    link: string;
  }


const DeleteCard: React.FC<CardProps> = ({ children }) => {
    

    const dataGeneral = useContext(DataContext);
    const [auxData, setAuxData] = useState<ChildrenData[]>(dataGeneral || []); // Inicializar con un array vacío si dataGeneral es null

useEffect(() => {
    localStorage.setItem("myData", JSON.stringify(auxData));
  }, [auxData]);

    function onChangeDelete(){
       const result=  dataGeneral?.filter((e)=> e.link !== children.link )
        setAuxData( result!);
        children.setActualization(!children.actualization)
        
    }


    return (
      <div className=" w-1/5 sm:w-1/6 md:w-1/5 lg:w-1/4 text-sm sm:text-base md:text-sm lg:text-base">
       <button
              className=" w-20 m-5 text-2xl fa-regular fa-trash-can" onClick={onChangeDelete}
              
            ></button>
      </div>
    );

};

export default DeleteCard;
