# 🦧 Monke NFT Coupons

MonkeDAO presents **Monke NFT Coupons** — a Web3-powered discount and access pass system for the Monke community.  
Users can mint unique NFT coupons that unlock real-world and digital rewards like merch discounts, private Discord access, and VIP event tickets.

---

## 🚀 Project Overview

This project demonstrates a decentralized reward mechanism powered by **smart contracts on the Sepolia testnet**.  
Each NFT coupon is minted directly to a connected wallet and can be verified on-chain.

---

## 🧱 Smart Contract

- **Network:** Sepolia Testnet  
- **Contract Address:** `0xA3B245cf301DF92058fa811cE9E10156C087117C`  
- **Standard:** ERC-721 (NFT)  
- **Framework:** Hardhat + Ethers.js  
- **Deployed by:** Victory Onyeajunwanne  

You can verify the deployed contract on Etherscan using your Sepolia account.

---

### 🔒 Developer Notes  

> 🧠 **Important:**  
> You don’t need to redeploy the contract — it’s already live on the Sepolia network at the address shown above.  
> The frontend automatically connects to that deployed instance.  
>
> If you choose to redeploy for testing, a new contract address will be created (this is normal).  
> In that case, simply update the address in `App.js` and use **your own Infura API key** in a `.env` file:
>
> ```
> SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY
> PRIVATE_KEY=your_wallet_private_key
> ```
>
> The `.env` file is intentionally **ignored in GitHub** for security reasons.

---

## 🧩 Features

- 🔗 **Wallet connection** via MetaMask  
- 🎟 **NFT coupon minting** (unique metadata for each offer)  
- 🍌 3 distinct NFTs:
  - Jungle Hoodie (20% merch discount)  
  - Banana Club (Discord access)  
  - VIP Event Ticket (free entry to events)
- 🪙 Built on **Ethers.js + React**
- 🔐 Fully on-chain NFT proof of ownership

---

## 🖥️ Frontend Tech Stack

| Tech | Description |
|------|--------------|
| **React.js** | Frontend framework |
| **Ethers.js** | Blockchain interactions |
| **Web3Modal** | Wallet connection |
| **Hardhat** | Smart contract framework |
| **Solidity 0.8.28** | Contract language |

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/vick-noob/monke-nft-coupons.git
cd monke-nft-coupons

2️⃣ Install Dependencies

cd backend && npm install
cd ../frontend && npm install

3️⃣ Configure Environment Variables

Create a .env file inside the backend folder with your Infura RPC and wallet private key:

SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY
PRIVATE_KEY=your_wallet_private_key

4️⃣ (Optional) Deploy the Contract

> Only needed if you want to test a new deployment.
A live contract is already deployed and ready to use.



npx hardhat run scripts/deploy.cjs --network sepolia

5️⃣ Run the Frontend

cd frontend
npm start

Then open http://localhost:3000 in your browser.


---

🎥 Demo Video

👉 Watch the current demo here:https://drive.google.com/file/d/1RAylhXmttM7QSaTGpyG38TLRDruXkiBO/view?usp=drivesdk

> 🎬 A clearer updated video will be uploaded soon — this version shows the functional minting process (made before the latest UI fixes).




---

🧑‍💻 Author

Victory Onyeajunwanne
Frontend Engineer & Web3 Enthusiast
Built with 💛 during the Cypherpunk Hackathon — MonkeDAO track.


---

🪶 License

This project is licensed under the MIT License — feel free to build on it or expand it for community NFT integrations.


---
