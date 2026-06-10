import { useState, useEffect, useRef } from "react";
import { Web3Context } from "./web3Context";
import { getWeb3State } from "../utils/getWeb3State";

const Web3Provider = ({ children }) => {
  const [web3State, setWeb3State] = useState({
    contractInstance: null,
    selectedAccount: null,
    chainId: null,
  });

  const handleWallet = async () => {
    try {
      const { contractInstance, selectedAccount, chainId } =
        await getWeb3State();

      setWeb3State({
        contractInstance,
        selectedAccount,
        chainId,
      });
    } catch (error) {
      console.error("Wallet connection failed:", error);
    }
  };


  const accountHandlerRef = useRef(null);
  const chainHandlerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !window.ethereum) return;

    const ethereum = window.ethereum;

    accountHandlerRef.current = (accounts) => {
      setWeb3State((prev) => ({
        ...prev,
        selectedAccount: accounts?.[0] || null,
      }));
    };

    chainHandlerRef.current = (chainIdHex) => {
      setWeb3State((prev) => ({
        ...prev,
        chainId: parseInt(chainIdHex, 16),
      }));
    };

    ethereum.on("accountsChanged", accountHandlerRef.current);
    ethereum.on("chainChanged", chainHandlerRef.current);

    return () => {
      ethereum.removeListener("accountsChanged", accountHandlerRef.current);
      ethereum.removeListener("chainChanged", chainHandlerRef.current);
    };
  }, []);

  return (
    <Web3Context.Provider value={{ web3State, handleWallet }}>
      {children}
    </Web3Context.Provider>
  );
};

export default Web3Provider;