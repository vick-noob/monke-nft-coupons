# 🐵 Monke Coupon NFT

This project is built for the MonkeDAO x Cypherpunk hackathon track — “Next Evolution of Groupon - but user-owned, borderless, and Web3-powered”.

## 📦 Overview

MonkeCouponNFT allows users to mint and redeem unique NFT coupons powered by Web3. Each NFT acts as a digital coupon representing a discount, reward, or special offer.

## 🛠 Tech Stack

- Solidity (Smart Contract)
- Hardhat (Deployment & Testing)
- Ethers.js + React (Frontend Interaction)
- Sepolia Testnet (Ethereum)
- OpenZeppelin Contracts

## 🌐 Deployment

Smart Contract Address: 0x3A110d57905AC213166c495d7ED3997E4ca631aC  
Network: Sepolia Testnet  
Etherscan: [View on Etherscan](https://sepolia.etherscan.io/address/0x3A110d57905AC213166c495d7ED3997E4ca631aC)

## 💻 Local Setup

`bash
git clone <your-repo-link>
cd monke-nft-coupons/backend
npm install
npx hardhat compile
npx hardhat run scripts/deploy.cjs --network sepolia
