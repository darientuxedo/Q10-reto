const FormPage = require("../../pages/form/FormPage");
const { Key, until, By   } = require('selenium-webdriver');


class FormStep extends FormPage {

  // Select value from the "Edicion" dropdown

  async clickButtonFreeTrial() {
    const btnFreetrial = await this.btnFreeTrial;
    await btnFreetrial.click();
  }

  async seleccionarEdicion(valor) {
    const selectElement = await this.editingField;
    await selectElement.click();  // Abrimos el dropdown
  
    // Esperamos a que las opciones sean visibles
    await this.driver.wait(until.elementIsVisible(selectElement), 10000);
  
    // Encuentra todas las opciones dentro del dropdown (asumiendo que las opciones son <span>)
    const options = await this.driver.findElements(By.xpath(`//span[normalize-space(text())='${valor}']`));
    
    // Recorremos las opciones y hacemos clic en la que coincide con el texto
    for (let option of options) {
      const text = await option.getText();
      if (text === valor) {
        await option.click();  // Hacemos clic en la opción que coincide con el texto
        break;  // Terminamos el ciclo una vez que se hace clic
      }
    }
  }
  

  // Fill the "First Name" field
  async ingresarNombre(nombre) {
    const campoNombre = await this.firstNameField;
    await campoNombre.sendKeys(nombre);
  }

  // Fill the "Last Name" field
  async ingresarApellido(apellido) {
    const campoApellido = await this.lastNameField;
    await campoApellido.sendKeys(apellido);
  }

  // Fill the "Email" field
  async ingresarCorreo(correo) {
    const campoCorreo = await this.emailField;
    await campoCorreo.sendKeys(correo);
  }

  // Fill the "Phone" field
  async ingresarTelefono(telefono) {
    const campoTelefono = await this.phoneField;
    await campoTelefono.sendKeys(telefono);
  }

  // Select a value from the "Position" dropdown
  async seleccionarCargo(valor) {
    const selectElement = await this.positionField;
    await selectElement.click();  // Abrimos el dropdown
  
    // Esperamos a que las opciones sean visibles
    await this.driver.wait(until.elementIsVisible(selectElement), 10000);
  
    // Encuentra todas las opciones dentro del dropdown (asumiendo que las opciones son <span>)
    const options = await this.driver.findElements(By.xpath(`//span[normalize-space(text())='${valor}']`));


    // Recorremos las opciones y hacemos clic en la que coincide con el texto
    for (let option of options) {
      const text = await option.getText();
      if (text === valor) {
        await option.click();  // Hacemos clic en la opción que coincide con el texto
        break;  // Terminamos el ciclo una vez que se hace clic
      }
    }
  }
  
  
  // Select a value from the "Municipality" dropdown
  async seleccionarMunicipio(valor) {
    const selectElement = await this.municipalityField;
    await selectElement.click();  // Abrimos el dropdown
  
    // Esperamos a que las opciones sean visibles
    await this.driver.wait(until.elementIsVisible(selectElement), 10000);
  
    // Encuentra todas las opciones dentro del dropdown (asumiendo que las opciones son <div>)
    const options = await this.driver.findElements(By.xpath(`//div[normalize-space(text())='${valor}']`));
  
    // Recorremos las opciones y hacemos clic en la que coincide con el texto
    for (let option of options) {
      const text = await option.getText();
      if (text === valor) {
        // Desplazar la opción hasta que esté visible
        await this.driver.wait(until.elementIsVisible(option), 10000);
        await this.driver.executeScript("arguments[0].scrollIntoView({behavior: 'smooth', block: 'center'})", option);
        await this.driver.executeScript('arguments[0].scrollIntoView(true);', option);

        // Hacemos clic en la opción que coincide con el texto
        await option.click();
        break;  // Terminamos el ciclo una vez que se hace clic
      }
    }
  }
  
  // Fill the "Institution" field
  async ingresarInstitucion(institucion) {
    const campoInstitucion = await this.institutionField;
    await campoInstitucion.sendKeys(institucion);
  }

  // Check the terms and conditions checkbox
  async aceptarTerminos() {
    const checkboxTerminos = await this.termsCheckbox;
    await checkboxTerminos.click();
  }

  // Submit the form by clicking the "Start Trial" button
  async iniciarPrueba() {
    const btnStartTrial = await this.btnStartTrial;
    await this.driver.wait(until.elementIsVisible(btnStartTrial), 10000);
    await this.driver.executeScript('arguments[0].scrollIntoView(true);', btnStartTrial);
    await btnStartTrial.click();
  }
}

module.exports = FormStep;
