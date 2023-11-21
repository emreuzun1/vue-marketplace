declare var window: any;
interface TransactionParameter {
  to: string;
  from: string;
  value: string;
  gasLimit: string;
  data: string;
}

export const sendTransactionAndWait = async (
  transactionParameters: TransactionParameter,
  onConfirm: () => void
) => {
  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });

    const receipt = await waitForTransactionReceipt(txHash);
    if (receipt) onConfirm();
  } catch (err) {
    console.log(err);
  }
};

const waitForTransactionReceipt = async (txHash: string) => {
  while (true) {
    const receipt = await window.ethereum.request({
      method: "eth_getTransactionReceipt",
      params: [txHash],
    });

    if (receipt) return receipt;
    await new Promise((res) => setTimeout(res, 1000));
  }
};
