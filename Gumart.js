const axios = require('axios');
const colors = require('colors');
const puppeteer = require('puppeteer');
const querystring = require('querystring');

class Gumart {
    constructor(telegram_data) {
        this.tg_data = telegram_data;
        this.access_token = "";
        this.current_package_name = "";
        this.boost_next_timestamp = 0;
    }

    async verify() {
        const url = "https://api.gumart.click/api/verify";
        const headers = {
            "Content-Type": "application/json",
            "Accept": "application/json, text/plain, */*",
            "Origin": "https://d2kpeuq6fthlg5.cloudfront.net",
        };

        const payload = {
            ref_id: null,
            telegram_data: this.tg_data
        };

        try {
            const response = await axios.post(url, payload, { headers });
            const data = response.data;

            if (data.status_code === 200) {
                console.log("Verification successful! ".green.bold, `<${data.status_code}>`.yellow);
            } else {
                console.log("Verification failed.".red.bold, `<${data.status_code}>`.yellow);
            }
        } catch (error) {
            console.error("Error during verification:", error.message);
        }
    }

    async login() {
        const url = "https://api.gumart.click/api/login";
        const headers = {
            "Content-Type": "application/json",
            "Accept": "application/json, text/plain, */*",
            "Origin": "https://d2kpeuq6fthlg5.cloudfront.net",
        };

        const payload = {
            g_recaptcha_response: null,
            mode: null,
            ref_id: null,
            telegram_data: this.tg_data
        };

        try {
            const response = await axios.post(url, payload, { headers });
            const data = response.data;

            if (data.status_code === 200) {
                console.log("Login successful! ".green.bold, `<${data.status_code}>`.yellow);
                this.access_token = `Bearer ${data.data.access_token}`;
            } else {
                console.log("Login failed. ".red.bold, `<${data.status_code}>`.yellow);
            }
        } catch (error) {
            console.error("Error during login:", error.message);
        }
    }

    async home() {
        const url = "https://api.gumart.click/api/home";
        const headers = {
            "Authorization": this.access_token,
            "Origin": "https://d2kpeuq6fthlg5.cloudfront.net",
            "Accept": "application/json, text/plain, */*",
        };

        try {
            const response = await axios.get(url, { headers });
            const data = response.data;

            if (data.status_code === 200) {
                console.log("Home load successful! ".green.bold, `<${data.status_code}>`.yellow);
                this.current_package_name = data.data.current_package_name;
                this.boost_next_timestamp = data.data.boost_next_timestamp;
                console.log(this.current_package_name);
            } else {
                console.log("Failed to fetch home data.".red.bold);
                console.log("Message:", data.message);
            }
        } catch (error) {
            console.error("Error during fetching home data:", error.message);
        }
    }

    async claim() {
        const url = "https://api.gumart.click/api/claim";
        const headers = {
            "Content-Type": "application/json",
            "Authorization": this.access_token,
            "Origin": "https://d2kpeuq6fthlg5.cloudfront.net",
            "Accept": "application/json, text/plain, */*",
        };

        try {
            const response = await axios.post(url, null, { headers });
            const data = response.data;

            if (data.status_code === 200) {
                console.log("Claim successful! ".green.bold);
                console.log(data.data);
            } else {
                console.log("Claim failed.".red.bold);
                console.log(data);
            }
        } catch (error) {
            console.error("Error during claim request:", error.message);
        }
    }

    async boost() {
        const url = "https://api.gumart.click/api/boost";
        const headers = {
            "Content-Type": "application/json",
            "Authorization": this.access_token,
            "Origin": "https://d2kpeuq6fthlg5.cloudfront.net",
            "Accept": "application/json, text/plain, */*",
        };
        const remainingTime = this.calculateBoostTime();
        if (remainingTime <= 0) {
            try {
                const response = await axios.post(url,null, { headers });
                const data = response.data;

                if (data.status_code === 200) {
                    console.log("Boost successful! ".green.bold);
                    console.log(data.data);
                } else {
                    console.log("Boost failed.".red.bold);
                    console.log(data);
                }
            } catch (error) {
                console.error("Error during boost request:", error.message);
            }
        } else {
            const { hours, minutes, seconds } = this.formatTime(remainingTime);
            console.log(
                `Còn lại ${hours} giờ, ${minutes} phút, ${seconds} giây trước khi có thể 'boost'.`.yellow.bold
            );
        }


    }

    deCodeTelegramData() {
        const params = new URLSearchParams(this.tg_data);
        const query_id = params.get("query_id");
        const user = JSON.parse(decodeURIComponent(params.get("user")));
        const auth_date = Math.floor(Date.now() / 1000);
        const signature = params.get("signature");
        const hash = params.get("hash");
        return {
            query_id,
            user,
            auth_date,
            signature,
            hash,
        };
    }

    loadingEffect = () => {
        const loadingSymbols = ['|', '/', '-', '\\'];
        let i = 0;
        const interval = setInterval(() => {
            process.stdout.write('\rLoading ' + loadingSymbols[i]);
            i = (i + 1) % loadingSymbols.length;
        }, 200);
        return interval;
    };

    formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return { hours, minutes, seconds: secs };
    };

    calculateBoostTime = () => {
        const currentTimestamp = Math.floor(Date.now() / 1000);
        return this.boost_next_timestamp - currentTimestamp;
    }

    async processAccount(index) {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        const baseUrl = "https://d2kpeuq6fthlg5.cloudfront.net/";
        const encodedQueryString = encodeURIComponent(this.tg_data);
        const url = `${baseUrl}#tgWebAppData=${encodedQueryString}`;
        const account_data = this.deCodeTelegramData();
        const account_number = index;
        console.log(`========== Tài khoản ${account_number} | ${account_data.user.username.green.bold} ==========`);
        const loadingInterval = this.loadingEffect();
        await page.goto(url);
        await new Promise((resolve) => setTimeout(resolve, 10000));
        clearInterval(loadingInterval);
        console.log('\r           ');
        await browser.close();
        await this.verify();
        await this.login();
        await this.home();
        if (this.current_package_name === 'Free Pack') {
            await this.boost();
        }
        await this.claim();
    }
}

module.exports = Gumart;

