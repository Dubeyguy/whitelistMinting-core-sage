
# ☕ **WhitelistNFT Smart Contract

A simple ERC721-based NFT contract allowing users to mint NFTs only if they are whitelisted. Built using Solidity and OpenZeppelin, deployable on core-blockchains.

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/whitelist-nft.git
cd whitelist-nft
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```env
PRIVATEKEY="your_wallet_private_key"
INFURA_PROJECT_ID="your_infura_project_id"
```

> ⚠️ **Important:** Never share your private key or commit the `.env` file to version control.

---

## 🛠 Hardhat Commands

### Compile Contracts

```bash
npx hardhat compile
```

### Run Tests

```bash
npx hardhat test
```

### Deploy Contract

Use a deployment script:

```bash
npx hardhat run scripts/deploy.js --network mainnet
```

---

## 🔍 Contract Verification

You can verify contracts on Etherscan using Hardhat's verification plugin:

```bash
npx hardhat verify --network mainnet <deployed_contract_address> 
```

## 🔍 Contract Verification

You can verify contracts using Core block explorers:

```bash
npx hardhat verify --network core_testnet2 <deployed_contract_address> <constructor_args>
```

API keys for verification must be included in `.env` as shown above.