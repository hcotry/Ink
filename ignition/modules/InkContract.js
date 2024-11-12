// 1.  Import the `buildModule` function from the Hardhat Ignition module
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules")

// 2. Export a module using `buildModule`
module.exports = buildModule("InkModule", (m) => {

    // 3. Use the `getAccount` method to select the deployer account
    const deployer = m.getAccount(0);
  
    // 4. Deploy  contract
    const ink = m.contract("InkContract", [], {
      from: deployer,
    });
    // 5. Return an object from the module 
    return { ink };
  });