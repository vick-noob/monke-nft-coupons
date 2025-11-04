import React, { useEffect, useMemo, useState } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import "./App.css";
import contractABI from "./CouponNFT.json";

// 👉 Your deployed contract address (Sepolia)
const CONTRACT_ADDRESS = "0xA3B245cf301DF92058fa811cE9E10156C087117C";

// Unique metadata for each coupon (you can swap to your real IPFS links)
const METADATA_URIS = {
  hoodie: "https://gateway.pinata.cloud/ipfs/QmHoodieExampleURI",
  banana: "https://gateway.pinata.cloud/ipfs/QmBananaExampleURI",
  vip: "https://gateway.pinata.cloud/ipfs/QmVipExampleURI",
};

// Expiry policy (ms). Example: 30 days
const EXPIRY_MS = 30 * 24 * 60 * 60 * 1000;

function App() {
  const [account, setAccount] = useState("");
  const [minting, setMinting] = useState({
    hoodie: false,
    banana: false,
    vip: false,
  });
  const [panelOpen, setPanelOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("minted"); // minted | expiry | about
  const [mintedList, setMintedList] = useState(() => {
    try {
      const raw = localStorage.getItem("mintedCoupons");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("mintedCoupons", JSON.stringify(mintedList));
  }, [mintedList]);

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

  const mintNFT = async (couponType) => {
    if (!account) {
      alert("Please connect your wallet first.");
      return;
    }

    // flip only this coupon’s spinner
    setMinting((m) => ({ ...m, [couponType]: true }));

    try {
      const web3Modal = new Web3Modal();
      const instance = await web3Modal.connect();
      const provider = new ethers.BrowserProvider(instance);
      const signer = await provider.getSigner();

      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        contractABI.abi,
        signer
      );

      // choose metadata
      const metadataURI = METADATA_URIS[couponType];
      if (!metadataURI) throw new Error("Unknown coupon type");

      console.log(`Minting ${couponType.toUpperCase()} for:`, account);

      const tx = await contract.createCouponNFT(account, metadataURI);
      console.log("Transaction sent:", tx.hash);
      const receipt = await tx.wait();

      // Try to read the last tokenId (tokenCounter - 1)
      let tokenId = null;
      try {
        const counter = await contract.tokenCounter();
        // tokenCounter increments after mint, last minted is counter-1
        tokenId = Number(counter) - 1;
      } catch (e) {
        console.warn("Could not fetch tokenId; saving without it.", e);
      }

      const now = Date.now();
      const item = {
        type: couponType,
        tokenId,
        txHash: tx.hash,
        mintedAt: now,
        expiresAt: now + EXPIRY_MS,
      };

      setMintedList((list) => [item, ...list]);
      alert(`✅ ${couponType.toUpperCase()} coupon minted!`);
    } catch (err) {
      console.error("Minting error:", err);
      alert("Minting failed. Check console for details.");
    } finally {
      setMinting((m) => ({ ...m, [couponType]: false }));
    }
  };

  // Helpers for expiry countdowns
  const now = Date.now();
  const withTimeLeft = useMemo(
    () =>
      mintedList.map((m) => ({
        ...m,
        msLeft: Math.max(0, m.expiresAt - now),
      })),
    [mintedList, now]
  );

  const formatMs = (ms) => {
    const d = Math.floor(ms / (24 * 60 * 60 * 1000));
    const h = Math.floor((ms % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const m = Math.floor((ms % (60 * 60 * 1000)) / (60 * 1000));
    return `${d}d ${h}h ${m}m`;
  };

  return (
    <div className="page">
      {/* Animated background */}
      <div className="bg" aria-hidden />

      {/* Header */}
      <header className="header">
        <div className="brand">
          <span className="logo">🦧</span>
          <span className="title">Monke NFT Coupons</span>
        </div>

        <div className="actions">
          {!account ? (
            <button className="btn primary" onClick={connectWallet}>
              Connect Wallet
            </button>
          ) : (
            <span className="account">
              {account.slice(0, 6)}...{account.slice(-4)}
            </span>
          )}

          <button
            className="icon-btn"
            aria-label="Open menu"
            onClick={() => setPanelOpen((o) => !o)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* Main card */}
      <main className="container">
        <section className="intro">
          <h1>Claim your perks</h1>
          <p>Exclusive rewards for the Monke community. Pick one and mint.</p>
        </section>

        <section className="grid">
          {/* Hoodie */}
          <article className="card">
            <div className="emoji">🦍</div>
            <h3>Jungle Hoodie</h3>
            <p>20% off official merch</p>
            <button
              className="btn"
              onClick={() => mintNFT("hoodie")}
              disabled={minting.hoodie}
            >
              {minting.hoodie ? "Minting…" : "Claim NFT"}
            </button>
          </article>

          {/* Banana Club */}
          <article className="card">
            <div className="emoji">🍌</div>
            <h3>Banana Club</h3>
            <p>Access to private Discord lounge</p>
            <button
              className="btn"
              onClick={() => mintNFT("banana")}
              disabled={minting.banana}
            >
              {minting.banana ? "Minting…" : "Claim NFT"}
            </button>
          </article>

          {/* VIP */}
          <article className="card">
            <div className="emoji">🎫</div>
            <h3>VIP Event Ticket</h3>
            <p>Free entry to the next meetup</p>
            <button
              className="btn"
              onClick={() => mintNFT("vip")}
              disabled={minting.vip}
            >
              {minting.vip ? "Minting…" : "Claim NFT"}
            </button>
          </article>
        </section>
      </main>

      {/* Slide-out panel */}
      <aside className={`panel ${panelOpen ? "open" : ""}`}>
        <div className="panel-header">
          <nav className="tabs">
            <button
              className={`tab ${activeTab === "minted" ? "active" : ""}`}
              onClick={() => setActiveTab("minted")}
            >
              Minted NFTs
            </button>
            <button
              className={`tab ${activeTab === "expiry" ? "active" : ""}`}
              onClick={() => setActiveTab("expiry")}
            >
              Coupon Expiry
            </button>
            <button
              className={`tab ${activeTab === "about" ? "active" : ""}`}
              onClick={() => setActiveTab("about")}
            >
              About
            </button>
          </nav>
          <button className="icon-btn" onClick={() => setPanelOpen(false)}>
            ✕
          </button>
        </div>

        <div className="panel-content">
          {activeTab === "minted" && (
            <div className="list">
              {mintedList.length === 0 ? (
                <p className="muted">No coupons minted yet.</p>
              ) : (
                mintedList.map((m, i) => (
                  <div key={i} className="list-item">
                    <div className="badge">{m.type.toUpperCase()}</div>
                    <div className="meta">
                      {m.tokenId !== null && m.tokenId !== undefined
                        ? `Token #${m.tokenId}`
                        : "Token pending"}
                      <a
                        className="tx"
                        href={`https://sepolia.etherscan.io/tx/${m.txHash}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Tx
                      </a>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === "expiry" && (
            <div className="list">
              {withTimeLeft.length === 0 ? (
                <p className="muted">No active coupons.</p>
              ) : (
                withTimeLeft.map((m, i) => (
                  <div key={i} className="list-item">
                    <div className="badge">{m.type.toUpperCase()}</div>
                    <div
                      className={`countdown ${m.msLeft === 0 ? "expired" : ""}`}
                    >
                      {m.msLeft === 0
                        ? "Expired"
                        : `Expires in ${formatMs(m.msLeft)}`}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === "about" && (
            <div className="about">
              <h4>About this dApp</h4>
              <p>
                Monke NFT Coupons is a simple Web3 experience for redeemable
                perks: merch discounts, private community access, and event
                tickets.
              </p>
              <p>
                Built with <code>ethers v6</code>, <code>Web3Modal</code>, and
                an ERC-721 smart contract.
              </p>
              <p className="muted">Network: Sepolia</p>
            </div>
          )}
        </div>
      </aside>

      {/* Footer */}
      <footer className="footer">
        <span>Built with 💛 by Victory</span>
      </footer>
    </div>
  );
}

export default App;
