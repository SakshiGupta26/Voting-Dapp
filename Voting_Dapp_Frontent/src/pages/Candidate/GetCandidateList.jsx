import { useState, useEffect } from "react";
import { useWeb3Context } from "../../context/useWeb3Context";

const GetCandidateList = () => {
    const { web3State } = useWeb3Context();
    const { contract } = web3State;

    const [candidateList, setCandidateList] = useState([]);

    useEffect(() => {
        const fetchCandidateList = async () => {
            try {
                if (!contract) return;

                const list = await contract.getCandidateList();
                setCandidateList(list);

                console.log(list);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCandidateList();
    }, [contract]);

    return (
        <ul>
            {candidateList.map((candidate, index) => (
                <li key={index}>
                    Name: {candidate.name} <br />
                    Party: {candidate.party} <br />
                    Age: {candidate.age} <br />
                    Votes: {candidate.votes?.toString()}
                </li>
            ))}
        </ul>
    );
};

export default GetCandidateList;