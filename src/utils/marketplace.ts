declare var window: any;
import Web3 from "web3";
import { abi } from "@/contracts/Marketplace.json";
import { abi as adessoAbi } from "@/contracts/Adesso.json";
import { type MarketplaceAbi, type NftAbi } from "@/types/abi.interface";
import type { Sale } from "@/types/sale.interface";
import { sendTransactionAndWait } from "./sendTransactionAndWait";

const web3 = new Web3(window.ethereum);
const contractAddress = "0x7826d461E7ef6Ae101D903a784A15c74E6b0ED60";

const contract = new web3.eth.Contract(abi as MarketplaceAbi, contractAddress);

export const createSale = async (
  tokenId: number,
  price: number,
  onConfirm: () => void,
  onDeny?: () => void
) => {
  try {
    const transactionParameters = {
      to: contractAddress,
      from: window.ethereum.selectedAddress as string,
      value: "0",
      gasLimit: "10000000",
      data: contract.methods
        .createSale(
          tokenId,
          "0xF446adad2445302a849a6A4D6D64D8fC94E5Ad1a",
          web3.utils.toWei(price, "ether")
        )
        .encodeABI(),
    };

    sendTransactionAndWait(transactionParameters, onConfirm, onDeny);
  } catch (err) {
    if (onDeny) onDeny();
  }
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

export const cancelSale = async (
  saleId: number,
  onConfirm: () => void,
  onDeny: () => void
) => {
  const transactionParameters = {
    to: contractAddress,
    from: window.ethereum.selectedAddress,
    value: "0",
    gasLimit: "0",
    data: contract.methods.cancelSale(Number(saleId)).encodeABI(),
  };

  sendTransactionAndWait(transactionParameters, onConfirm, onDeny);
};

export const editSale = async (
  saleId: number,
  newPrice: number,
  onConfirm: () => void,
  onDeny: () => void
) => {
  const transactionParameters = {
    to: contractAddress,
    from: window.ethereum.selectedAddress,
    value: "0",
    gasLimit: "0",
    data: contract.methods
      .editSale(saleId, web3.utils.toWei(newPrice, "ether"))
      .encodeABI(),
  };

  sendTransactionAndWait(transactionParameters, onConfirm, onDeny);
};
