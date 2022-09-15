import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x48DD720d1c22f89ca6b0980D009c5AbBaE2C11B5";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/AI47TaAjq-U9BVFcVLJn_X1fq3qGCdUq",
  },
};