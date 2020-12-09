import React from 'react';
import './App.css';
import {Donuts} from './Donuts';

function App() {
  const [data,setData] = React.useState<IDonut[]>([])

  const getDonuts =  () => {
    fetch("https://dekqui66a9.execute-api.us-east-1.amazonaws.com/Prod/donuts")
      .then((response) => (response.json()))
      .then((data) => {setData(data.Items)})
  }
  
  React.useEffect(() => {
    getDonuts()
  }, [])

  return (
    <Donuts data={data}/>
  )}

export default App;

export interface IDonut {
  Name: string
  Price: number
  Image: String
  Type: string
  Description: string
}
