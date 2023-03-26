//require("@nomicfoundation/hardhat-toolbox");
// require("dotenv").config();
// require("hardhat");


require("@nomiclabs/hardhat-waffle");
require("dotenv").config({path: ".env"});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      forking: {
        url: process.env.POLYGON_URL,
      },
    },
  },
};
