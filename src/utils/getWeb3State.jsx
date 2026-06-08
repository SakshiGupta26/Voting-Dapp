import { BrowserProvider, Contract } from "ethers";
import abi from "../constant/abi.json";

export const getWeb3State = async() =>{
   try{
       if(!window.ethereum){
          throw new Error("MetaMask is not installed");
       }
       const accounts = await window.ethereum.request({
            method:'eth_requestAccounts'
       })
       const selectedAccount =accounts[0];

       const chainIdHex = await window.ethereum.request({
           method:'eth_chainId'
       })
       const chainId = parseInt(chainIdHex,16);
       console.log(selectedAccount,chainId)
       
       const provider = new BrowserProvider(window.ethereum);
       const signer = await provider.getSigner()
       const contractAddress = "0xCCC15B5CCAF92d34f3A99c2270920D3Fcf42c290";

       const contractInstance = new Contract(contractAddress,abi,signer)
       return {contractInstance,selectedAccount,chainId}
    }catch(error){
       console.error(error)
       throw error
    }
}