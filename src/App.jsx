import './App.css'
import { useState } from "react";
import Web3Provider from "./context/Web3Provider";
import RegisterCandidate from './pages/Candidate/RegisterCandidate';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Web3Provider>
      <RegisterCandidate></RegisterCandidate>
     </Web3Provider>
    </>
  )
}

export default App
