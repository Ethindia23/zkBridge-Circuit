const { ethers } = require("ethers");
const wc = require("../deposit_js/witness_calculator");
const fs = require("fs").promises;

const BNToBinary = (n) => {
  let r = BigInt(n).toString();
  let prePadding = "";
  let paddingAmount = 256 - r.length;
  for (let i = 0; i < paddingAmount; i++) {
    prePadding += "0";
  }
  return prePadding + r;
};

const depositProofGenerator = async (input) => {
  const buffer = await fs.readFile("scripts/deposit.wasm");
  const depositWC = await wc(buffer);
  const r = await depositWC.calculateWitness(input, 0);
  const commitment = r[1];
  const nullifierHash = r[2];
  console.log(commitment)
  console.log(commitment.toString());
  console.log(nullifierHash.toString());
};
const main = async () => {
  const secret = BNToBinary(
    ethers.BigNumber.from(ethers.utils.randomBytes(32)).toString()
  ).split("");
  const nullifier = BNToBinary(
    ethers.BigNumber.from(ethers.utils.randomBytes(32)).toString()
  ).split("");

  const input = {
    secret,
    nullifier,
  };
  await depositProofGenerator(input);
};

main();
