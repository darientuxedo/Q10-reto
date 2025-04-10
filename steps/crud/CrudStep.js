const CrudPage = require("../../pages/crud/CrudPage");
const { until } = require('selenium-webdriver');

class CrudStep {
  constructor(driver) {
    this.driver = driver;
    this.page = new CrudPage(driver);
  }

  async btnOpenModal() {
    const btnModal = await this.page.getBtnOpenModal();
    await this.driver.wait(until.elementIsVisible(btnModal), 15000);  // Aumenta el tiempo de espera
    await this.driver.wait(until.elementIsEnabled(btnModal), 15000);  // Aumenta el tiempo de espera
    await btnModal.click();
  }

  async clickFieldCode(code) {
    const campoCode = await this.page.getSelectFieldCode();
    await this.driver.wait(until.elementIsVisible(campoCode), 15000);
    await this.driver.wait(until.elementIsEnabled(campoCode), 15000);
    await campoCode.click();
    await campoCode.sendKeys(code);
  }

  async clickFieldName(name) {
    const campoName = await this.page.getSelectFieldName();
    await this.driver.wait(until.elementIsVisible(campoName), 15000);
    await this.driver.wait(until.elementIsEnabled(campoName), 15000);
    await campoName.click();
    await campoName.sendKeys(name);
  }

  async clickFieldValue(valor) {
    const campoValor = await this.page.getSelectFieldValue();
    await this.driver.wait(until.elementIsVisible(campoValor), 15000);
    await this.driver.wait(until.elementIsEnabled(campoValor), 15000);
    await campoValor.click();
    await campoValor.sendKeys(valor);
  }

  async clickButtonSubmit() {
    const btnSubmit = await this.page.getBtnSubmit();
    await this.driver.wait(until.elementIsVisible(btnSubmit), 15000);
    await this.driver.wait(until.elementIsEnabled(btnSubmit), 15000);
    await btnSubmit.click();
  }

  async clickButtonEdit() {
    const btnEdit = await this.page.getBtnEdit();
    await this.driver.wait(until.elementIsVisible(btnEdit), 15000);
    await this.driver.wait(until.elementIsEnabled(btnEdit), 15000);
    await btnEdit.click();
  }

  async clickButtonDelete() {
    const btnDelete = await this.page.getBtnDelete();
    await this.driver.wait(until.elementIsVisible(btnDelete), 15000);
    await this.driver.wait(until.elementIsEnabled(btnDelete), 15000);
    await btnDelete.click();
  }
}

module.exports = CrudStep;
