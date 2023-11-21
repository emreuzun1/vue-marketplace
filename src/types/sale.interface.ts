import type { NFT } from "./nft.interface";

export interface Sale extends NFT {
  saleId: number;
  nftContract: string;
  price: bigint;
  owner: string;
  isSold: boolean;
}
