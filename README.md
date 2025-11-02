
# 🦧 Monke NFT Coupons  

Redeem exclusive NFT-based coupons and access rewards from the **MonkeDAO community** — including merch discounts, event passes, and private club perks.  
Built for the **Cypherpunk Hackathon** and powered by **Solidity, Hardhat, and React**.  

---

## 🎥 Demo Video  
📽️ Watch the project demo here:  
👉 [Google Drive Video Link](https://drive.google.com/file/d/1RAylhXmttM7QSaTGpyG38TLRDruXkiBO/view?usp=drivesdk)  

> ⚠️ A clearer and updated demo will be uploaded soon. This video demonstrates the core functionality, wallet connection, and NFT minting flow.  

---

## 🌍 Project Overview  
Each coupon NFT represents a unique reward:
- 🦍 **Jungle Hoodie** – 20% OFF official Monke merch  
- 🍌 **Banana Club** – Access to private Discord lounge  
- 🎫 **VIP Event Ticket** – Free entry to the next Monke meetup  

Each NFT is minted separately, ensuring users can claim each reward independently.

---

## 🧠 Tech Stack  
- **Frontend:** React + Ethers.js + Web3Modal  
- **Smart Contract:** Solidity + Hardhat  
- **Network:** Ethereum Sepolia Testnet  
- **Storage:** IPFS via Pinata  

---

## 🛠 Installation & Setup  

1. **Clone this repository:**
   ```bash
   git clone https://github.com/vick-noob/monke-nft-coupons.git

2. Navigate into the project:

cd monke-nft-coupons


3. Install dependencies:

npm install




---

⚙️ Compatibility Note

> Important: If you encounter dependency or Hardhat version errors while setting up the project, please use Node.js v20 or lower and run:

npm install --legacy-peer-deps

This ensures all packages install smoothly and the project compiles correctly.




---

4. Compile the smart contracts:

npx hardhat compile


5. Deploy to Sepolia Testnet:

npx hardhat run scripts/deploy.cjs --network sepolia


6. Run the frontend app:

cd frontend
npm start




---

💡 Features

✅ Connect wallet using MetaMask
✅ Mint individual NFT coupons — each with unique metadata
✅ Interact with deployed CouponNFT smart contract
✅ Fully compatible with Ethereum Sepolia testnet
✅ Clean and minimal user interface


---

🧱 Smart Contract

Contract Name: CouponNFT
Deployed Address (Sepolia): 0xA3B245cf301DF92058fa811cE9E10156C087117C
Language: Solidity ^0.8.20
Framework: Hardhat


---

🧩 Troubleshooting

🚫 MetaMask not connecting

Make sure the Sepolia Test Network is enabled in your MetaMask.

If not visible, click your network dropdown → “Show Test Networks” → enable “Sepolia”.


⚡ Minting fails with “Execution prevented because the circuit breaker is open”

This is caused by temporary RPC rate limits on Sepolia.

Fix:

1. Disconnect MetaMask and reconnect.


2. Try again after a minute or two.


3. Make sure your Infura RPC key in .env is valid.




🧰 Compilation or Hardhat version errors

Use:

npm install --legacy-peer-deps

Or downgrade Node.js to v20.x or v18.x for full compatibility.


🦊 No MetaMask popup during mint

Check if your browser blocks pop-ups or extensions.

Close and reopen your MetaMask extension.

Make sure you have test ETH on Sepolia to pay for gas.



---

👨🏽‍💻 Author

Victory Onyeajunwanne
Frontend Engineer & Smart Contract Developer

💬 "Built with 💛 for the MonkeDAO community — and the web3 future."


---

📜 License

This project is licensed under the MIT License.


---
