import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
function App() {

  const[poke, setPoke] = useState([])

  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(res => {
      setPoke(res.data.results)
    //  console.log(res.data.results);
    })
  })

  return (
    <div className="App">
    <p>lol</p>
    <ul>
    {poke.map(item => (
      <li key={item.name}>
        <a href={item.url}>{item.name}</a>
      </li>

    ))}
    </ul>
    </div>
  );
}

export default App;
