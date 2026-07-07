import { ethers } from "ethers";

async function main() {
  const provider = new ethers.JsonRpcProvider(
    "https://ethereum-rpc.publicnode.com"
  );

  const block = await provider.getBlockNumber();

  console.log("Current block:", block);
}

main();
