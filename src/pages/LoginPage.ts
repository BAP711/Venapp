import { Page } from "@playwright/test";
import { CommonActions } from "../utils/CommonActions";

export class LoginPage {

  commonActions: CommonActions;
  constructor(page: Page) {
    this.commonActions = new CommonActions(page);
  }

  async login(url: string, email: string, password: string) {
    await this.commonActions.gotoUrl(url, 1);
    await this.commonActions.getByRoleFill('textbox', 'Email', email, 1);
    await this.commonActions.getByRoleFill('textbox', 'Contraseña', password, 1);
    await this.commonActions.getByRoleClick('button', 'Iniciar sesión', 1);
  }

  async homePageVisible() {
    let isVisible = false;
    try {
      await this.commonActions.page.getByRole('heading', { name: 'Lotería' }).waitFor({ state: "visible" });
      await this.commonActions.page.getByRole('heading', { name: 'Recargas' }).waitFor({ state: "visible" });
      isVisible = true;
    } catch (error) {
      isVisible = false;
    }
    return isVisible;
  }

  async validateVisibleMessage(message : string) {
    let isVisible = false;
    try {
      await this.commonActions.page.getByText(message).waitFor({ state: "visible" });
      isVisible = true;
    } catch (error) {
      isVisible = false;
    }
    return isVisible;
  }

}