// hardhat-fix.js
import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

// ✅ Properly define filename and dirname
const __filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// ✅ Path to Hardhat CLI
const hardhatCLI = path.join(
  __dirname,
  "node_modules",
  "hardhat",
  "dist",
  "src",
  "cli.js"
);

console.log("⚙️  Running Hardhat from:", hardhatCLI);

// ✅ Pass through commands like "compile"
const args = process.argv.slice(2);

// ✅ Execute Hardhat CLI
const child = spawn("node", [hardhatCLI, ...args], {
  stdio: "inherit",
  shell: true,
});

child.on("exit", (code) => process.exit(code));
