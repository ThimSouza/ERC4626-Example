import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";



const config: HardhatUserConfig = {
  solidity: "0.8.9",
};
const KOVAN_API_KEY = "{removed}";

const KOVAN_PRIVATE_KEY = "{removed}";

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.9"
      },
      {
        version: "0.8.0"
      },
      {
        version: "0.8.16"
      },
    ],
    networks: {
      kovan: {
        url: `https://kovan.infura.io/v3/${KOVAN_API_KEY}`,
        accounts: [`0x${KOVAN_PRIVATE_KEY}`]

      }
    }
  }};

export default config;
