declare var window: any;
import Web3 from "web3";
import { abi } from "@/contracts/Marketplace.json";
import { abi as adessoAbi } from "@/contracts/AdessoOKR.json";
import { type MarketplaceAbi, type NftAbi } from "@/types/abi.interface";
import type { Sale } from "@/types/sale.interface";

const web3 = new Web3(window.ethereum);
const contractAddress = "0x7826d461E7ef6Ae101D903a784A15c74E6b0ED60";

const contract = new web3.eth.Contract(abi as MarketplaceAbi, contractAddress);

export const createSale = async (tokenId: number, price: number) => {
  const transactionParameters = {
    to: contractAddress,
    from: window.ethereum.selectedAddress,
    value: 0,
    gasLimit: "0",
    data: contract.methods
      .createSale(
        tokenId,
        "0x7B917d4e12AA0a82eE04F3bd938bd1e44d0cfe5E",
        web3.utils.toWei(price, "ether")
      )
      .encodeABI(),
  };

  const tx = await window.ethereum.request({
    method: "eth_sendTransaction",
    params: [transactionParameters],
  });
};

export const getAllSales = async () => {
  const sales: Sale[] = await contract.methods.getAllSales().call();
  const result: Sale[] = [];

  for (const sale of sales) {
    if (sale.isSold) continue;
    const nftContract = new web3.eth.Contract(
      adessoAbi as NftAbi,
      sale.nftContract
    );
    const uri = await nftContract.methods.tokenURI(Number(sale.tokenId)).call();
    const response = await fetch(uri);
    const data = await response.json();
    result.push({ ...data, ...sale });
  }
  return result;
};

export const buyNft = async (saleId: number, price: bigint): Promise<void> => {
  const transactionParameters = {
    to: contractAddress,
    from: window.ethereum.selectedAddress,
    value: price.toString(16),
    gasLimit: "0",
    data: contract.methods.completeSale(Number(saleId)).encodeABI(),
  };

  await window.ethereum.request({
    method: "eth_sendTransaction",
    params: [transactionParameters],
  });
};

export const cancelSale = async (saleId: number) => {
  const transactionParameters = {
    to: contractAddress,
    from: window.ethereum.selectedAddress,
    value: 0,
    gasLimit: "0",
    data: contract.methods.cancelSale(Number(saleId)).encodeABI(),
  };

  await window.ethereum.request({
    method: "eth_sendTransaction",
    params: [transactionParameters],
  });
};

export const editSale = async (saleId: number, newPrice: number) => {
  const transactionParameters = {
    to: contractAddress,
    from: window.ethereum.selectedAddress,
    value: 0,
    gasLimit: "0",
    data: contract.methods
      .editSale(saleId, web3.utils.toWei(newPrice, "ether"))
      .encodeABI(),
  };

  await window.ethereum.request({
    method: "eth_sendTransaction",
    params: [transactionParameters],
  });
};
