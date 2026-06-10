import axios from "axios";

export const uploadVoterImage = async(file) =>{
    try{
        const formData = new FormData()
        formData.append("file",file);
        const token = localStorage.getItem("token");

        const config = {
            headers:{
            'x-access-token':token
        }};
    
    const res = await axios.post(
        "http://localhost:3000/api/postVoterImage",
        formData,
        config
    );
    console.log(res.data)
    }catch(error){
        console.error(error.response?.data || error.message);
    }
}
