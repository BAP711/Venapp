import { Page } from "@playwright/test";

export class CommonActions {
  page: Page;
  waitTimeOut = 30000;

  constructor(page: Page) {
    this.page = page;
  }

  private async waitForElementValidation(locator: any) {
    await locator.waitFor({ state: "attached", timeout: this.waitTimeOut });
    await locator.waitFor({ state: "visible", timeout: this.waitTimeOut });
    const isEnabled = await locator.isEnabled();
    if (!isEnabled) {
      throw new Error(`El elemento no está habilitado.`);
    }
  }
  // locatorClick // click en un locator
  async locatorClick(locator: string, seconds: number) {
    let selector: any;
    selector = this.page.locator(locator).first();
    await this.waitForElementValidation(selector);
    await selector.click();
    await this.page.waitForTimeout(seconds * 1000);
  }

  async getByRoleFill(type: any, name: string, text: string, seconds: number) {
    let selector: any;
    selector = this.page.getByRole(type, { name, exact: true }).first();
    await this.waitForElementValidation(selector);
    await selector.fill(text);
    await this.page.waitForTimeout(seconds * 1000);
  }
  async getByRoleClick(type: any, name: string,seconds: number, exact: boolean=true ) {
    let selector: any;
    selector = this.page.getByRole(type, { name, exact: exact }).first();
    await this.waitForElementValidation(selector);
    await selector.click();
    await this.page.waitForTimeout(seconds * 1000);
  }

  async getByTextClick(name: string, seconds: number, exact: boolean=true ) {
    let selector: any;
    selector = this.page.getByText(name , { exact: exact });
    await this.waitForElementValidation(selector);
    await selector.click();
    await this.page.waitForTimeout(seconds * 1000);
  }

  async gotoUrl(url: string, seconds: number) {
    await this.page.goto(url);
    await this.page.waitForTimeout(1000);
    await this.page.waitForLoadState();
    await this.page.waitForTimeout(seconds * 1000);
  }


}
