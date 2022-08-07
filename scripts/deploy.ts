import { ethers } from "hardhat";

async function main() {


  const ReleaseClub = await ethers.getContractFactory("ReleaseClub");
  const club = await ReleaseClub.deploy("TESTCLUB");

  await club.deployed();

  console.log("Lock with 1 ETH deployed to:", club.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
