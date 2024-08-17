import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {

  const [menu,setMenu] = useState()
  const API_BASE_URL = import.meta.env.PROD 
    ? 'https://chai-or-backend-fullstack.onrender.com' 
    : '';
  useEffect(() => {
    (async () => {
      try {
        const halwaiMenuReq = await axios.get(`${API_BASE_URL}/apiv1/partyMenu`);
        console.log("halwaiMenuReq", halwaiMenuReq);
        setMenu(halwaiMenuReq?.data?.SOUPS)
      } catch (error) {
        console.error("Error fetching the Halwai menu:", error);
      }
    })();
  }, []);

  return (
    <>  
     <div>
      {menu?.map((items,index)=>{
        return(
          <div key={index}>{items}</div>
        )
      })}
     </div>
    </>
  )
}

export default App
