import {expect,test} from '@playwright/test';

test('Verify Kerala Final Page', async ({ page }) => {
    await page.goto('https://keralaproperty.in/member/register/');
   await expect(page).toHaveTitle('Real Estate Website  | Kerala -Buy,Sell,Rent,|Kerala Property');
   let dp=  await page.locator('//*[@id="listowner"]');
   await dp.selectOption("Builder");
    await page.locator('[id=utitle]').fill('Anjana');
    await page.locator('[id=umail]').fill('sanjananair199727@gmail.com');
    await page.locator('[id=memberpass]').fill('Anjana@123');
    await page.locator('[id=repass]').fill('Anjana@123');
    await page.locator('[id=umobile]').fill('8281982420');
    await page.locator('[id=sub_regbutton]').click();


})