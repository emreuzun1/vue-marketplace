import { ref } from "vue";
import { defineStore } from "pinia";
import { connectWalletRequest, getWalletRequest } from "@/utils/interact";
declare var window: any;
export const authStore = defineStore("auth", () => {
  const auth = ref<string>();
  const connectWallet = async () => {
    const res = await connectWalletRequest();
    auth.value = res.address;
  };

  const getWallet = async () => {
    const res = await getWalletRequest();
    auth.value = res.address;
  };

  const accountListener = () => {
    window.ethereum.on("accountsChanged", async (accounts: string[]) => {
      if (accounts.length > 0) {
        auth.value = accounts[0];
      } else
        return { success: false, message: "Please connect your Metamask." };
    });
  };
  return { auth, connectWallet, getWallet, accountListener };
});
