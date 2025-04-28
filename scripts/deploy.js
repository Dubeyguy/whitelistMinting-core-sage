const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying WhitelistNFT contract from:", deployer.address);

  // Deploy WhitelistNFT contract
  const WhitelistNFT = await hre.ethers.getContractFactory("WhitelistNFT");
  const whitelistNFT = await WhitelistNFT.deploy();

  console.log("✅ WhitelistNFT contract deployed at:", whitelistNFT.address);

}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
