import React from 'react';
import names from './Names.json'; // Ajusta la ruta según tu estructura

const Table = ({ title, data }) => {
  if (!data || Object.keys(data).length === 0) return null;

  // Función para redondear números
  const formatNumber = (value) => {
    // Verifica si el valor es un número y lo redondea a 2 decimales
    return typeof value === 'number' ? value.toFixed(2) : value;
  };

  const headers = Object.keys(data[Object.keys(data)[0]]);
  const rows = Object.keys(data).map(rowKey => (
    <tr key={rowKey}>
      {Object.values(data[rowKey]).map((value, index) => (
        <td key={index}>{formatNumber(value)}</td>
      ))}
    </tr>
  ));

  // Obtén la descripción del título usando el archivo JSON
  const tableTitle = names[title] || 'Título no disponible';

  // Determina la clase para el título y la tabla
  const titleClass = tableTitle.toLowerCase().includes('niñas') ? 'ninas' :
                     tableTitle.toLowerCase().includes('niños') ? 'ninos' : '';

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
