const {  By ,Key } = require('selenium-webdriver');

class FormPage {
  constructor(driver) {
    this.driver = driver;
  }

  // Locate form fields
  get btnFreeTrial() {
    return this.driver.findElement(By.xpath("(//span[@class='mdl-button__ripple-container'])[3]"));
  }

  get editingField() {
    return this.driver.findElement(By.xpath("(//span[@class='filter-option pull-left'])[1]"));
    
  }

  get firstNameField() {
    return this.driver.findElement(By.id("PruebaGratuita_nombres"));
  }

  get lastNameField() {
    return this.driver.findElement(By.id('PruebaGratuita_apellidos'));
  }

  get positionField() {
    return this.driver.findElement(By.xpath("(//button[contains(@class,'btn dropdown-toggle')])[2]"));
  }

  get emailField() {
    return this.driver.findElement(By.id('PruebaGratuita_correo'));
  }

  get phoneField() {
    return this.driver.findElement(By.id('PruebaGratuita_telefono'));
  }

  get municipalityField() {
    return this.driver.findElement(By.xpath("(//div[contains(@class,'selectize-input items')])[1]"));
  }

  get institutionField() {
    return this.driver.findElement(By.id('PruebaGratuita_institucion'));
  }

  get termsCheckbox() {
    return this.driver.findElement(By.id('PruebaGratuita_acepto_condiciones'));
  }

  get btnStartTrial() {
    return this.driver.findElement(By.id("submit-button"));
  }
}

module.exports = FormPage;
