// FormularioContext.js
import React, { createContext, useState, useEffect } from 'react';

export const FormularioContext = createContext();

export const FormularioProvider = ({ children }) => {
  const [nombre, setNombre] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [sexo, setSexo] = useState('Femenino');
  const [peso, setPeso] = useState('');
  const [talla, setTalla] = useState('');

  useEffect(() => {
    // Cargar el estado del formulario desde localStorage
    const savedData = JSON.parse(localStorage.getItem('formulario'));
    if (savedData) {
      setNombre(savedData.nombre || '');
      setFechaNacimiento(savedData.fechaNacimiento || '');
      setSexo(savedData.sexo || 'Femenino');
      setPeso(savedData.peso || '');
      setTalla(savedData.talla || '');
    }
  }, []);

  useEffect(() => {
    // Guardar el estado del formulario en localStorage
    const formularioData = {
      nombre,
      fechaNacimiento,
      sexo,
      peso,
      talla,
    };
    localStorage.setItem('formulario', JSON.stringify(formularioData));
  }, [nombre, fechaNacimiento, sexo, peso, talla]);

  const handleClear = () => {
    setNombre('');
    setFechaNacimiento('');
    setSexo('Femenino');
    setPeso('');
    setTalla('');
  };

  return (
    <FormularioContext.Provider
      value={{ nombre, setNombre, fechaNacimiento, setFechaNacimiento, sexo, setSexo, peso, setPeso, talla, setTalla, handleClear }}
    >
      {children}
    </FormularioContext.Provider>
  );
};
