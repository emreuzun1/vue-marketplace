declare var window: any;
import Web3 from "web3";
import { abi } from "@/contracts/Adesso.json";
import { type NftAbi } from "@/types/abi.interface";
import type { NFT } from "@/types/nft.interface";
import { IpfsToHttps } from "./ipfsToHttps";
import { sendTransactionAndWait } from "./sendTransactionAndWait";

const web3 = new Web3(window.ethereum);
const contractAddress = "0xF446adad2445302a849a6A4D6D64D8fC94E5Ad1a";
const marketPlaceAddress = "0x7826d461E7ef6Ae101D903a784A15c74E6b0ED60";

const contract = new web3.eth.Contract(abi as NftAbi, contractAddress);

// Send a request to user for get accounts
export const getWalletRequest = async () => {
  if (window.ethereum) {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    return {
      address: accounts[0],
      success: true,
    };
  } else {
    return {
      success: false,
      message: "Please connect your Metamask.",
    };
  }
};

// Returns the address of owned by client
export const connectWalletRequest = async () => {
  if (window.ethereum) {
    try {
      const accounts: string[] = await window.ethereum.request({
        method: "eth_accounts",
      });
      return {
        address: accounts[0],
        success: true,
      };
    } catch (err) {
      return { success: false, message: "Please connect your Metamask." };
    }
  } else {
    return { success: false, message: "Please connect your Metamask." };
  }
};

export const getNfts = async (account: string) => {
  const tokens = await contract.methods.tokensOfOwner(account).call();
  const nftArray: NFT[] = [];

  for (let tokenId of tokens) {
    const uri = await contract.methods.tokenURI(Number(tokenId)).call();
    const response = await fetch(IpfsToHttps(uri));
    const data = await response.json();
    nftArray.push({ ...data, tokenId });
  }
  return nftArray;
};

export const mint = async (
  quantityAmount: number,
  onComplete: () => void,
  onDeny: () => void
) => {
  const transactionParameters = {
    to: contractAddress,
    from: window.ethereum.selectedAddress,
    value: parseInt(
      (parseInt(web3.utils.toWei(0.001, "ether")) * quantityAmount).toString()
    ).toString(16),
    gasLimit: "0",
    data: contract.methods.mint(quantityAmount).encodeABI(),
  };

  sendTransactionAndWait(transactionParameters, onComplete, onDeny);
};

export const checkForApproval = async (tokenId: number) => {
  const isApproved = await contract.methods
    .isApprovedForAll(window.ethereum.selectedAddress, marketPlaceAddress)
    .call();
  return isApproved;
};

export const approveForAllRequest = async (completeApproval: () => void) => {
  try {
    const transactionParameters = {
      to: contractAddress,
      from: window.ethereum.selectedAddress,
      value: "0",
      gasLimit: "1000000",
      data: contract.methods
        .setApprovalForAll(marketPlaceAddress, true)
        .encodeABI(),
    };
    sendTransactionAndWait(transactionParameters, completeApproval);
  } catch (err) {
    console.log(err);
  }
};
