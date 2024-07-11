require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

module.exports = {
  
  solidity: {
    version: "0.8.18",
  },
  networks: {
    pulse_mainnet: {
      url: "https://rpc.pulsechain.com",
      accounts: ["ebfe6e2041384c0d2d47feb3f88d11925b16ee72484aebf5d42dba5322f9b75d"]
    },
    pulse_testnet: {
      url: "https://pulsechain-testnet.publicnode.com",
      accounts: ["46daaa2c2ef60ed33b52b9b7edaa5e2ef1d9cd4177044437064d9352530b8166"]
    },
  },
};
