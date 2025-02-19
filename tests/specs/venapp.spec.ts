import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { HomePage } from '../../src/pages/HomePage';
import { VenUPage } from '../../src/pages/VenUPage';


let loginPage: LoginPage;
let homePage: HomePage;
let venUPage: VenUPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  homePage = new HomePage(page);
  venUPage = new VenUPage(page);

});

test('E2E-VENAPP-001 Login exitoso @smoke @regression', async () => {
  const url = process.env['URL']!;
  const email = process.env['EMAIL']!;
  const password = process.env['PASSWORD']!;
  await loginPage.login(url, email, password);
  expect(await loginPage.homePageVisible()).toBe(true);
});

test('E2E-VENAPP-002 Login fallido con email incorrecto @regression', async () => {
  const url = process.env['URL']!;
  const email = process.env['INVALID_EMAIL']!;
  const password = process.env['PASSWORD']!;
  await loginPage.login(url, email, password);
  expect(await loginPage.validateVisibleMessage('Este email no está registrado')).toBe(true);
});

test('E2E-VENAPP-003 Login fallido con password incorrecto @regression', async () => {
  const url = process.env['URL']!;
  const email = process.env['EMAIL']!;
  const password = process.env['INVALID_PASSWORD']!;
  await loginPage.login(url, email, password);
  expect(await loginPage.validateVisibleMessage('Contraseña incorrecta')).toBe(true);
});

test('E2E-VENAPP-004 Buscar,agregar productos y validar total del carrito @smoke @regression', async () => {
  const url = process.env['URL']!;
  const email = process.env['EMAIL']!;
  const password = process.env['PASSWORD']!;
  await loginPage.login(url, email, password);
  const newPage = await homePage.clickOnSideMenu();
  await venUPage.clickSearchCourseButton(newPage);
  await venUPage.clicklFilterCourse(newPage);
  await venUPage.selectCourse(newPage);
  await venUPage.clickBuyCourse(newPage);
  expect(await venUPage.validateTotal(newPage,'$4.99 $')).toBe(true);
  await newPage.close();
});

test.afterEach(async ({page}) => {await page.close();});
