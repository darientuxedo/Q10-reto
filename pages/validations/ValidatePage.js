// validationPage.js
const { By } = require('selenium-webdriver');

class ValidationPage {
    constructor(driver) {
        this.driver = driver;
    }

    // Método para localizar un elemento con un selector específico
    async locateElement(selector) {
        if (!selector) {
            throw new Error("Se debe proporcionar un selector para localizar el elemento");
        }

        // Intentamos localizar el elemento por el selector
        try {
            const element = await this.driver.findElement(By.xpath(selector));
            return element;
        } catch (error) {
            console.error('Error al localizar el elemento:', error);
            throw error;
        }
    }
}

module.exports = ValidationPage;
