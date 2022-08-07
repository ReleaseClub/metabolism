import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/gX8wdpwb8rjeJ7rG2ohv99REWOkts-mR", //Infura url with projectId
      accounts: [""] // add the account that will deploy the contract (private key)
     }
    }
};

export default config;
