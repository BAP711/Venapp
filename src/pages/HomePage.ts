import { Page } from "@playwright/test";
import { CommonActions } from "../utils/CommonActions";

export class HomePage {

    commonActions: CommonActions

    constructor(page: Page) {
        this.commonActions = new CommonActions(page);
    }

    async clickOnSideMenu() {
        const page1Promise = this.commonActions.page.waitForEvent('popup'); 
        await this.commonActions.locatorClick("(//div[contains(@class, 'MuiButtonBase-root MuiListItemButton-root')])[9]", 1);
        const page1 = await page1Promise;
        await page1.waitForTimeout (2000);
        await page1.waitForLoadState();
        return page1;
    }
}