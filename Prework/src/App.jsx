import { useState , useEffect } from 'react'
import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCreator from './pages/AddCreator'
import EdiCreator from './pages/EditCreator'
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'
import supabase from './client' 

function App() {
  const [creators, setCreators] = useState([])

useEffect(()=>{
  const getData= async()=>{

    try {
      
      const response = await fetch(supabase);
      if (!response.ok) {
        throw new Error('Failed to fetch data from the database.');
      }

      const {data,error } = await supabase
      .from('creators')
      .select()
setCreators(data)
      console.log('Fetched data:', data);
    
    } catch (error) {
      console.error('Error fetching data:', error);
      
    }
  }
  getData()
},[])





  return (
<div className="App">


{creators.length>0? <ShowCreators creators={creators}/>:<p  style={{ textAlign: "center" }}>Add a creator to get started</p>}
{/* <EdiCreator creator={creators} setCreator={setCreators}/> */}
</div>

  )
}

export default App
