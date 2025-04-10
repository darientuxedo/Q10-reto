const {  By ,Key } = require('selenium-webdriver');

class LoginPage {
  constructor(driver) {
    this.driver = driver;
  }


 
  get userField() {
    return this.driver.findElement(By.id("NombreUsuario"));
    
  }

  get contraseñaField() {
    return this.driver.findElement(By.id("Contrasena"));
  }

  get btnSubmit() {
    return this.driver.findElement(By.id("submit-btn"));
  }

}

module.exports = LoginPage;
