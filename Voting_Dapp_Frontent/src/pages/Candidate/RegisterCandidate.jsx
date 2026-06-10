import { useRef } from "react";
import { useWeb3Context } from "../../context/useWeb3Context";
import axios from "axios";
import { uploadCanidateImage } from "../../utils/uploadCanidateImage";


const RegisterCandidate = () => {

    const [file,setFile] = useState("")
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
               return <p>Loading blockchain connection...</p>;
            }
            const token = localStorage.getItem("token");
            const config = {
                headers:{
                    "x-access-token":token
                },
            };
            
            await uploadCanidateImage(file)
            const name = nameRef.current.value;
            const age = ageRef.current.value;
            const gender = genderRef.current.value;
            const party = partyRef.current.value;

            const res = await axios.post(
               "http://localhost:3000/api/postCandidateImage",
                {}, 
               config
            );

            console.log(res.data)

            await contract.registerCandidate(name, party, age, gender);

            console.log("Registration is successful");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
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
        <input type ="file" onChange={()=>setFile(e.target.files[0])}></input>
    </>
    );
};

export default RegisterCandidate;