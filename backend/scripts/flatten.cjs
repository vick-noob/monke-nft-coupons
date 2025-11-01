const { exec } = require("child_process");
const fs = require("fs");

async function flatten() {
  console.log("⚙️ Flattening CouponNFT.sol ...");

  try {
    // Run Hardhat flatten command
    const { stdout, stderr } = await new Promise((resolve, reject) => {
      exec("npx hardhat flatten contracts/CouponNFT.sol", (error, stdout, stderr) => {
        if (error) reject({ error, stderr });
        else resolve({ stdout, stderr });
      });
    });

    // Save flattened output to file
    fs.writeFileSync("flattened_CouponNFT.sol", stdout);
    console.log("✅ Flattened contract saved as flattened_CouponNFT.sol");
  } catch (err) {
    console.error("❌ Flattening failed:", err.stderr  err.error?.message  err);
  }
}

flatten();