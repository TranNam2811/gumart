const fs = require('fs');

// function createUrls(baseUrl, dataFile) {
//     const lines = fs.readFileSync(dataFile, 'utf8').trim().split('\n');
//     const urls = lines.map(line => {
//         const encodedQueryString = encodeURIComponent(line);
//         return `${baseUrl}#tgWebAppData=${encodedQueryString}`;
//     });

//     return urls;
// }
// const baseUrl = "https://d2kpeuq6fthlg5.cloudfront.net/";
// const dataFile = "data.txt";

// const urls = createUrls(baseUrl, dataFile);

// console.log("Generated URLs:", urls[0]);

// const queryString = "query_id=AAHoCV4xAwAAAOgJXjF-PQEW&user=%7B%22id%22%3A7270697448%2C%22first_name%22%3A%22No%22%2C%22last_name%22%3A%22Think%F0%9F%9B%92%22%2C%22username%22%3A%22TD_NAM_5%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2F3ls_8hDN7Kv8FBTB5YAbFI-zYctJhnbms7Q7d-C1vltrDXwWp7WiCw9E1b89O-Jy.svg%22%7D&auth_date=1734763404&signature=C3GfCJ0rxeLdh52lbl5ff8-Smc6gTt6RrWZtjjChkK13u71EO4DIgJeLIbutKQ1myczHQRiaA-pjltksho0uBA&hash=d5601c37097c3596a89ad58887dc68067f39cda681bae4ebfd05af9deea5fe8d";

// function parseQueryStringToJSON(queryString) {
//     // Tách chuỗi thành các cặp key-value
//     const params = new URLSearchParams(queryString);

//     // Lấy và parse dữ liệu
//     const query_id = params.get("query_id");
//     const user = JSON.parse(decodeURIComponent(params.get("user"))); // Parse JSON từ chuỗi mã hóa
//     const auth_date = Math.floor(Date.now() / 1000);
//     const signature = params.get("signature");
//     const hash = params.get("hash");

//     // Trả về đối tượng JSON
//     return {
//         query_id,
//         user,
//         auth_date,
//         signature,
//         hash,
//     };
// }

// const result = parseQueryStringToJSON(queryString);
// console.log(result);

// const loadingEffect = () => {
//   const loadingSymbols = ['|', '/', '-', '\\']; // Các ký tự quay vòng
//   let i = 0;

//   setInterval(() => {
//       // Dùng \r để di chuyển con trỏ về đầu dòng và ghi lại ký tự mới
//       process.stdout.write('\rLoading ' + loadingSymbols[i]);
//       i = (i + 1) % loadingSymbols.length; // Đổi ký tự trong mảng
//   }, 200); // Cập nhật mỗi 200ms
// };

// // Gọi hàm để hiển thị hiệu ứng loading
// loadingEffect();

// function loadData() {
//     const datas = fs.readFileSync("data.txt", 'utf8').split('\n');
//     if (datas.length <= 0) {
//         console.log(colors.red(`Không tìm thấy dữ liệu`));
//         process.exit();
//     }
//     return datas;
// };

// console.log(loadData()[0]);

// const calculateBoostTime = (boostNextTimestamp) => {
//     const currentTimestamp = Math.floor(Date.now() / 1000); // Lấy thời gian hiện tại (UTC) dưới dạng timestamp
//     const remainingTime = boostNextTimestamp - currentTimestamp;

//     if (remainingTime <= 0) {
//         console.log("Bạn có thể thực hiện 'boost' ngay bây giờ!");
//         return 0;
//     }

//     // Chuyển đổi khoảng thời gian còn lại sang giờ, phút, giây
//     const hours = Math.floor(remainingTime / 3600);
//     const minutes = Math.floor((remainingTime % 3600) / 60);
//     const seconds = remainingTime % 60;

//     console.log(`Còn lại ${hours} giờ, ${minutes} phút, ${seconds} giây trước khi có thể 'boost'.`);
//     return remainingTime;
// };

// // Ví dụ: sử dụng giá trị `boost_next_timestamp`
// const boostNextTimestamp = 1734900794;
// calculateBoostTime(boostNextTimestamp);


function startTask() {
    let remainingTime = 10;

    // Tác vụ chính
    const performTask = async () => {
        console.log("\nThực hiện tác vụ...");
        // Tích hợp tác vụ thực tế của bạn tại đây
        // Ví dụ: Gửi request API hoặc xử lý logic khác
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Giả lập tác vụ mất 2 giây
        console.log("Tác vụ hoàn thành!");

        // Reset thời gian đếm ngược
        remainingTime = 10;
    };

    // Hiệu ứng đếm ngược
    const countdown = setInterval(() => {
        process.stdout.write(`\rChờ ${remainingTime} giây để tiếp tục...`);
        remainingTime--;

        if (remainingTime < 0) {
            clearInterval(countdown);
            performTask().then(() => startTask()); // Lặp lại tác vụ sau mỗi 60 giây
        }
    }, 1000);
}

// Khởi động chương trình
startTask();


