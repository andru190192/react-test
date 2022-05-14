import './App.css';
import { useState, useEffect } from 'react';
import CardList from './CardList';

function App() {
  const [persons, setPersons] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setTimeout(async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        if(response.ok) {
          const data = await response.json();
          setPersons(data.results);
          setLoading(false);
          setError(false);
        } else {
          setLoading(false);
          setError(true);
        }
      }, 3000);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
    
  //  fetch('https://rickandmortyapi.com/api/character')
  //       .then(response => response.json())
  //       .then(data => setPersons(data.results));
  }
  
  return (
    <div>
      {loading && <h1>Estamos cargando la informacion........</h1>}
      {error && <p>Ha ocurrido un error</p>}
      <CardList persons={persons} />
    </div>
  );
}

export default App;
