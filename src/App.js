import React, { useEffect, useState } from 'react';
import { ethers } from "ethers";

function App() {
  const [accounts, setCurrentAccount] = useState();
  const [balance, setBalance] = useState();

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;

  useEffect(() => {
    const connectWallet = async () => {
      await provider.send("eth_requestAccounts", []);
      
    };
    
    const AccountDetail = async () => {
      const accounts = await ethereum.request({ method: "eth_accounts" });
      setCurrentAccount(accounts[0]);
      const balance = await provider.getBalance(accounts[0]);
      setBalance(ethers.utils.formatEther(balance));
    }

    connectWallet()
      .catch(console.error)
    AccountDetail()
      .catch(console.error);
  }, []);

  return (
    <div className="container">
      <div className="row mt-5">

        <div className="col">
          <p>Account Balance: {balance} ETH</p>
        </div>
          </div>
        </div>
  );
}

export default App;
