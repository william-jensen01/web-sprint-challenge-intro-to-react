import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Character from './components/Character';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then((response) => {
        console.log(response.data.results)
        setData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);
    
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <Character characterArray={data} />
    </div>
  );
}

export default App;
