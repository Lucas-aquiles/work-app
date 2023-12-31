"use client";
import { useState, ChangeEvent, useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";

interface ChildrenData {
  empresa: string;
  rol: string;
  fecha: string;
  proceso: string;
  link: string;
}
interface DataProps {
  actualization: boolean;
  setActualization: (value: boolean) => void;
}

const DataComponent: React.FC<DataProps> = (props) => {
  const { actualization, setActualization } = props;

  const initialState: ChildrenData = {
    empresa: "",
    rol: "",
    fecha: "",
    proceso: "",
    link: "",
  };

  const dataGeneral = useContext(DataContext);

  const [auxData, setAuxData] = useState<ChildrenData[]>(dataGeneral || []); // Inicializar con un array vacío si dataGeneral es null
  const [data, setData] = useState<ChildrenData>(initialState);
  useEffect(() => {
    localStorage.setItem("myData", JSON.stringify(auxData));
  }, [auxData]);
  useEffect(() => {
    if (dataGeneral) {
      setAuxData(dataGeneral);
    }
  }, [dataGeneral]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEnviar = (): void => {
    if (data.empresa && data.link && data.rol) {
      if (dataGeneral === null) {
        localStorage.setItem("myData", JSON.stringify([data]));
        setActualization(!actualization);
      } else {
        const result = dataGeneral?.filter((e) => e.link !== data.link);

        setAuxData(() => [...result, data]);
        setActualization(!actualization);


      }

      setData(initialState);
    }
  };

  return (
    <div className="w-full h-full bg-white flex flex-col items-center p-2">
      <div className="flex flex-row w-full flex-wrap justify-around border-slate-300 m-3">
        <input
          className="w-full sm:w-36 border-2 border-slate-300 mb-2 sm:mb-0 rounded-lg"
          type="text"
          name="empresa"
          value={data.empresa}
          onChange={handleChange}
          placeholder="Empresa"
        />
        <input
          className="w-full sm:w-28 border-2 border-slate-300 mb-2 sm:mb-0 rounded-lg"
          type="text"
          name="rol"
          value={data.rol}
          onChange={handleChange}
          placeholder="Rol"
        />
        <input
          className="w-full sm:w-32 border-2 border-slate-300 mb-2 sm:mb-0 rounded-lg"
          type="date"
          name="fecha"
          value={data.fecha}
          onChange={handleChange}
          placeholder="Fecha"
        />

        <select
          value={data.proceso}
          onChange={handleChange}
          name="proceso"
          className="w-full sm:w-28 border-2 border-slate-300 mb-2 sm:mb-0 rounded-lg"
          
        >
          <option value="">Proceso</option>
          <option value="Inicio">Inicio</option>
          <option value="Intermedio">Intermedio</option>
          <option value="Avanzado">Avanzado</option>
        </select>

        <input
          className="w-full sm:w-28 border-2 space-x-80 rounded-lg"
          type="url"
          name="link"
          value={data.link}
          onChange={handleChange}
          placeholder="Link"
        />
      </div>
      <button
        onClick={handleEnviar}
        className="bg-blue-200 w-24 h-12 rounded-lg hover:bg-blue-500 hover:text-white"
      >
        Enviar
      </button>
    </div>
  );
};

export default DataComponent;
