import {useRef} from "react";
import {useWeb3Context} from "../../context/useWeb3Context";

const RegisterVoter = () =>{
    
    const {contractInstance} = useWeb3Context()
    const nameRef = useRef(null);
    const genderRef = useRef(null);
    const ageRef = useRef(null);

    const handleCandidateRegistration = async(e) =>{
        try{
           e.preventDefault();
           const name = nameRef.current.value;
           const age = ageRef.current.value;
           const gender = genderRef.current.value;
           console.log(name,age,gender)

           await contractInstance.registerVoter(name,age,gender)
           console.log("Registration is successful")
        }catch(error){
            console.error(error)
        }
    }
      return (
        <>
        <form onSubmit={handleCandidateRegistration}>
            <label>Name:
                <input type ="text" ref={nameRef}></input>
            </label>
            <label>Age:
                <input type ="text" ref={ageRef}></input>
            </label>
            <label>Gender:
                <input type ="text" ref={genderRef}></input>
            </label>
            <button type = "submit">Submit</button>
        </form>
        </>
      )
}
export default RegisterVoter;