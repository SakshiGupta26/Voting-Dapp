import { use } from "react"
import {useWeb3Context} from "../../context/Web3Provider"

export default function EmergencyStopVoting(){
    const {web3State} = useWeb3Context()
    const {contractInstance} = useWeb3Context()

    const emergencyStop = async() => {
        await contractInstance.emergencyStopVoting()
    }
    return <button onClick={handleEmergencyStop}>Stop Voting</button>
}