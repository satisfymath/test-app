import React, { useState } from 'react';
//import tables from './tables.json';

const tablaDescripciones = {
  "PEF05": "Peso por edad en niñas desde el nacimiento a 5 años",
  "PEM05": "Peso por edad en niños desde el nacimiento a 5 años",
  "TEF05": "Longitud/estatura por edad en niñas desde el nacimiento a 5 años",
  "TEM05": "Longitud/estatura por edad en niños desde el nacimiento a 5 años",
  "PTF02": "Peso por longitud en niñas desde el nacimiento a 2 años, de 45 cm a 110 cm",
  "PTM02": "Peso por longitud en niños desde el nacimiento a 2 años, de 45 cm a 110 cm",
  "PTF25": "Peso por estatura en niñas de 2 años a 5 años, de 65 cm a 120 cm",
  "PTM25": "Peso por estatura en niños de 2 años a 5 años, de 65 cm a 120 cm",
  "PEF510": "Peso por edad en niñas de 5 años 1 mes a 10 años",
  "PEM510": "Peso por edad en niños de 5 años 1 mes a 10 años",
  "TEF519": "Estatura por edad en niñas de 5 años 1 mes a 19 años",
  "TEM519": "Estatura por edad en niños de 5 años 1 mes a 19 años",
  "IMCF519": "IMC por edad en niñas y adolescentes de 5 años 1 mes a 19 años",
  "IMCM519": "IMC por edad en niños y adolescentes de 5 años 1 mes a 19 años"
};

const EVNutricional = () => {
  const [nombre, setNombre] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [sexo, setSexo] = useState('');
  const [peso, setPeso] = useState('');
  const [talla, setTalla] = useState('');

  // Calcula la edad en meses a partir de la fecha de nacimiento
  const calcularEdadEnMeses = () => {
    if (fechaNacimiento) {
      const fechaActual = new Date();
      const fechaNacimientoDate = new Date(fechaNacimiento);
      const edadEnMeses = Math.floor((fechaActual - fechaNacimientoDate) / (1000 * 60 * 60 * 24 * 30));
      return edadEnMeses;
    }
    return null;
  };

// Obtiene las claves de las tablas en función de la edad y el sexo
const obtenerClavesTablas = () => {
    const edadEnMeses = calcularEdadEnMeses();
    const clavesTablas = [];
    if (edadEnMeses !== null) {
      if (edadEnMeses < 24) { // Menor a 2 años
        if (sexo === 'Femenino') {
          clavesTablas.push('PTF02'); // Peso por longitud para niñas de 0 a 2 años
          clavesTablas.push('PTF02'); // Peso por longitud para niñas de 0 a 2 años
          clavesTablas.push('TEF05'); // longitud por edad para niñas desde el nacimiento a 5 años
        } else { // Masculino
          clavesTablas.push('PTM02'); // Peso por longitud para niños de 0 a 2 años
          clavesTablas.push('PEM05'); // Peso por edad para niños desde el nacimiento a 5 años
          clavesTablas.push('TEM05'); // longitud por edad para niños desde el nacimiento a 5 años
        }
      } else if (edadEnMeses < 60) { // De 2 a 5 años
        if (sexo === 'Femenino') {
          clavesTablas.push('PTF25'); // Peso por estatura para niñas de 2 a 5 años
          clavesTablas.push('PEF05'); // Peso por edad para niñas desde el nacimiento a 5 años
          clavesTablas.push('TEF05'); // longitud por edad para niñas desde el nacimiento a 5 años
        } else { // Masculino
          clavesTablas.push('PTM25'); // Peso por estatura para niños de 2 a 5 años
          clavesTablas.push('PEM05'); // Peso por edad para niños desde el nacimiento a 5 años
          clavesTablas.push('TEM05'); // longitud por edad para niñas desde el nacimiento a 5 años
        }
      } else if (edadEnMeses <= 120) { // De 5 años 1 mes a 10 años
        if (sexo === 'Femenino') {
            clavesTablas.push('PEF510');
            clavesTablas.push('IMCF519'); // IMC por edad para niñas de 5 años 1 mes a 19 años
            clavesTablas.push('TEF519'); // Estatura para niñas de 5 años 1 mes a 19 años // Peso por edad para niñas de 5 años 1 mes a 10 años
        } else {//Masculino
            clavesTablas.push('PEM510'); // Peso por edad para niños de 5 años 1 mes a 10 años
            clavesTablas.push('IMCM519'); // IMC por edad para niños de 5 años 1 mes a 19 años
            clavesTablas.push('TEM519'); // Estatura para niños de 5 años 1 mes a 19 años
        } 
      } else { // De 5 años 1 mes a 19 años
        if (sexo === 'Femenino') {
          clavesTablas.push('IMCF519'); // IMC por edad para niñas de 5 años 1 mes a 19 años
          clavesTablas.push('TEF519'); // Estatura para niñas de 5 años 1 mes a 19 años
        } else {
          clavesTablas.push('IMCM519'); // IMC por edad para niños de 5 años 1 mes a 19 años
          clavesTablas.push('TEM519'); // Estatura para niños de 5 años 1 mes a 19 años
        }
      }
    }
    return clavesTablas;
  };


  // Obtiene la descripción de las tablas en función de las claves de las tablas
  const obtenerDescripcionesTablas = (clavesTablas) => {
    return clavesTablas.map(clave => tablaDescripciones[clave] || 'Descripción no disponible');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Define el objeto con los datos del formulario
    const formData = {
      nombre,
      fechaNacimiento,
      sexo,
      peso,
      talla,
    };

    // Obtén los datos existentes en el localStorage
    const existingData = JSON.parse(localStorage.getItem('formData')) || [];

    // Añade los nuevos datos al array existente
    existingData.push(formData);

    // Guarda el array actualizado en localStorage
    localStorage.setItem('formData', JSON.stringify(existingData));

    // Limpia los campos del formulario
    setNombre('');
    setFechaNacimiento('');
    setSexo('');
    setPeso('');
    setTalla('');

    console.log('Datos guardados en localStorage:', existingData);
  };

  // Calcular IMC
  const calcularIMC = () => {
    if (peso && talla) {
      const tallaEnMetros = talla / 100; // Convertir la talla a metros
      return (peso / (tallaEnMetros ** 2)).toFixed(2); // Calcular IMC y limitar a 2 decimales
    }
    return null;
  };

  const imc = calcularIMC();

  // Obtener las claves de las tablas en función del sexo y la edad
  const clavesTablas = obtenerClavesTablas();
  const descripcionesTablas = obtenerDescripcionesTablas(clavesTablas);

  return (
    <div>
      <h1>Evaluación Nutricional</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Datos Paciente</h2>
          <label>Nombre:</label>
          <input 
            type="text" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
          />
        </div>
        <div>
          <label>Fecha de Nacimiento:</label>
          <input 
            type="date" 
            value={fechaNacimiento} 
            onChange={(e) => setFechaNacimiento(e.target.value)} 
          />
        </div>
        <div>
          <label>Sexo:</label>
          <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
            <option value="">Selecciona una opción</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
        </div>
        <div>
          <label>Peso (kg):</label>
          <input 
            type="number" 
            value={peso} 
            onChange={(e) => setPeso(e.target.value)} 
          />
        </div>
        <div>
          <label>Talla (cm):</label>
          <input 
            type="number" 
            value={talla} 
            onChange={(e) => setTalla(e.target.value)} 
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      <div>
        <h2>Evaluación del Paciente</h2>
        {imc !== null ? (
          <>
            <p>IMC: {imc}</p>
            {descripcionesTablas.length > 0 ? (
              <div>
                <h3>Tablas Correspondientes:</h3>
                <ul>
                  {descripcionesTablas.map((descripcion, index) => (
                    <li key={index}>{descripcion}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>No se encontró información para la edad en meses.</p>
            )}
          </>
        ) : (
          <p>Introduce el peso y la talla para calcular el IMC.</p>
        )}
      </div>
    </div>
  );
};

export default EVNutricional;
