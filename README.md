---

# 🐵 MonkeNFT Coupons  
**Redeem exclusive Monke community rewards — from merch discounts to event passes, powered by NFTs.**  

![Project Banner](https://user-images.githubusercontent.com/placeholder/banner.png)

---

## 🚀 Overview  

**MonkeNFT Coupons** is a futuristic Web3 dApp designed for the MonkeDAO community.  
It allows users to **mint NFTs as coupons** that represent exclusive benefits such as:  
- 🎽 *Discounts on official Monke merchandise*  
- 🍌 *Access to the private Discord “Banana Club” lounge*  
- 🎟️ *Free VIP event tickets for upcoming Monke meetups*  

Instead of traditional promo codes or centralized coupon systems, MonkeNFT Coupons uses **blockchain-based NFTs** to ensure transparency, authenticity, and community ownership.  

---

## 🧠 Core Idea  

> Traditional coupons can be duplicated, reused, or expire without clear tracking.  
> MonkeNFT Coupons solves this by turning each coupon into a verifiable NFT on the blockchain.  

Each NFT coupon:  
- is **unique and tamper-proof**  
- can have an **expiry date**  
- is **owned by the user’s wallet**, not a centralized server  

Built with ❤️ by **Victory**, this project showcases how NFTs can move beyond collectibles and become **utility assets** that drive real-world engagement.  

---

## 🛠️ Tech Stack  

| Layer | Technology Used |
|-------|------------------|
| **Smart Contract** | Solidity |
| **Testing & Deployment** | Hardhat |
| **Frontend** | React.js |
| **Blockchain Network** | Sepolia Testnet |
| **Wallet Integration** | MetaMask |
| **Provider** | Infura |
| **Version Control** | Git & GitHub |

---

## 📦 Folder Structure

monke-nft-coupons/ ├── backend/                 # Smart contracts + Hardhat setup │   ├── contracts/ │   │   └── MonkeCoupon.sol │   ├── scripts/ │   └── hardhat.config.js │ ├── frontend/                # React frontend for the dApp │   ├── src/ │   │   ├── App.js │   │   ├── App.css │   │   ├── components/ │   │   └── utils/ │   └── package.json │ └── README.md                # You’re here

---

## ⚙️ Installation & Setup  

### 🧩 1. Clone the repository  
```bash
git clone https://github.com/vick-noob/monke-nft-coupons.git
cd monke-nft-coupons


---

💻 2. Install dependencies

Backend (Hardhat)

cd backend
npm install

Frontend (React)

cd ../frontend
npm install


---

🧱 3. Compile & Deploy the Smart Contract

Make sure your .env file in the backend folder contains:

PRIVATE_KEY=your_wallet_private_key
INFURA_API_KEY=your_infura_api_key

Then run:

npx hardhat compile
npx hardhat run scripts/deploy.js --network sepolia

After successful deployment, copy your contract address and update it in: frontend/src/utils/contractABI.js


---

🌐 4. Run the Frontend

cd frontend
npm start

The app will open at:
👉 http://localhost:3000


---

💡 Features

✅ Mint NFT Coupons: Each NFT represents a discount or reward.
✅ Wallet Connection: Seamless MetaMask integration.
✅ Expiry Tracking: Coupons expire after a certain duration.
✅ Dropdown Menu: Access to Minted NFTs, Coupon Expiry, and About sections.
✅ Futuristic UI: Neon-glow theme inspired by MonkeDAO’s aesthetic.
✅ Fully Functional Frontend & Backend Integration.


---

🎥 Demo Video

Watch the full demo here:
🎬 https://drive.google.com/file/d/1OA8ZnIPGdvCu5iqBYGJFj7SWQ_E5ALan/view?usp=drivesdk


---

🧩 Challenges Faced

1. MetaMask Slow Response:
During testing, MetaMask sometimes lagged or froze due to local network caching.
This was fixed by clearing site data and resetting the account.


2. Frontend Alignment Issues:
UI alignment was lost after style changes; rebuilt with consistent grid and background layers.


3. Background Integration:
Creating the glowing, futuristic background without motion lag required CSS gradient blending and fine-tuning.


4. Push Conflicts on GitHub:
Solved after learning proper use of git pull --rebase and committing staged changes correctly.


5. OBS Screen Recording Setup:
Configuring OBS to record both screen and voice smoothly for the demo took several attempts.




---

🚧 Future Improvements

✨ Add dynamic NFT expiration countdowns on each coupon card.
✨ Display redeemed NFTs with metadata (image + description).
✨ Add backend validation to prevent duplicate minting.
✨ Implement on-chain coupon redemption via QR code scanning.
✨ Enhance mobile UI responsiveness.


---

🏁 Conclusion

MonkeNFT Coupons demonstrates how Web3 technology can make community rewards transparent and verifiable through NFTs.
It combines simplicity, design, and decentralization — all built with hard work, passion, and consistency.

> “Built with 💛 by Victory — for the MonkeDAO community and the Web3 future.”




---

🧾 Commands Summary

For quick reference:

# Backend
cd backend
npm install
npx hardhat compile
npx hardhat run scripts/deploy.js --network sepolia

# Frontend
cd ../frontend
npm install
npm start


---
