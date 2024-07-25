import React, { createContext, useState } from 'react';

// Crear el contexto
export const FormularioContext = createContext();

const FormularioProvider = ({ children }) => {
  const [nombre, setNombre] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [sexo, setSexo] = useState('');
  const [peso, setPeso] = useState('');
  const [talla, setTalla] = useState('');

  const handleClear = () => {
    setNombre('');
    setFechaNacimiento('');
    setSexo('');
    setPeso('');
    setTalla('');
  };

  return (
    <FormularioContext.Provider
      value={{
        nombre,
        setNombre,
        fechaNacimiento,
        setFechaNacimiento,
        sexo,
        setSexo,
        peso,
        setPeso,
        talla,
        setTalla,
        handleClear
      }}
    >
      {children}
    </FormularioContext.Provider>
  );
};

export default FormularioProvider;
