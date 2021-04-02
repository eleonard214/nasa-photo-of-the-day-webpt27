import React, {useState, useEffect} from "react";
import styled from 'styled-components'
import Axios from 'axios'
import IsItLoading from './Components/IsItLoading'
import "./App.css";

const StyledApp = styled.div`
background color: purple;
color: green;
border-radius: 50px;
font-size: 50px;
`

function App() {
  const [nasaData, setNasaData]=useState('')
  const [date, setDate]=useState('2021-04-01')
  const [loading, setLoading]=useState('true')

  useEffect(()=>{
    const callData = ()=>{
      setLoading(true);
      Axios
      .get('https://api.nasa.gov/planetary/apod?api_key=xmH8E3dCWCAz00xb95jJVa9G7N2iBY5hzehL2yDX')
      .then(res=>{
        console.log(res.data)
        setNasaData(res.data)
        setLoading(false)
      })
        .catch(err=>{
          console.log('Error occurred getting data', err)
        })
      }
      callData();
    }, [date])

    function updateDate(inputDate){
      setDate(inputDate)
    }

      return (
        <StyledApp className="App">
          <p>NASA photo of the day! Have fun <span role="img" aria-label='go!'>🚀</span>!</p>
          <IsItLoading
          nasaData={nasaData}
          loading={loading}
          updateDate={updateDate}/>
          <p>Brought to you by Erica Leonard</p>
        </StyledApp>
      );
}

export default App;
