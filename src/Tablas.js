import React, { useState, useEffect } from 'react';
import Table from './Table';
import jsonData from './tables.json';

const Tablas = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData(jsonData);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <h2>Tablas</h2>
      {loading ? (
        <p>Loading Data ...</p>
      ) : Object.keys(data).length > 0 ? (
        Object.keys(data).map(key => (
          <Table key={key} title={key} data={data[key]} />
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Tablas;
