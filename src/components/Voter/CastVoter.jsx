import { useRef} from 'react';
import {useWeb3Context} from "../..context/useWeb3Context";

const voteCandidate = () => {
    const {contractInstance} = useWeb3Context()
    const voterIdRef = useRef(null);
    const candidateIdRef = useRef(null);
    const cas = async(e)=>{
        try{
            e.preventDefault();
            const voterId = voterIdRef.current.value;
            const candidateId = candidateIdRef.currentvalue;
            console.log(voterId,candidateId)
        } catch(error){
            console.error(error)
        }
    }
    return(<>
    <form onSubmit ={voteCandidate}>
        <label> Voter Id:
            <input type ="data" ref={voterIdRef}></input>
        </label>
        <label>Candidate Id:
             <input type="data" ref= {candidateIdRef}></input>
        </label>
        <button type ="submit">Cast Vote</button>
    </form>
    </>)
}

export default castVote;