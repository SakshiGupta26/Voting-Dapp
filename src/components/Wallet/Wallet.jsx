import { useWeb3Context } from "../../context/useWeb3Context";
import {useNavigate} from "react-router-dom";
import { useEffect } from "react";

const Wallet = () =>{

    const {handleWallet,web3State} = useWeb3Context();
    const {selectedAccount} = web3State
    const navigate = useNavigate()

    useEffect(() =>{
        if(selectedAccount){
           navigate('/register-candidate')
        }
    },[selectedAccount])

    return <button onClick={handleWallet}> Connect Wallet </button>
}
export default Wallet;