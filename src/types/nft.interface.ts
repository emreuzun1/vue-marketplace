export interface NFT {
  attributes: {
    trait_type: string;
    value: string;
  }[];
  description: string;
  image: string;
  name: string;
  tokenId: number;
  price: bigint;
}
