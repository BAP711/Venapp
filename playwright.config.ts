import { PlaywrightTestConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

const config: PlaywrightTestConfig = {
  testDir: './tests/specs', // Carpeta donde se encuentran las pruebas
  timeout: 2400 * 1000,       // Timeout por defecto para las pruebas
  expect: {
    timeout: 35000,
  },
  use: {
    headless: false,        // Ejecutar en modo headless (false para desarrollo)
    viewport: { width: 1280, height: 720 }, // Tamaño de la ventana del navegador
    trace: "retain-on-failure",
    video: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  fullyParallel: true,
  workers: 1,
  reporter: [
    ["html", { open: "never" }],
    ["junit", { outputFile: "results.xml" }],
    ['allure-playwright', { detailView: true }],
    [process.env.CI ? "dot" : "list"],
  ],
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    }
  ],
};

export default config;