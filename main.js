const fs = require('fs');
const Gumart = require('./Gumart');


function loadData() {
    const datas = fs.readFileSync("data.txt", 'utf8').split('\n').filter(line => line.trim() !== '');
    if (datas.length <= 0) {
        console.log(`Không tìm thấy dữ liệu`.red);
        process.exit();
    }
    return datas;
};

async function main() {
    tg_data = loadData();
    for (let i = 0; i < tg_data.length; ++i) {
        const gumart = new Gumart(tg_data[i]);
        await gumart.processAccount();
    }

}

main();