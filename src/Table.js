import React from 'react';
//import names from './Names.json'; // Ajusta la ruta según tu estructura

const names  = {
  "PEF05":"Peso por edad en niñas desde el nacimiento a 5 años",
  "PEM05": "Peso por edad en niños desde el nacimiento a 5 años",
  "TEF05": "Longitud/estatura por edad en niñas desde el nacimientos a 5 años",
  "TEM05": "Longitud/estatura por edad en niños desde el nacimientos a 5 años",
  "PTF02": "Peso por longitud en niñas desde el nacimiento a 2 años, de 45 cm a 110 cm",
  "PTM02": "Peso por longitud en niños desde el nacimiento a 2 años, de 45 cm a 110 cm",
  "PTF25": "Peso por estatura en niñas de 2 años a 5 años, de 65 cm a 120 cm",
  "PTM25": "Peso por estatura en niños de 2 años a 5 años, de 65 cm a 120 cm",
  "PEF510": "Peso por edad en niñas de 5 años 1 mes a 10 años",
  "PEM510": "Peso por edad en niñas de 5 años 1 mes a 10 años",
  "TEF519": "Estatura por edad en niñas de 5 años 1 mes a 19 años",
  "TEM519": "Estatura por edad en niños de 5 años 1 mes a 19 años",
  "IMCF519": "IMC por edad en niñas y adolescentes de 5 años 1 mes a 19 años",
  "IMCM519": "IMC por edad en niños y adolescentes de 5 años 1 mes a 19 años"
}

const Table = ({ title, data }) => {
  if (!data || Object.keys(data).length === 0) return <p>No data available</p>;

  // Función para redondear números
  const formatNumber = (value) => {
    return typeof value === 'number' ? value.toFixed(2) : value;
  };

  // Obtén los encabezados de la primera entrada de data
  const headers = Object.keys(data[Object.keys(data)[0]]);
  
  // Crea las filas de la tabla
  const rows = Object.keys(data).map(rowKey => (
    <tr key={rowKey}>
      {Object.values(data[rowKey]).map((value, index) => (
        <td key={index}>{formatNumber(value)}</td>
      ))}
    </tr>
  ));

  // Obtén la descripción del título usando el archivo JSON
  const tableTitle = names[title] || 'Título no disponible';
  //console.log('Table Title:', tableTitle);

  // Determina la clase para el título y la tabla
  const titleClass = tableTitle.toLowerCase().includes('niñas') ? 'ninas' :
                     tableTitle.toLowerCase().includes('niños') ? 'ninos' : '';
  //console.log('Title Class:', titleClass);

  return (
    <div>
      <h2 className={titleClass}>{tableTitle}</h2>
      <table className={titleClass}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
