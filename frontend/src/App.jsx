import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [usuarios, setUsuarios] = useState([]);

  const ListarUsuarios = async () => {
    try {
      const response = await axios.get('http://localhost:3000/listar');

      if (response.status === 200) {
        setUsuarios(response.data);
      } else {
        alert('Error al obtener la lista de usuarios');
      }
    } catch (error) {
      console.error('Error al obtener la lista de usuarios: ', error);
      alert('Error al obtener la lista de usuarios: ' + error.message);
    }
  };

  useEffect(() => {
    ListarUsuarios();
  }, []);

  return (
    <div >
      <h1>Lista de Usuarios</h1>
      <ul>
        {usuarios.map((usuario, index) => (
          <li key={index}>{usuario.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
