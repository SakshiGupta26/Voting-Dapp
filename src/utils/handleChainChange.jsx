import { BrowserProvider, Contract } from "ethers";

export const handleChainChange = async(setweb3State)=>{
    const chainIdHex = await window.ethereum.request({
        method:'eth_chainId'
    })
    const chainId = parseInt(chainIdHex,16);
    setWeb3State((prevState)=>({...prevState,chainId}))
}