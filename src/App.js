import React, { useState, useEffect } from 'react';
import Table from './Table'; // Importa el componente Table
import './App.css'; // Incluye los estilos aquí

const App = () => {
  const [jsonData, setJsonData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadJson = async () => {
      try {
        const response = await fetch('/tables.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    loadJson();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div id="tables-container">
      {Object.keys(jsonData).map(key => (
        <Table key={key} title={key} data={jsonData[key]} />
      ))}
    </div>
  );
};

export default App;

