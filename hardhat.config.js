/** @type import('hardhat/config').HardhatUserConfig */
require('@nomicfoundation/hardhat-ethers');
require('@nomicfoundation/hardhat-ignition-ethers');

const privateKey = '735671ab6a191c43bdea2a403e92102ef998d6e531392fbbb37761c4cb867b98';

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  defaultNetwork: "inksepolia",
  networks: {
    inksepolia: {
      url: "https://rpc-gel-sepolia.inkonchain.com/",
      accounts: [privateKey]
    },
  },

};
