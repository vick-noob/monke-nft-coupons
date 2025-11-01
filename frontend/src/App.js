import React, { useState } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import "./App.css";
import contractABI from "./CouponNFT.json";

// Deployed contract on Sepolia
const CONTRACT_ADDRESS = "0xA3B245cf301DF92058fa811cE9E10156C087117C";

function App() {
  const [account, setAccount] = useState("");
  const [isMinting, setIsMinting] = useState(false);

  const connectWallet = async () => {
    try {
      const web3Modal = new Web3Modal();
      const instance = await web3Modal.connect();
      const provider = new ethers.BrowserProvider(instance);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setAccount(address);
      console.log("Wallet connected:", address);
    } catch (err) {
      console.error(err);
      alert("Couldn’t connect wallet. Try again.");
    }
  };

  const mintNFT = async () => {
    if (!account) {
      alert("Please connect your wallet first.");
      return;
    }

    try {
      setIsMinting(true);

      const web3Modal = new Web3Modal();
      const instance = await web3Modal.connect();
      const provider = new ethers.BrowserProvider(instance);
      const signer = await provider.getSigner();

      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        contractABI.abi,
        signer
      );

      console.log("Connected to contract:", contract.target);

      const tx = await contract.createCouponNFT(
        account,
        "https://gateway.pinata.cloud/ipfs/QmExampleMetadataURI"
      );

      console.log("Transaction sent:", tx.hash);
      await tx.wait();

      alert("NFT coupon minted successfully!");
    } catch (err) {
      console.error("Minting error:", err);
      alert("Minting failed. Check console for details.");
    } finally {
      setIsMinting(false);
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        <h1>🦧 Monke NFT Coupons</h1>
        <p>
          Redeem exclusive <strong>Monke community rewards</strong> — from merch
          discounts to event passes.
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
              <p>Get 20% off official Monke merch</p>
              <button onClick={mintNFT} disabled={isMinting}>
                {isMinting ? "Minting..." : "Claim NFT Coupon"}
              </button>
            </div>

            <div className="coupon-card">
              <h3>🍌 Banana Club</h3>
              <p>Access the private Discord lounge</p>
              <button onClick={mintNFT} disabled={isMinting}>
                {isMinting ? "Minting..." : "Claim NFT Coupon"}
              </button>
            </div>

            <div className="coupon-card">
              <h3>🎫 VIP Event Ticket</h3>
              <p>Free entry to the next Monke meetup</p>
              <button onClick={mintNFT} disabled={isMinting}>
                {isMinting ? "Minting..." : "Claim NFT Coupon"}
              </button>
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
