import { Page } from "@playwright/test";
import { CommonActions } from "../utils/CommonActions";

export class VenUPage {

    commonActions: CommonActions

    constructor(page: Page) {
        this.commonActions = new CommonActions(page);
    }

    async clickSearchCourseButton(newPage: Page) {
        this.commonActions.page = newPage;
        await this.commonActions.getByRoleClick('link', ' Buscar cursos', 2); 
    }

    async clicklFilterCourse(newPage: Page) {
         this.commonActions.page = newPage;
        await this.commonActions.getByRoleClick('button', 'Idiomas icon Idiomas', 2);
    }

    async selectCourse(newPage: Page) {
        this.commonActions.page = newPage;
        await this.commonActions.getByTextClick('Inglés Conversacional para', 2, false);
    }
    async clickBuyCourse(newPage: Page) {
        this.commonActions.page = newPage;
        await this.commonActions.getByRoleClick('button', ' Comprar curso', 2);
    }

    async validateTotal(newPage: Page, value: string) {
        this.commonActions.page = newPage;
        try {
            await this.commonActions.page.getByRole('heading', { name: value }).waitFor({ state: "visible" });
            return true;
        } catch (error) {
            return false;
        }

    }
    
}