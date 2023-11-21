# Vue-Marketplace
## _The fastest and famous Marketplace ever_

![Solidity](https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white) ![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D) ![DaisyUI](https://img.shields.io/badge/daisyui-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)


### Vue-Marketplace is a marketplace that you can sell or buy `Adesso` NFT's
Th visuals of NFT's are taken from another NFT collection

## Tech

- It is written with [VueJS](https://vuejs.org/) and [Typescript](https://www.typescriptlang.org/)
- For interaction with smart contracts, used [Web3](https://github.com/web3/web3.js) library
- [DaisyUI](https://daisyui.com/) for UI
- [Pinia](https://pinia.vuejs.org/) for state management

There are two smart contracts written for this project

1. [Adesso](https://sepolia.etherscan.io/address/0x7B917d4e12AA0a82eE04F3bd938bd1e44d0cfe5E) for NFT [(source)](https://github.com/emreuzun1/solidity-marketplace/blob/main/contracts/Adesso.sol)
2. [Marketplace](https://sepolia.etherscan.io/address/0x7826d461E7ef6Ae101D903a784A15c74E6b0ED60) for sell or buy [(source)](https://github.com/emreuzun1/solidity-marketplace/blob/main/contracts/Marketplace.sol)

> Openzeppelin released 5.0. These
> smart contracts written by the
> latest version (5.0)

## To Run 
```sh
cd vue-marketplace
npm i
npm run dev
```

## To Get Sepolia ETH
[Sepolia Faucet](https://sepoliafaucet.com/)
