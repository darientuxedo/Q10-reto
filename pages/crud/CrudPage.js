const { By, until, Key } = require('selenium-webdriver');

class CrudPage {
  constructor(driver) {
    this.driver = driver;
  }

  async getBtnOpenModal() {
    await this.driver.wait(until.elementLocated(By.xpath("//span[normalize-space(text())='Crear productos']")), 10000);
    return this.driver.findElement(By.xpath("//span[normalize-space(text())='Crear productos']"));
  }

  async getSelectFieldCode() {
    await this.driver.wait(until.elementLocated(By.id("Producto_prod_codigoP")), 10000);
    return this.driver.findElement(By.id("Producto_prod_codigoP"));
  }

  async getSelectFieldName() {
    await this.driver.wait(until.elementLocated(By.id("Producto_prod_nombre")), 1000);
    return this.driver.findElement(By.id("Producto_prod_nombre"));
  }

  async getSelectFieldValue() {
    await this.driver.wait(until.elementLocated(By.id("Producto_prod_valor_neto_currencytxt")), 1000);
    return this.driver.findElement(By.id("Producto_prod_valor_neto_currencytxt"));
  }

  async getBtnSubmit() {
    await this.driver.wait(until.elementLocated(By.id("submit-btn")), 1000);
    return this.driver.findElement(By.id("submit-btn"));
  }

  async getBtnEdit() {
    await this.driver.wait(until.elementLocated(By.xpath("(//a[@data-original-title='Editar']//i)[1]")), 1000);
    return this.driver.findElement(By.xpath("(//a[@data-original-title='Editar']//i)[1]"));
  }

  async getBtnDelete() {
    await this.driver.wait(until.elementLocated(By.xpath("(//a[@data-original-title='Eliminar']//i)[1]")), 1000);
    return this.driver.findElement(By.xpath("(//a[@data-original-title='Eliminar']//i)[1]"));
  }
}

module.exports = CrudPage;
