# 🗳️ Decentralized Voting DApp

A secure and transparent blockchain-based voting application built using smart contracts. This DApp allows eligible users to cast votes in a decentralized manner while ensuring transparency, immutability, and trust.

---

## 📌 Features

- Secure blockchain-based voting
- One vote per registered voter
- Transparent vote counting
- Real-time election results
- Admin-controlled candidate registration
- Wallet integration (MetaMask)
- Immutable voting records
- Responsive user interface

---

## 🛠️ Tech Stack

### Frontend
- React.js
- HTML5
- CSS3
- JavaScript

### Blockchain
- Solidity
- Ethereum
- Hardhat (or Truffle)

### Web3
- Ethers.js (or Web3.js)

### Wallet
- MetaMask

---

## 📂 Project Structure

```
Voting-DApp/
│
├── contracts/
│   └── Voting.sol
│
├── scripts/
│   └── deploy.js
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── test/
│
├── artifacts/
│
├── hardhat.config.js
│
├── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/voting-dapp.git
cd voting-dapp
```

### Install dependencies

```bash
npm install
```

### Compile smart contracts

```bash
npx hardhat compile
```

### Deploy contract

```bash
npx hardhat run scripts/deploy.js --network localhost
```

or

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

### Start frontend

```bash
cd frontend
npm install
npm start
```

---

## 🚀 Usage

1. Start a local blockchain (optional).

```bash
npx hardhat node
```

2. Deploy the smart contract.

3. Connect MetaMask.

4. Register candidates.

5. Vote using your Ethereum wallet.

6. View election results after voting ends.

---

## 🔐 Smart Contract Functions

| Function | Description |
|----------|-------------|
| `addCandidate()` | Register a new candidate |
| `vote()` | Cast a vote |
| `getCandidates()` | View all candidates |
| `getWinner()` | Retrieve election winner |
| `hasVoted()` | Check if a voter has already voted |

---

## 📸 Screenshots

Add screenshots of:

- Home Page
- Candidate List
- Voting Screen
- MetaMask Connection
- Election Results

---

## 🔒 Security Features

- One vote per wallet
- Immutable blockchain records
- Smart contract validation
- Transparent vote counting
- No centralized database manipulation

---

## 📈 Future Enhancements

- Voter authentication
- Multi-election support
- DAO governance
- Mobile application
- IPFS integration
- Zero-knowledge proof (ZKP) voting
- NFT-based voter identity

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Your Name**

- GitHub: https://github.com/yourusername
- Email: your.email@example.com

---

## ⭐ Acknowledgements

- Ethereum
- Solidity
- Hardhat
- Ethers.js
- MetaMask
- OpenZeppelin
