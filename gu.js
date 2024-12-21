const axios = require('axios');
const colors = require('colors');
const crypto = require("crypto-js");
let access_token = "";

// Hàm gọi API /api/home
async function getHome() {
    const url = "https://api.gumart.click/api/home";
    const headers = {
        "Authorization": access_token,
        "Origin": "https://d2kpeuq6fthlg5.cloudfront.net",
        "Accept": "application/json, text/plain, */*",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "x-requested-with": "tw.nekomimi.nekogram",
    };

    try {
        const response = await axios.get(url, { headers });
        const data = response.data;

        if (data.status_code === 200) {
            console.log("Fetched home data successfully!".green.bold);
            // console.log(data.data); // In dữ liệu nếu cần
            return data.data;
        } else {
            console.log("Failed to fetch home data.".red.bold);
            console.log("Message:", data.message);
        }
    } catch (error) {
        console.error("Error during fetching home data:", error.message);
    }
}

// Hàm verify
async function verify() {
    const url = "https://api.gumart.click/api/verify";
    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json, text/plain, */*",
        "Origin": "https://d2kpeuq6fthlg5.cloudfront.net",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0",
        'x-requested-with': 'tw.nekomimi.nekogram',
    };

    const payload = {
        ref_id: null,
        telegram_data: "query_id=AAFH_ap6AgAAAEf9qnrWRg_y&user=%7B%22id%22%3A6352993607%2C%22first_name%22%3A%22Nam%F0%9F%8D%85%22%2C%22last_name%22%3A%22Tr%E1%BA%A7n%22%2C%22username%22%3A%22TD_NAM%22%2C%22language_code%22%3A%22vi%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2F3UsY7Jf3O0hAGSEBVtoH3EAdBzWoTwXDIVScknORoaTA_q6PtQu0Ym6udhETRy64.svg%22%7D&auth_date=1734296412&signature=qhu-ORFfVH0FHH6uFGWc_i4_o-yQGs3rS-o5KTqdxqcl7_4WDiB7yMRPn5KJUX0CahoTGlJdm1NxaSqXFmCdAQ&hash=fc1417ba468a3271269a58873c5ad960f3f5b0d909b3237109b5c8f5d39516a5" // Cắt gọn chuỗi dài
    };

    try {
        const response = await axios.post(url, payload, { headers });
        const data = response.data;

        if (data.status_code === 200) {
            console.log("Verification successful!".green.bold);
        } else {
            console.log("Verification failed.".red.bold);
        }
    } catch (error) {
        console.error("Error during verification:", error.message);
    }
}

// Hàm login
async function login() {
    const url = "https://api.gumart.click/api/login";
    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json, text/plain, */*",
        "Origin": "https://d2kpeuq6fthlg5.cloudfront.net",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0",
        'x-requested-with': 'tw.nekomimi.nekogram',
    };

    const payload = {
        g_recaptcha_response: null,
        mode: null,
        ref_id: null,
        telegram_data: "query_id=AAFH_ap6AgAAAEf9qnrWRg_y&user=%7B%22id%22%3A6352993607%2C%22first_name%22%3A%22Nam%F0%9F%8D%85%22%2C%22last_name%22%3A%22Tr%E1%BA%A7n%22%2C%22username%22%3A%22TD_NAM%22%2C%22language_code%22%3A%22vi%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2F3UsY7Jf3O0hAGSEBVtoH3EAdBzWoTwXDIVScknORoaTA_q6PtQu0Ym6udhETRy64.svg%22%7D&auth_date=1734296412&signature=qhu-ORFfVH0FHH6uFGWc_i4_o-yQGs3rS-o5KTqdxqcl7_4WDiB7yMRPn5KJUX0CahoTGlJdm1NxaSqXFmCdAQ&hash=fc1417ba468a3271269a58873c5ad960f3f5b0d909b3237109b5c8f5d39516a5" // Cắt gọn chuỗi dài
    };

    try {
        const response = await axios.post(url, payload, { headers });
        const data = response.data;

        if (data.status_code === 200) {
            console.log("Login successful!".green.bold);
            access_token = `Bearer ${data.data.access_token}`;
            // console.log(data);
        } else {
            console.log("Login failed.".red.bold);
        }
    } catch (error) {
        console.error("Error during login:", error.message);
    }
}

// Hàm claim rewards
async function claimRewards() {
    const url = "https://api.gumart.click/api/claim";
    const headers = {
        "Content-Type": "application/json",
        "Authorization": access_token,
        "Origin": "https://d2kpeuq6fthlg5.cloudfront.net",
        "Accept": "application/json, text/plain, */*",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
    };

    try {
        const response = await axios.post(url, null, { headers });
        const data = response.data;

        if (data.status_code === 200) {
            console.log("Claim successful!".green.bold);
            console.log(data);
        } else {
            console.log("Claim failed.".red.bold);
            console.log(data);
        }
    } catch (error) {
        console.error("Error during claim request:", error.message);
    }
}
const puppeteer = require('puppeteer');
async function openURL() {
    const browser = await puppeteer.launch({ headless: true }); // headless: false để thấy trình duyệt
    const page = await browser.newPage();

    const url = 'https://d2kpeuq6fthlg5.cloudfront.net/#tgWebAppData=query_id%3DAAFH_ap6AgAAAEf9qnrWRg_y%26user%3D%257B%2522id%2522%253A6352993607%252C%2522first_name%2522%253A%2522Nam%25F0%259F%258D%2585%2522%252C%2522last_name%2522%253A%2522Tr%25E1%25BA%25A7n%2522%252C%2522username%2522%253A%2522TD_NAM%2522%252C%2522language_code%2522%253A%2522vi%2522%252C%2522allows_write_to_pm%2522%253Atrue%252C%2522photo_url%2522%253A%2522https%253A%255C%252F%255C%252Ft.me%255C%252Fi%255C%252Fuserpic%255C%252F320%255C%252F3UsY7Jf3O0hAGSEBVtoH3EAdBzWoTwXDIVScknORoaTA_q6PtQu0Ym6udhETRy64.svg%2522%257D%26auth_date%3D1734296412%26signature%3Dqhu-ORFfVH0FHH6uFGWc_i4_o-yQGs3rS-o5KTqdxqcl7_4WDiB7yMRPn5KJUX0CahoTGlJdm1NxaSqXFmCdAQ%26hash%3Dfc1417ba468a3271269a58873c5ad960f3f5b0d909b3237109b5c8f5d39516a5';
    await page.goto(url);
    console.log("Opened URL in browser.".cyan.bold);

    await new Promise((resolve) => setTimeout(resolve, 10000)); // Chờ 10 giây
    await browser.close();
    console.log("Closed browser.".cyan.bold);
}

// Hàm chính
async function main() {
    await openURL();
    await verify();
    await login();
    await claimRewards();
}

main();
