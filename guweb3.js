const axios = require("axios");
const { ethers } = require("ethers");

// Thay thế window.ethereum bằng Infura provider trong môi trường Node.js
const INFURA_PROJECT_ID = '9530a194b44245f79b4264d2b0b62b3c';  // Thay thế bằng Infura Project ID của bạn
const BSC_RPC_URL = 'https://bsc-dataseed.binance.org/';  // RPC URL cho BSC

// Kết nối đến provider của BSC
const provider = new ethers.JsonRpcProvider(BSC_RPC_URL);
// const provider = new ethers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`);

async function getSignature(message) {
    // Chọn một địa chỉ ví đã được kết nối với Infura, ví dụ:
    const wallet = new ethers.Wallet('28f6ea7be6f6549047dacb9b5ec4830442cc0034fb2e8623c111c5310c730c14', provider);  // Thay thế bằng private key của bạn
    const signature = await wallet.signMessage(message);
    console.log(signature);
    return signature;
}

async function initSession() {
    const url = "https://api.gumart.click/api/siwe/init-session";

    const headers = {
        "Accept": "application/json",
        "Origin": "https://app.gumart.io",
        "Referer": "https://app.gumart.io/",
    };

    try {
        const response = await axios.get(url, { headers });
        console.log("Khởi tạo phiên làm việc thành công:", response.data);
        return response.data.session_key;

    } catch (error) {
        console.error("Lỗi khi khởi tạo phiên làm việc:", error.response?.data || error.message);
    }
}

async function loginWithSIWE(sessionKey) {
    const url = "https://api.gumart.click/api/siwe/login";

    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Origin": "https://app.gumart.io",
        "Referer": "https://app.gumart.io/",
        "siwe-session-key": sessionKey,
    };
    const issuedAt = new Date().toISOString();
    const message = `app.gumart.io wants you to sign in with your Ethereum account:\n0xb2B3136fd81844471348eD03DBB95Ea6fCf0a7C8\n\n\nURI: https://app.gumart.io\nVersion: 1\nChain ID: 56\nNonce: jVSTknEzw6Blj2Rpa\nIssued At: ${issuedAt}`;
    console.log(message);
    const signature = await getSignature(message);

    const payload = {
        message: message,
        signature: signature,
    };

    try {
        const response = await axios.post(url, payload, { headers });
        console.log("Đăng nhập thành công:", response.data);
    } catch (error) {
        console.error("Lỗi khi đăng nhập:", error.response?.data || error.message);
    }
}

async function main() {
    const sessionKey = await initSession();
    console.log(sessionKey);
    if (sessionKey) {
        await loginWithSIWE(sessionKey);
    }
}

main();
