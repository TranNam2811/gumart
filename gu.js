const axios = require('axios');
const colors = require('colors');

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
            console.log(data.data); // In dữ liệu nếu cần
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
            console.log(data);
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
        } else {
            console.log("Claim failed.".red.bold);
        }
    } catch (error) {
        console.error("Error during claim request:", error.message);
    }
}

// Hàm chính
async function main() {
    await verify();
    await login();
    await getHome(); // Gọi API /api/home trước khi claim
    await claimRewards();
}

main();
