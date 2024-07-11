import { ethers } from 'ethers';
// import ERC20 from "./ERC20.json" assert { type: 'json' };
import FAUCET from "./Faucet.json" assert { type: 'json' };

let provider = new ethers.providers.JsonRpcProvider("https://rpc.pulsechain.com"); // MAINNET
// let provider = new ethers.providers.JsonRpcProvider("https://pulsechain-testnet.publicnode.com"); // TESTNET

const FaucetAddress = "0xfB3c2cc7Aea25C176eE9FA1bc08A4B7D639d928B";
// const TokenAddress = "0x2Cd26F8973b9A465f3862B4b30Eea0e442e5E39C";


export const requestTokens = async (signer) => {
    try {
        let faucet = new ethers.Contract(FaucetAddress, FAUCET.abi, signer);
        let request = await faucet.requestTokens();
        return request;
    } catch (error) {
        console.error(`Error in requestTokens: ${error}`);
    }
}

export const hasRequested = async (signer) => {
    try {
        let faucet = new ethers.Contract(FaucetAddress, FAUCET.abi, signer);
        const addr = await signer.getAddress();
        let request = await faucet.hasReceived(addr);
        return request;
    } catch (error) {
        console.error(`Error in requestTokens: ${error}`);
    }
}
