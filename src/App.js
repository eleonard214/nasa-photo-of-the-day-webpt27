import React, {useState, useEffect} from "react";
import Axios from 'axios'
import "./App.css";



function App() {
  const [nasaData, setNasaData]=useState('')

  useEffect(()=>{
    Axios.get('https://api.nasa.gov/planetary/apod?api_key=xmH8E3dCWCAz00xb95jJVa9G7N2iBY5hzehL2yDX')
    .then(res=>{
      console.log(res.data)
      setNasaData(res.data)
      .catch(err=>{
        console.log('Error occured getting data', err)
      })
  }, [])
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
