import React, { useState, useEffect } from 'react';
import Table from './Table';
import './App.css';
import jsonData from './tables.json';  // Ajusta la ruta según la ubicación del archivo

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    // Aquí podrías hacer algún procesamiento adicional si es necesario
    setData(jsonData);
  }, []);

  return (
    <div id="tables-container">
      {Object.keys(data).length > 0 ? (
        Object.keys(data).map(key => (
          <Table key={key} title={key} data={data[key]} />
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default App;

