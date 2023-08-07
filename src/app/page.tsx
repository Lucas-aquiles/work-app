"use client"
import React, { useState, useEffect, createContext, Dispatch, SetStateAction } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Card from './components/Card';
import DataComponent from './components/DataComponent';

const titles = {
  empresa: "Empresa",
  rol: "Rol",
  fecha: "Fecha",
  proceso: "Etapa del proceso",
  link: "Link",
  delete:"Eliminar",
  actualization: false,
  setActualization: ""

};

interface ChildrenData {
  empresa: string;
  rol: string;
  fecha: string;
  proceso: string;
  link: string;
  delete:any,
  actualization: boolean;
  setActualization: any;
  
  
}



export const DataContext = createContext<ChildrenData[] | null>(null);

const Page: React.FC = () => {
  const [data, setData] = useState<ChildrenData[] | null>(null);

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
  }

  return (
    <div className="min-h-screen p-10 bg-mi-color	 	 flex justify-center">
      <div className="h-full w-5/6 bg-white  rounded-xl flex flex-col p-2">  
    <div className="h-full w-full bg-mi-color flex flex-col p-5 rounded-xl">
      <h2 className="text-4xl mb-4 text-blue-700 font-medium">Dashboard</h2>
      <div className="w-full flex flex-col items-center">
        <DataContext.Provider value={data}>
          <Card children={titles} />
          {data &&
            data.map((item) => (
              <Card
                key={item.link}
                children={{ ...item, actualization, setActualization }}
              />
            ))}
          <button
            className="w-12 h-12 text-2xl fa-regular fa-square-plus"
            onClick={onchange}
          ></button>
          {openModal && (
            <DataComponent children={{ setActualization, actualization }} />
          )}
        </DataContext.Provider>
      </div>
    </div>
    </div>
  </div>
  );
};

export default Page;
