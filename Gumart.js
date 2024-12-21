const axios = require('axios');
const colors = require('colors');
const puppeteer = require('puppeteer');
const querystring = require('querystring');

class Gumart {
    constructor(telegram_data) {
        this.tg_data = telegram_data;
        this.access_token = "";
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

    async claimRewards() {
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
    
    async processAccount(index) {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        const baseUrl = "https://d2kpeuq6fthlg5.cloudfront.net/";
        const encodedQueryString = encodeURIComponent(this.tg_data);
        const url = `${baseUrl}#tgWebAppData=${encodedQueryString}`;
        const account_data = this.deCodeTelegramData();
        console.log(`========== Tài khoản ${index + 1} | ${account_data.user.username.green.bold} ==========`);
        const loadingInterval = this.loadingEffect();
        await page.goto(url);
        await new Promise((resolve) => setTimeout(resolve, 10000));
        clearInterval(loadingInterval);
        console.log('\r           ');
        await browser.close();
        await this.verify();
        await this.login();
        await this.claimRewards();
    }
}

module.exports = Gumart;

