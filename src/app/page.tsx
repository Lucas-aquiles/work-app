"use client"
import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Card from './components/Card';
import DataComponent from './components/DataComponent';

const titles = {
  empresa: "Empresa",
  rol: "Rol",
  fecha: "Fecha",
  proceso: "Etapa del proceso",
  link: "Link",
};

interface ChildrenData {
  empresa: string;
  rol: string;
  fecha: string;
  proceso: string;
  link: string;
  id: number;
}

const Page: React.FC = () => {
  const [data, setData] = useState<ChildrenData[] | null>(null); // Set initial value to null
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    // Cuando el componente se monta, obtener el objeto almacenado en LocalStorage (si existe)
    const storedData = localStorage.getItem('myData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  function onchange() {
    setOpenModal(!openModal);
  }

  return (
    <div className="p-10 w-full h-screen bg-slate-400 flex justify-center">
      <div className="h-full w-5/6 bg-slate-50 flex flex-row p-5">
        <div className="p-2">
          <h2>Dashboard</h2>
        </div>
        <div className="w-full h-90 bg-slate-500 p-5 flex flex-col items-center">
          <Card children={titles} />
          {data &&
            data.map((item) => (
              <Card key={item.id} children={item} />
            ))}
          <button
            className="w-52 h-52 text-7xl fa-regular fa-square-plus"
            onClick={onchange}
          ></button>
          {openModal && <DataComponent />}
        </div>
      </div>
    </div>
  );
};

export default Page;
