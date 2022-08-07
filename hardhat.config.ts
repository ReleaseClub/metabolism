import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/gX8wdpwb8rjeJ7rG2ohv99REWOkts-mR", //Infura url with projectId
      accounts: ["dde4ca9caddb09c9feb35a357d07d7f9d2e48e1e8649c13d26ee3dbe8e027685"] // add the account that will deploy the contract (private key)
     }
    }
};

export default config;
