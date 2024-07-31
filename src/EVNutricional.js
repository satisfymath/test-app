import React, { useContext } from 'react';
import { FormularioContext } from './FormularioContext';
import tables from './tables.json';
// import './styles.css'

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

const classifyValue = (record, value) => {
  if (!record) {
    return "No hay datos para la clasificación.";
  }

  if (value <= record["-2DE"]) {
    return "-2DE";
  } else if (value > record["-2DE"] && value <= record["-1DE"]) {
    return "-1DE";
  } else if (value > record["-1DE"] && value < record["+1DE"]) {
    return "Normal";
  } else if (value >= record["+1DE"] && value < record["+2DE"]) {
    return "+1DE";
  } else if (value >= record["+2DE"]) {
    return value >= record["+3DE"] ? "+3DE" : "+2DE";
  }

  return "Valor no clasificado.";
};

const calcularEdadCronologica = (fechaNacimiento) => {
  if (!fechaNacimiento) return '';

  const fechaActual = new Date();
  const fechaNacimientoDate = new Date(fechaNacimiento);

  const años = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();
  const meses = fechaActual.getMonth() - fechaNacimientoDate.getMonth();
  const dias = fechaActual.getDate() - fechaNacimientoDate.getDate();

  let edadAños = años;
  let edadMeses = meses;
  let edadDias = dias - 1;

  if (edadDias < 0) {
    edadMeses--;
    edadDias += new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 0).getDate();
  }

  if (edadMeses < 0) {
    edadAños--;
    edadMeses += 12;
  }

  return `${edadAños} años ${edadMeses} meses ${edadDias} días`;
};

const EVNutricional = () => {
  const {
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
  } = useContext(FormularioContext);

  const calcularEdadEnMeses = () => {
    if (fechaNacimiento) {
      const fechaActual = new Date();
      const fechaNacimientoDate = new Date(fechaNacimiento);

      const diferenciaMs = fechaActual - fechaNacimientoDate;
      const diferenciaMeses = diferenciaMs / (1000 * 60 * 60 * 24 * 30.436875);
      const edadMeses = Math.floor(diferenciaMeses);
      const diferenciaDias = (diferenciaMeses - edadMeses) * 30.436875;
      const edadDias = Math.floor(diferenciaDias);

      if (edadDias >= 1 && edadDias <= 15) {
        return edadMeses;
      } else if (edadDias >= 16) {
        return edadMeses + 1;
      }
    }
    return null;
  };

  const obtenerClavesTablas = () => {
    const edadEnMeses = calcularEdadEnMeses();
    const clavesTablas = [];
    if (edadEnMeses !== null) {
      if (edadEnMeses < 24) {
        if (sexo === 'Femenino') {
          clavesTablas.push('PTF02', 'PEF05', 'TEF05');
        } else {
          clavesTablas.push('PTM02', 'PEM05', 'TEM05');
        }
      } else if (edadEnMeses < 60) {
        if (sexo === 'Femenino') {
          clavesTablas.push('PTF25', 'PEF05', 'TEF05');
        } else {
          clavesTablas.push('PTM25', 'PEM05', 'TEM05');
        }
      } else if (edadEnMeses <= 120) {
        if (sexo === 'Femenino') {
          clavesTablas.push('PEF510', 'IMCF519', 'TEF519');
        } else {
          clavesTablas.push('PEM510', 'IMCM519', 'TEM519');
        }
      } else {
        if (sexo === 'Femenino') {
          clavesTablas.push('IMCF519', 'TEF519');
        } else {
          clavesTablas.push('IMCM519', 'TEM519');
        }
      }
    }
    return clavesTablas;
  };

  const EvaluacionNutricional = (key) => {
    const edadEnMeses = calcularEdadEnMeses();
    const pesoNum = parseFloat(peso);
    const tallaNum = parseFloat(talla);

    if (key.includes('PE')) {
      const record = tables[key] ? tables[key][edadEnMeses.toFixed(1)] : null;
      return classifyValue(record, pesoNum);
    } else if (key.includes('PT')) {
      const record = tables[key] ? tables[key][tallaNum.toFixed(1)] : null;
      return classifyValue(record, peso);
    } else if (key.includes('TE')) {
      const record = tables[key] ? tables[key][edadEnMeses.toFixed(1)] : null;
      return classifyValue(record, tallaNum);
    } else if (key.includes('IMC')) {
      const imc = calcularIMC();
      const record = tables[key] ? tables[key][edadEnMeses.toFixed(1)] : null;
      return classifyValue(record, imc);
    }
    return '';
  };

  const obtenerDescripcionesTablas = (clavesTablas) => {
    return clavesTablas.map(clave => ({
      clave: clave,
      descripcion: `${tablaDescripciones[clave]}: ${EvaluacionNutricional(clave)}` || 'Descripción no disponible'
    }));
  };

  const calcularIMC = () => {
    if (peso && talla) {
      const tallaEnMetros = talla / 100;
      return (peso / (tallaEnMetros ** 2)).toFixed(2);
    }
    return null;
  };

  const calcularCalificacionNutricional = (evaluacionesTablas) => {
    let calificacion = "No clasificado";
    const edadEnMeses = calcularEdadEnMeses();
  
    const contiene = (clave, rango) => evaluacionesTablas.some(evaluacion => 
      evaluacion.clave.includes(clave) && evaluacion.descripcion.includes(rango)
    );
  
    if (edadEnMeses < 12) {
      if (contiene("PE", "-2DE")) {
        calificacion = "Desnutrición";
      } else if (contiene("PE", "-1DE")) {
        calificacion = "Riesgo de desnutrición";
      } else if (contiene("PE", "Normal")) {
        calificacion = "Normal o Eutrófico";
      } else if (contiene("PT", "+1DE")) {
        calificacion = "Sobrepeso";
      } else if (contiene("PT", "+2DE")) {
        calificacion = "Obesidad";
      }
    } else if (edadEnMeses < 61) {
      if (contiene("PT", "-2DE")) {
        calificacion = "Desnutrición";
      } else if (contiene("PT", "-1DE")) {
        calificacion = "Riesgo de desnutrición";
      } else if (contiene("PT", "Normal")) {
        calificacion = "Normal o Eutrófico";
      } else if (contiene("PT", "+1DE")) {
        calificacion = "Sobrepeso";
      } else if (contiene("PT", "+2DE")) {
        calificacion = "Obesidad";
      }
    } else {
      if (contiene("IMC", "-2DE")) {
        calificacion = "Desnutrición";
      } else if (contiene("IMC", "-1DE")) {
        calificacion = "Riesgo de desnutrición";
      } else if (contiene("IMC", "Normal")) {
        calificacion = "Normal o Eutrófico";
      } else if (contiene("IMC", "+1DE")) {
        calificacion = "Sobrepeso";
      } else if (contiene("IMC", "+2DE")) {
        calificacion = "Obesidad";
      } else {
        calificacion = "Obesidad Severa";
      }
    }
    return calificacion;
  };

  const calcularCalificacionEstatural = (evaluacionesTablas) => {
    let calificacion = "No clasificado";
    const contiene = (clave, rango) => evaluacionesTablas.some(evaluacion => 
      evaluacion.clave.includes(clave) && evaluacion.descripcion.includes(rango)
    );
    if (contiene("TE", "-2DE")) {
      calificacion = "Talla Baja";
    } else if (contiene("TE", "-1DE")) {
      calificacion = "Talla Normal Baja";
    } else if (contiene("TE", "Normal")) {
      calificacion = "Talla Normal";
    } else if (contiene("TE", "+1DE")) {
      calificacion = "Talla Normal Alta";
    } else if (contiene("TE", "+2DE")) {
      calificacion = "Talla Alta";
    }
    return calificacion
  }
  
  const imc = calcularIMC();
  const clavesTablas = obtenerClavesTablas();
  const descripcionesTablas = obtenerDescripcionesTablas(clavesTablas);
  const edadCronologica = calcularEdadCronologica(fechaNacimiento);
  
  return (
    <form className="formev">
      <h3>Evaluación Nutricional</h3>
      <h2>Datos Paciente</h2>
      <div className="form-group">
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Fecha de Nacimiento:</label>
          <input
            type="date"
            placeholder="dd-mm-yyyy"
            value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Sexo:</label>
          <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
            <option value="">Seleccionar...</option>
            <option value="Femenino">Femenino</option>
            <option value="Masculino">Masculino</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Peso (kg):</label>
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Talla (cm):</label>
          <input
            type="number"
            value={talla}
            onChange={(e) => setTalla(e.target.value)}
          />
        </div>
      </div>
      <button type="button" onClick={handleClear}>Borrar</button>
      <h2>Evaluación del Paciente</h2>
      {imc !== null ? (
        <>
          <p>Edad Cronológica: {edadCronologica}</p>
          <p>IMC: {imc}</p>
          {descripcionesTablas.length > 0 ? (
            <div>
              <h2>Descripciones de Tablas</h2>
              <ul>
                {descripcionesTablas.map((descripcion, index) => (
                  <li key={index}>{descripcion.descripcion}</li>
                ))}
              </ul>
              <h4>Calificación Nutricional: {calcularCalificacionNutricional(descripcionesTablas)}</h4>
              <h4>Calificación Estatural: {calcularCalificacionEstatural(descripcionesTablas)}</h4>
              <h4>Diagnóstico Nutricional: escolar/prescolar , ......</h4>
            </div>
          ) : (
            <p>No hay descripciones disponibles para mostrar.</p>
          )}
        </>
      ) : (
        <p>No se ha calculado el IMC aún.</p>
      )}
    </form>
  );
};

export default EVNutricional;
