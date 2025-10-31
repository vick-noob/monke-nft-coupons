import React, { useState } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import "./App.css";

function App() {
  const [account, setAccount] = useState("");

  const connectWallet = async () => {
    try {
      const web3Modal = new Web3Modal();
      const instance = await web3Modal.connect();
      const provider = new ethers.BrowserProvider(instance);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setAccount(address);
    } catch (error) {
      console.error("Wallet connection failed:", error);
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        <h1>🦧 Monke NFT Coupons</h1>
        <p>
          Redeem exclusive <strong>Monke community rewards</strong> — from merch
          discounts to event passes. Connect your wallet to unlock the jungle
          perks.
        </p>

        {!account ? (
          <button className="connect-btn" onClick={connectWallet}>
            Connect Wallet
          </button>
        ) : (
          <p className="connected">
            ✅ Connected: {account.slice(0, 6)}...{account.slice(-4)}
          </p>
        )}

        <div className="coupon-section">
          <h2>Exclusive Discounts 🎁</h2>
          <div className="coupon-grid">
            <div className="coupon-card">
              <h3>🦍 Jungle Hoodie</h3>
              <p>Get 20% OFF official Monke merch</p>
              <button>Claim NFT Coupon</button>
            </div>
            <div className="coupon-card">
              <h3>🍌 Banana Club</h3>
              <p>Access premium Discord lounge</p>
              <button>Claim NFT Coupon</button>
            </div>
            <div className="coupon-card">
              <h3>🎫 VIP Event Ticket</h3>
              <p>Free entry to next Monke meetup</p>
              <button>Claim NFT Coupon</button>
            </div>
          </div>
        </div>

        <footer>
          <p>Built with 💛 by Victory</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
