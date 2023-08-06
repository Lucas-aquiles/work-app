"use client"
import { useState, useEffect, ChangeEvent } from 'react';

interface ChildrenData {
  empresa: string;
  rol: string;
  fecha: string;
  proceso: string;
  link: string;
  id:number
}

const DataComponent: React.FC = () => {
  const [data, setData] = useState<ChildrenData>({
    empresa: '',
    rol: '',
    fecha: '',
    proceso: '',
    link: '',
    id:0,
  });

  useEffect(() => {
    // Cuando el componente se monta, obtener el objeto almacenado en LocalStorage (si existe)
    const storedData = localStorage.getItem('myData');
    console.log(storedData)
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEnviar = () => {
    // Guardar los datos en el LocalStorage
    localStorage.setItem('myData', JSON.stringify(data));
    // Realizar alguna acción adicional aquí si es necesario
  };

  return (
    <div className='w-full h-2/4 bg-white flex flex-col items-center'>
      <div className='flex flex-row w-full justify-around'>
        <input className="w-36" type="text" name="empresa" value={data.empresa} onChange={handleChange} />
        <input className="w-28" type="text" name="rol" value={data.rol} onChange={handleChange} />
        <input className="w-28" type="text" name="fecha" value={data.fecha} onChange={handleChange} />
        <input className="w-28" type="text" name="proceso" value={data.proceso} onChange={handleChange} />
        <input type="text" name="link" value={data.link} onChange={handleChange} />
      </div>
      <button onClick={handleEnviar} className='bg-orange-500 w-24 h-12'>Enviar</button>
      {/* Aquí agrega más campos de input para las otras propiedades del objeto */}
      <h2>{data.empresa}</h2>
      <h2>{data.rol}</h2>
      <h2>{data.fecha}</h2>
      <h2>{data.proceso}</h2>
      <h2>{data.link}</h2>
    </div>
  );
}

export default DataComponent;
