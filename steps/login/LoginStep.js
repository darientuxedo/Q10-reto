const LoginPage = require("../../pages/login/LoginPage");
const { Key, until, By   } = require('selenium-webdriver');


class LoginStep extends LoginPage {

 

  async clickFieldUser(user) {
    const campoUser = await this.userField;
    await campoUser.click();
    await campoUser.sendKeys(user);

  }

  async clickFieldPassword(pass) {
    const campoPassword = await this.contraseñaField;
    await campoPassword.click();
    await campoPassword.sendKeys(pass);
  }

  async clickButtonSubmit() {
    const btnSubmit = await this.btnSubmit;
    await btnSubmit.click();
  
  }

 


}

module.exports = LoginStep;
