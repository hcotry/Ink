import { ethers } from "ethers";

// RPC 
const provider = new ethers.JsonRpcProvider("https://sepolia.infura.io/v3/76cfdfa9cc2641308e916c3d6cd7f55d");

// 发送方的私钥
const senderPrivateKey = "发送方的私钥";
const senderWallet = new ethers.Wallet(senderPrivateKey, provider);

// 转账函数
async function sendETH(toAddress, amountInEther) {

    const amountInWei = ethers.parseEther(amountInEther);

    const tx = {
        to: toAddress,
        value: amountInWei,
    };

    try {
        const transaction = await senderWallet.sendTransaction(tx);
        console.log(`Transaction hash: ${transaction.hash}`);

        const receipt = await transaction.wait();
        console.log(`Transaction confirmed in block ${receipt.blockNumber}`);
    } catch (error) {
        console.error("Error sending ETH:", error);
    }
}

// bridge 0.001 ETH
const recipientAddress = "0x33f60714bbd74d62b66d79213c348614de51901c";// bridge合约地址
const amount = "0.001"; //转账数量
sendETH(recipientAddress, amount);


