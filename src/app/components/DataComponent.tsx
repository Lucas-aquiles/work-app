"use client"
import { useState, ChangeEvent } from 'react';

interface ChildrenData {
  empresa: string;
  rol: string;
  fecha: string;
  proceso: string;
  link: string;
  id:number
}

const DataComponent: React.FC = () => {
  const initialState: ChildrenData = {
    empresa: '',
    rol: '',
    fecha: '',
    proceso: '',
    link: '',
    id:0

  };
  const [data, setData] = useState<ChildrenData>(initialState);
  

 

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEnviar = () => {
    // Guardar los datos en el LocalStorage
    localStorage.setItem('myData', JSON.stringify([data]));
    setData(initialState);
    // Realizar alguna acción adicional aquí si es necesario
  };

  return (
    <div className='w-full h-2/4 bg-white flex flex-col items-center p-2 '>
      <div className='flex flex-row w-full justify-around border-slate-300 m-3	'>
        <input className="w-36 border-2	 border-slate-300	" type="text" name="empresa" value={data.empresa} onChange={handleChange} />
        <input className="w-28 border-2	 border-slate-300	" type="text" name="rol" value={data.rol} onChange={handleChange} />
        <input className="w-28 border-2	" type="text" name="fecha" value={data.fecha} onChange={handleChange} />
        <input className="w-28 border-2	" type="text" name="proceso" value={data.proceso} onChange={handleChange} />
        <input className="w-28 border-2	 space-x-80" type="url" name="link" value={data.link} onChange={handleChange} />
      </div>
      <button onClick={handleEnviar} className='bg-orange-500 w-24 h-12'>Enviar</button>
      {/* Aquí agrega más campos de input para las otras propiedades del objeto */}
      
    </div>
  );
}

export default DataComponent;
