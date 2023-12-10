//a9e8a85f.cc3de1ff985646c4bfe24ee14ee60028
const lighthouse = require("@lighthouse-web3/sdk");
const API_KEY = "a9e8a85f.cc3de1ff985646c4bfe24ee14ee60028";

const main = async () => {
  const response = await lighthouse.uploadText("jbvkadbdkvbkvdsb", API_KEY);
  console.log(response)
};

main()