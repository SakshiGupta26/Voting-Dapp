export const handleAccountChange = (setWeb3State) => {
  const accounts = winwindow.ethereum.on("accountsChanged", (accounts) => {
  console.log(accounts[0]);
});

  const selectedAccount = accounts[0] || null;

  setWeb3State((prev) => ({
    ...prev,
    selectedAccount,
  }));
};