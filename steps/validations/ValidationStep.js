// validationStep.js
const ValidationPage = require('../../pages/validations/ValidatePage');  // Importamos ValidationPage

class ValidationStep {
    constructor(driver) {
        this.driver = driver;
        this.validationPage = new ValidationPage(driver);  // Instanciamos ValidationPage
    }

    // Método para validar si un elemento es visible
    async validateVisibility(selector) {
        if (!selector) {
            throw new Error("Se debe proporcionar un selector para validar la visibilidad del elemento");
        }

        try {
            // Localizamos el elemento utilizando el selector
            const element = await this.validationPage.locateElement(selector);
            // Verificamos si el elemento es visible
            const isVisible = await element.isDisplayed();
            return isVisible;
        } catch (error) {
            console.error('Error al verificar la visibilidad del elemento:', error);
            return false;  // Retornamos false si ocurre un error
        }
    }
}

module.exports = ValidationStep;
