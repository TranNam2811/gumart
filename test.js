const puppeteer = require('puppeteer');

(async () => {
  // Mở trình duyệt
  const browser = await puppeteer.launch({ headless: false }); // headless: false để thấy trình duyệt
  const page = await browser.newPage();

  // Mở trang web
  const url = 'https://d2kpeuq6fthlg5.cloudfront.net/#tgWebAppData=query_id%3DAAFH_ap6AgAAAEf9qnrWRg_y%26user%3D%257B%2522id%2522%253A6352993607%252C%2522first_name%2522%253A%2522Nam%25F0%259F%258D%2585%2522%252C%2522last_name%2522%253A%2522Tr%25E1%25BA%25A7n%2522%252C%2522username%2522%253A%2522TD_NAM%2522%252C%2522language_code%2522%253A%2522vi%2522%252C%2522allows_write_to_pm%2522%253Atrue%252C%2522photo_url%2522%253A%2522https%253A%255C%252F%255C%252Ft.me%255C%252Fi%255C%252Fuserpic%255C%252F320%255C%252F3UsY7Jf3O0hAGSEBVtoH3EAdBzWoTwXDIVScknORoaTA_q6PtQu0Ym6udhETRy64.svg%2522%257D%26auth_date%3D1734296412%26signature%3Dqhu-ORFfVH0FHH6uFGWc_i4_o-yQGs3rS-o5KTqdxqcl7_4WDiB7yMRPn5KJUX0CahoTGlJdm1NxaSqXFmCdAQ%26hash%3Dfc1417ba468a3271269a58873c5ad960f3f5b0d909b3237109b5c8f5d39516a5';
  await page.goto(url);
  setTimeout(async () => {
    await browser.close();
  }, 10000); // 10 giây (10000ms)
})();
