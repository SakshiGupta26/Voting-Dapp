import { useRef } from "react";
import {useWeb3Context} from "../../context/useWeb3Context";

const VotingTimePeriod = () =>{
    const {contractInstance} = useWeb3Context()
    const startRef = useRef(null);
    const endRef = useRef(null);
    const handleVotingTime=async(e) =>{
        try{
            e.preventDefault();
            const startTime = startRef.current.value;
            const endTime = endRef.current.value;

            console.log(startTime,endTime)
        } catch(error){
            console.error(error)
        }
    }
    return(<>
       <form onSumbit={handleVotingTime}>
        <label>Start Time:
            <input type="data" ref = {startRef}></input>
        </label>
        <label>End Time:
            <input type="data" ref = {endRef}></input>
        </label>
        <button type="submit">Register</button>
       </form>
    </>)
}