import './App.css'
import { useState } from "react";
import Web3Provider from "./context/Web3Provider";
import Dummy from "./Dummy";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Web3Provider>
      <Dummy></Dummy>
     </Web3Provider>
    </>
  )
}

export default App
