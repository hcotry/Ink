// scripts/set-value.js
async function main() {
    
    const InkContract = await ethers.getContractFactory('InkContract');
    
    const Ink = await InkContract.attach('0x6666666666');
    
    await Ink.setGreeting("Hello, World!");
    
    const value = await Ink.greeting();
    console.log(`The new value is: ${value}`);
  }
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });