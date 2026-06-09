import React, {useState} from 'react'

const DisplayResults = () =>{
    const {web3State} = useWeb3Context()
    const {constractInstance} = web3State;
    const [winner, setWinner] = useState("No Winner Declared")

    useEffect(() =>{
        const getWinner = async()=>{
            try{
                const winningCandidateAddress = await contractInstance.winner();
                if(winningCandidateAddress!= '0x0000000000000000000000000000000000000000'){
                    setWinner(winningCandidateAddress)
                }
                setWinner(winningCandidate)
            }catch(error){
                console.error(error)
            }
        }
        contractInstance && getWinner()
    },[])
    return (
        <div>
            <h1>Winner {winner}</h1>
        </div>
    )
}

export default DisplayResults;