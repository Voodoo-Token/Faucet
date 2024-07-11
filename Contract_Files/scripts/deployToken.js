
const hre = require("hardhat");

async function main() {

  const Magic = await hre.ethers.getContractFactory("Magic");
  const magic = await Magic.deploy();

  await magic.deployed();

  console.log("Deployed to: ", magic.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
