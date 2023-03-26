//const { ethers } = require("ethers");
const axios = require("axios");
require("dotenv").config();

const hre = require("hardhat");

const { ethers } = hre;
const { Network,TxBuilderV2,ChainId,Market, tokens, getAddress } = require("@aave/protocol-js");
const LendingPoolABI = require("../abis/LendingPool.json");
const aave = "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9";



//const provider = new ethers.providers.getDefaultProvider("http://localhost:8545");
//const wethAddress = "";

async function main() {
    console.log("Starting fork script");



    const provider = new hre.ethers.providers.JsonRpcProvider();
    const [deployer] = await hre.ethers.getSigners();
    const wallet = new ethers.Wallet(process.env.WALLET);
    const connectedWallet = wallet.connect(provider);
    const weth = "0x4d5F47FA6A74757f35C14fD3a6Ef8E3C9BC514E8";

    console.log("Deployer address: ", deployer.address);

    const chainId = ChainId.mainnet;
    
    const txbuilder = new TxBuilderV2(Network.mainnet, provider);
    const lendingPool = txbuilder.getLendingPool(Market.main);

    const aaveContract = new ethers.Contract(aave,LendingPoolABI,provider);

    console.log(await ethers.utils.parseEther("1"));
    //ethers.utils.
    const transaction = await aaveContract.connect(connectedWallet).deposit(weth, ethers.utils.parseEther("1"), "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199", 0);

    //const transaction = await aaveContract.connect(deployer).deposit(wethAddress, ethers.utils.parseEther("1"), deployer.address, 0);

    console.log("Transaction: ", transaction);
}

main();