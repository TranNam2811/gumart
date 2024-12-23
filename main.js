const fs = require('fs');
const Gumart = require('./Gumart');

function loadData() {
    const datas = fs.readFileSync("data.txt", 'utf8').split('\n').filter(line => line.trim() !== '');
    if (datas.length <= 0) {
        console.log(`Không tìm thấy dữ liệu`.red);
        process.exit();
    }
    return datas;
}

function countdown(seconds) {
    return new Promise((resolve) => {
        let remainingTime = seconds;

        const interval = setInterval(() => {
            process.stdout.write(`\rChờ ${remainingTime} giây để tiếp tục...`);
            remainingTime--;

            if (remainingTime < 0) {
                clearInterval(interval);
                console.log('\n');
                resolve();
            }
        }, 1000);
    });
}

async function main() {
    while (true) {
        const tg_data = loadData();
        for (let i = 0; i < tg_data.length; ++i) {
            const gumart = new Gumart(tg_data[i]);
            await gumart.processAccount((i + 1));
        }
        await countdown(120);
    }
}

main();
