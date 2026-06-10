import { useRef } from "react";
import { useWeb3Context } from "../../context/useWeb3Context";
import { useNavigate } from "react-router-dom";

const RegisterVoter = () => {
    const { web3State } = useWeb3Context();
    const { contract } = web3State;

    const navigate = useNavigate();

    const nameRef = useRef(null);
    const genderRef = useRef(null);
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

            console.log(name, age, gender);

            await contract.registerVoter(name, age, gender);

            console.log("Registration is successful");

            navigate("/candidate-list"); // optional redirect after success
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

            <button type="submit">Submit</button>
        </form>
    );
};

export default RegisterVoter;