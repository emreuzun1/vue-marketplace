export type NftAbi = [
  {
    inputs: [
      {
        internalType: "address";
        name: "initialOwner";
        type: "address";
      }
    ];
    stateMutability: "nonpayable";
    type: "constructor";
  },
  {
    inputs: [];
    name: "ERC721EnumerableForbiddenBatchMint";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "address";
        name: "sender";
        type: "address";
      },
      {
        internalType: "uint256";
        name: "tokenId";
        type: "uint256";
      },
      {
        internalType: "address";
        name: "owner";
        type: "address";
      }
    ];
    name: "ERC721IncorrectOwner";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "address";
        name: "operator";
        type: "address";
      },
      {
        internalType: "uint256";
        name: "tokenId";
        type: "uint256";
      }
    ];
    name: "ERC721InsufficientApproval";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "address";
        name: "approver";
        type: "address";
      }
    ];
    name: "ERC721InvalidApprover";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "address";
        name: "operator";
        type: "address";
      }
    ];
    name: "ERC721InvalidOperator";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "address";
        name: "owner";
        type: "address";
      }
    ];
    name: "ERC721InvalidOwner";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "address";
        name: "receiver";
        type: "address";
      }
    ];
    name: "ERC721InvalidReceiver";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "address";
        name: "sender";
        type: "address";
      }
    ];
    name: "ERC721InvalidSender";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "uint256";
        name: "tokenId";
        type: "uint256";
      }
    ];
    name: "ERC721NonexistentToken";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "address";
        name: "owner";
        type: "address";
      },
      {
        internalType: "uint256";
        name: "index";
        type: "uint256";
      }
    ];
    name: "ERC721OutOfBoundsIndex";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "address";
        name: "owner";
        type: "address";
      }
    ];
    name: "OwnableInvalidOwner";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "address";
        name: "account";
        type: "address";
      }
    ];
    name: "OwnableUnauthorizedAccount";
    type: "error";
  },
  {
    anonymous: false;
    inputs: [
      {
        indexed: true;
        internalType: "address";
        name: "owner";
        type: "address";
      },
      {
        indexed: true;
        internalType: "address";
        name: "approved";
        type: "address";
      },
      {
        indexed: true;
        internalType: "uint256";
        name: "tokenId";
        type: "uint256";
      }
    ];
    name: "Approval";
    type: "event";
  },
  {
    anonymous: false;
    inputs: [
      {
        indexed: true;
        internalType: "address";
        name: "owner";
        type: "address";
      },
      {
        indexed: true;
        internalType: "address";
        name: "operator";
        type: "address";
      },
      {
        indexed: false;
        internalType: "bool";
        name: "approved";
        type: "bool";
      }
    ];
    name: "ApprovalForAll";
    type: "event";
  },
  {
    anonymous: false;
    inputs: [
      {
        indexed: true;
        internalType: "address";
        name: "previousOwner";
        type: "address";
      },
      {
        indexed: true;
        internalType: "address";
        name: "newOwner";
        type: "address";
      }
    ];
    name: "OwnershipTransferred";
    type: "event";
  },
  {
    anonymous: false;
    inputs: [
      {
        indexed: true;
        internalType: "address";
        name: "from";
        type: "address";
      },
      {
        indexed: true;
        internalType: "address";
        name: "to";
        type: "address";
      },
      {
        indexed: true;
        internalType: "uint256";
        name: "tokenId";
        type: "uint256";
      }
    ];
    name: "Transfer";
    type: "event";
  },
  {
    inputs: [];
    name: "_owner";
    outputs: [
      {
        internalType: "address";
        name: "";
        type: "address";
      }
    ];
    stateMutability: "view";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "address";
        name: "to";
        type: "address";
      },
      {
        internalType: "uint256";
        name: "tokenId";
        type: "uint256";
      }
    ];
    name: "approve";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "address";
        name: "owner";
        type: "address";
      }
    ];
    name: "balanceOf";
    outputs: [
      {
        internalType: "uint256";
        name: "";
        type: "uint256";
      }
    ];
    stateMutability: "view";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "uint256";
        name: "tokenId";
        type: "uint256";
      }
    ];
    name: "getApproved";
    outputs: [
      {
        internalType: "address";
        name: "";
        type: "address";
      }
    ];
    stateMutability: "view";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "address";
        name: "owner";
        type: "address";
      },
      {
        internalType: "address";
        name: "operator";
        type: "address";
      }
    ];
    name: "isApprovedForAll";
    outputs: [
      {
        internalType: "bool";
        name: "";
        type: "bool";
      }
    ];
    stateMutability: "view";
    type: "function";
  },
  {
    inputs: [];
    name: "maxSupply";
    outputs: [
      {
        internalType: "uint256";
        name: "";
        type: "uint256";
      }
    ];
    stateMutability: "view";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "uint256";
        name: "_quantity";
        type: "uint256";
      }
    ];
    name: "mint";
    outputs: [];
    stateMutability: "payable";
    type: "function";
  },
  {
    inputs: [];
    name: "mintPrice";
    outputs: [
      {
        internalType: "uint256";
        name: "";
        type: "uint256";
      }
    ];
    stateMutability: "view";
    type: "function";
  },
  {
    inputs: [];
    name: "name";
    outputs: [
      {
        internalType: "string";
        name: "";
        type: "string";
      }
    ];
    stateMutability: "view";
    type: "function";
  },
  {
    inputs: [];
    name: "owner";
    outputs: [
      {
        internalType: "address";
        name: "";
        type: "address";
      }
    ];
    stateMutability: "view";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "uint256";
        name: "tokenId";
        type: "uint256";
      }
    ];
    name: "ownerOf";
    outputs: [
      {
        internalType: "address";
        name: "";
        type: "address";
      }
    ];
    stateMutability: "view";
    type: "function";
  },
  {
    inputs: [];
    name: "renounceOwnership";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "address";
        name: "from";
        type: "address";
      },
      {
        internalType: "address";
        name: "to";
        type: "address";
      },
      {
        internalType: "uint256";
        name: "tokenId";
        type: "uint256";
      }
    ];
    name: "safeTransferFrom";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "address";
        name: "from";
        type: "address";
      },
      {
        internalType: "address";
        name: "to";
        type: "address";
      },
      {
        internalType: "uint256";
        name: "tokenId";
        type: "uint256";
      },
      {
        internalType: "bytes";
        name: "data";
        type: "bytes";
      }
    ];
    name: "safeTransferFrom";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "address";
        name: "operator";
        type: "address";
      },
      {
        internalType: "bool";
        name: "approved";
        type: "bool";
      }
    ];
    name: "setApprovalForAll";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "string";
        name: "_baseTokenUri";
        type: "string";
      }
    ];
    name: "setBaseTokenUri";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "bytes4";
        name: "interfaceId";
        type: "bytes4";
      }
    ];
    name: "supportsInterface";
    outputs: [
      {
        internalType: "bool";
        name: "";
        type: "bool";
      }
    ];
    stateMutability: "view";
    type: "function";
  },
  {
    inputs: [];
    name: "symbol";
    outputs: [
      {
        internalType: "string";
        name: "";
        type: "string";
      }
    ];
    stateMutability: "view";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "uint256";
        name: "index";
        type: "uint256";
      }
    ];
    name: "tokenByIndex";
    outputs: [
      {
        internalType: "uint256";
        name: "";
        type: "uint256";
      }
    ];
    stateMutability: "view";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "address";
        name: "owner";
        type: "address";
      },
      {
        internalType: "uint256";
        name: "index";
        type: "uint256";
      }
    ];
    name: "tokenOfOwnerByIndex";
    outputs: [
      {
        internalType: "uint256";
        name: "";
        type: "uint256";
      }
    ];
    stateMutability: "view";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "uint256";
        name: "_tokenId";
        type: "uint256";
      }
    ];
    name: "tokenURI";
    outputs: [
      {
        internalType: "string";
        name: "";
        type: "string";
      }
    ];
    stateMutability: "view";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "address";
        name: "owner";
        type: "address";
      }
    ];
    name: "tokensOfOwner";
    outputs: [
      {
        internalType: "uint256[]";
        name: "";
        type: "uint256[]";
      }
    ];
    stateMutability: "view";
    type: "function";
  },
  {
    inputs: [];
    name: "totalSupply";
    outputs: [
      {
        internalType: "uint256";
        name: "";
        type: "uint256";
      }
    ];
    stateMutability: "view";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "address";
        name: "from";
        type: "address";
      },
      {
        internalType: "address";
        name: "to";
        type: "address";
      },
      {
        internalType: "uint256";
        name: "tokenId";
        type: "uint256";
      }
    ];
    name: "transferFrom";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "address";
        name: "newOwner";
        type: "address";
      }
    ];
    name: "transferOwnership";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "address";
        name: "";
        type: "address";
      }
    ];
    name: "walletMints";
    outputs: [
      {
        internalType: "uint256";
        name: "";
        type: "uint256";
      }
    ];
    stateMutability: "view";
    type: "function";
  }
];

export type MarketplaceAbi = [
  {
    inputs: [];
    stateMutability: "nonpayable";
    type: "constructor";
  },
  {
    anonymous: false;
    inputs: [
      {
        indexed: true;
        internalType: "uint256";
        name: "saleId";
        type: "uint256";
      },
      {
        indexed: false;
        internalType: "uint256";
        name: "tokenId";
        type: "uint256";
      },
      {
        indexed: false;
        internalType: "address";
        name: "nftContract";
        type: "address";
      },
      {
        indexed: false;
        internalType: "uint256";
        name: "price";
        type: "uint256";
      },
      {
        indexed: false;
        internalType: "address";
        name: "owner";
        type: "address";
      },
      {
        indexed: false;
        internalType: "bool";
        name: "isSold";
        type: "bool";
      }
    ];
    name: "CreateSale";
    type: "event";
  },
  {
    inputs: [
      {
        internalType: "uint256";
        name: "id";
        type: "uint256";
      }
    ];
    name: "cancelSale";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "uint256";
        name: "id";
        type: "uint256";
      }
    ];
    name: "completeSale";
    outputs: [];
    stateMutability: "payable";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "uint256";
        name: "_saleTokenId";
        type: "uint256";
      },
      {
        internalType: "address";
        name: "_saleNftContract";
        type: "address";
      },
      {
        internalType: "uint256";
        name: "_price";
        type: "uint256";
      }
    ];
    name: "createSale";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "uint256";
        name: "id";
        type: "uint256";
      },
      {
        internalType: "uint256";
        name: "newPrice";
        type: "uint256";
      }
    ];
    name: "editSale";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  },
  {
    inputs: [];
    name: "getAllSales";
    outputs: [
      {
        components: [
          {
            internalType: "uint256";
            name: "saleId";
            type: "uint256";
          },
          {
            internalType: "uint256";
            name: "tokenId";
            type: "uint256";
          },
          {
            internalType: "address";
            name: "nftContract";
            type: "address";
          },
          {
            internalType: "uint256";
            name: "price";
            type: "uint256";
          },
          {
            internalType: "address payable";
            name: "owner";
            type: "address";
          },
          {
            internalType: "bool";
            name: "isSold";
            type: "bool";
          }
        ];
        internalType: "struct Marketplace.Sale[]";
        name: "";
        type: "tuple[]";
      }
    ];
    stateMutability: "view";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "uint256";
        name: "_saleId";
        type: "uint256";
      }
    ];
    name: "getSale";
    outputs: [
      {
        components: [
          {
            internalType: "uint256";
            name: "saleId";
            type: "uint256";
          },
          {
            internalType: "uint256";
            name: "tokenId";
            type: "uint256";
          },
          {
            internalType: "address";
            name: "nftContract";
            type: "address";
          },
          {
            internalType: "uint256";
            name: "price";
            type: "uint256";
          },
          {
            internalType: "address payable";
            name: "owner";
            type: "address";
          },
          {
            internalType: "bool";
            name: "isSold";
            type: "bool";
          }
        ];
        internalType: "struct Marketplace.Sale";
        name: "";
        type: "tuple";
      }
    ];
    stateMutability: "view";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "address";
        name: "";
        type: "address";
      },
      {
        internalType: "address";
        name: "";
        type: "address";
      },
      {
        internalType: "uint256";
        name: "";
        type: "uint256";
      },
      {
        internalType: "bytes";
        name: "";
        type: "bytes";
      }
    ];
    name: "onERC721Received";
    outputs: [
      {
        internalType: "bytes4";
        name: "";
        type: "bytes4";
      }
    ];
    stateMutability: "pure";
    type: "function";
  }
];
