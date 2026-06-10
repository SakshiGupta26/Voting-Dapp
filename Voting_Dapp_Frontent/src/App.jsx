import './App.css'
import { useState } from "react";
import Web3Provider from "./context/Web3Provider";
import RegisterCandidate from './pages/Candidate/RegisterCandidate';
import {routes} from './routes/routes'
import { RouterProvider} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Web3Provider>
      <RouterProvider router={routes}></RouterProvider>
     </Web3Provider>
    </>
  )
}

export default App
