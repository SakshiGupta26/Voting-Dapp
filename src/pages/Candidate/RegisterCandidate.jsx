import { useRef } from "react";
import { useWeb3Context } from "../../context/useWeb3Context";

const RegisterCandidate = () => {
    const { web3State } = useWeb3Context();
    const { contract } = web3State;

    const nameRef = useRef(null);
    const genderRef = useRef(null);
    const partyRef = useRef(null);
    const ageRef = useRef(null);

    const handleCandidateRegistration = async (e) => {
        e.preventDefault();

        try {
            if (!contract) {
                console.log("Contract not loaded yet");
                return;
            }

            const name = nameRef.current.value;
            const age = ageRef.current.value;
            const gender = genderRef.current.value;
            const party = partyRef.current.value;

            console.log(name, age, gender, party);

            await contract.registerCandidate(name, party, age, gender);

            console.log("Registration is successful");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleCandidateRegistration}>
            <label>Name:
                <input type="text" ref={nameRef} />
            </label>

            <label>Age:
                <input type="text" ref={ageRef} />
            </label>

            <label>Gender:
                <input type="text" ref={genderRef} />
            </label>

            <label>Party:
                <input type="text" ref={partyRef} />
            </label>

            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterCandidate;