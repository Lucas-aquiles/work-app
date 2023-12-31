"use client"
import React, { useState, useEffect, createContext } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Card from './components/Card';
import DataComponent from './components/DataComponent';
import { DataContext } from './context/DataContext';

const titles = {
  empresa: "Empresa",
  rol: "Rol",
  fecha: "Fecha",
  proceso: "Etapa del proceso",
  link: "Link",
  eliminar:"Eliminar",
 

};

interface ChildrenData {
  empresa: string;
  rol: string;
  fecha: string;
  proceso: string;
  link: string;
  eliminar?:string;
  actualization?: boolean;
  setActualization?: (value: boolean) => void;
  
  
}




const Page: React.FC = () => {
  const [data, setData] = useState<ChildrenData[] | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [actualization, setActualization] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem('myData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, [actualization]);

  function onchange() {
    setOpenModal(!openModal);
    setIsActive(!isActive);

  }
  const buttonClasses = isActive
    ? 'font-semibold w-12 h-12 text-3xl fa-regular fa-square-plus text-orange-400 focus:outline-none focus:text-orange-400'
    : 'font-semibold w-12 h-12 text-3xl fa-regular fa-square-plus text-blue-500 focus:outline-none focus:text-blue-500';

  return (
    <div className="min-h-screen p-10 bg-mi-color	 	 flex justify-center">
      <div className="h-full w-5/6 bg-white  rounded-xl flex flex-col p-2">  
    <div className="h-full w-full bg-mi-color flex flex-col p-5 rounded-xl">
      <h2 className="text-4xl mb-4 text-blue-700 font-medium">Dashboard</h2>
      <div className="w-full flex flex-col items-center">
        <DataContext.Provider value={data}>
        <Card
        empresa={titles.empresa}
        rol={titles.rol}
        fecha={titles.fecha}
        proceso={titles.proceso}
        link={titles.link}
        eliminar={titles.eliminar}
        actualization={actualization}
        setActualization={setActualization}
      />

          {data &&
            data.map((item) => (
              <Card
              key={item.link}
              empresa={item.empresa}
              rol={item.rol}
              fecha={item.fecha}
              proceso={item.proceso}
              link={item.link}
              actualization={actualization}
              setActualization={setActualization}
              />
            ))}
           <button className={buttonClasses} onClick={onchange}>
    </button>
          {openModal && (
            <DataComponent  

            actualization={actualization}
            setActualization={setActualization}            
            />
          )}
        </DataContext.Provider>
      </div>
    </div>
    </div>
  </div>
  );
};

export default Page;
