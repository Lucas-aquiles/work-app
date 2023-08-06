import React from 'react';
import Card from './components/Card';
import DataComponent from './components/DataComponent';

const titles: { empresa: string; rol: string, fecha: any, proceso:string, link: string  } = {
  empresa: "Empresa",
  rol: "Rol",
  fecha:"Fecha",
  proceso:"Etapa del proceso",
  link:"link",
  
};

const Page: React.FC = () => {
  return (
    <div className="p-10 w-full h-screen bg-slate-400 flex justify-center">
      <div className="h-full w-5/6 bg-slate-50 flex flex-row p-5">
        <div className="p-2">
          <h2>Dashboard</h2>
        </div>
        <div className='w-full h-90 bg-slate-500 p-5 flex  flex-col items-center '>
        <Card children={titles}/>
        <button className='bg-slate-800 w-52 m-10 '>a guardar informacion</button>
        <DataComponent/>

        </div>

      </div>
    </div>
  );
};

export default Page;