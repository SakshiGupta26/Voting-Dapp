import { useState, useEffect } from "react";
import { Web3Context } from "./web3Context";
import { getWeb3State } from "../utils/getWeb3State";
import { handleAccountChange } from "../utils/handleAccountChange";
import { handleChainChange } from "../utils/handleChainChange";

const Web3Provider = ({ children }) => {
  const [web3State, setWeb3State] = useState({
    contractInstance: null,
    selectedAccount: null,
    chainId: null,
  });

  const handleWallet = async () => {
    try {
      const {
        contractInstance,
        selectedAccount,
        chainId,
      } = await getWeb3State();

      setWeb3State({
        contractInstance,
        selectedAccount,
        chainId,
      });
    } catch (error) {
      console.error("Wallet connection failed:", error);
    }
  };

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !window.ethereum
    ) {
      console.log("MetaMask is not installed");
      return;
    }

    const accountHandler = async () => {
      try {
        await handleAccountChange(setWeb3State);
      } catch (error) {
        console.error("Account change error:", error);
      }
    };

    const chainHandler = async () => {
      try {
        await handleChainChange(setWeb3State);
      } catch (error) {
        console.error("Chain change error:", error);
      }
    };

    if (typeof window.ethereum.on === "function") {
      window.ethereum.on(
        "accountsChanged",
        accountHandler
      );

      window.ethereum.on(
        "chainChanged",
        chainHandler
      );
    }

    return () => {
      if (
        window.ethereum &&
        typeof window.ethereum.removeListener ===
          "function"
      ) {
        window.ethereum.removeListener(
          "accountsChanged",
          accountHandler
        );

        window.ethereum.removeListener(
          "chainChanged",
          chainHandler
        );
      }
    };
  }, []);

  return (
    <Web3Context.Provider value={{web3State,handleWallet}}>
      {children}

    </Web3Context.Provider>
  );
};

export default Web3Provider;