const hre = require("hardhat");

async function main() {
  console.log("Deploying MonkeCouponNFT...");

  const CouponNFT = await hre.ethers.getContractFactory("CouponNFT");
  const couponNFT = await CouponNFT.deploy();

  await couponNFT.waitForDeployment();
  const address = await couponNFT.getAddress();

  console.log("CouponNFT deployed successfully at:", address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Deployment failed:", error);
    process.exit(1);
  });
