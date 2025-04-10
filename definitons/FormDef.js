const { Builder, Capabilities, Key, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { Given, When, Then, AfterAll, And } = require('@cucumber/cucumber');
const FormStep = require('../steps/form/FormStep');  // Importamos los métodos de interacción
const LoginStep = require('../steps/login/LoginStep');  // Importamos los métodos de interacción
const CrudStep = require('../steps/crud/CrudStep');  // Importamos los métodos de interacción
const ValidationStep = require('../steps/validations/ValidationStep');  // Importamos los métodos de interacción
require("chromedriver");

let driver;
let formStep;
let loginStep;
let crudStep;
let validationStep;

Given('the user navigates to the main page', async function () {
  const options = new chrome.Options();

  // Opciones para evitar la detección

  options.addArguments('--no-sandbox'); // Esto puede ayudar en algunos sistemas
  options.addArguments('--disable-dev-shm-usage'); // También puede ayudar a evitar detección en algunos sistemas
  options.addArguments('--disable-extensions'); // Desactivar extensiones
  options.addArguments('--disable-gpu');  // No usar GPU (en algunos casos evita detección)
  options.addArguments('disable-infobars');  // Deshabilitar barras de información
  options.addArguments('disable-browser-side-navigation');  // Deshabilitar navegación del lado del navegador
  options.addArguments('--remote-allow-origins=*');  // Permite el acceso remoto
  options.addArguments('disable-features=VizDisplayCompositor'); // Deshabilita ciertas características experimentales de Chrome

  driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)  // Pasamos las opciones de Chrome
    .build();

  await driver.get('https://www.q10.com/Colombia');  // Cambiar por la URL de tu página
});

Given('click the free trial button', async function () {
  formStep = new FormStep(driver);
  await formStep.clickButtonFreeTrial();
});

When('enter valid credentials', async function () {
  formStep = new FormStep(driver);  // Creamos una instancia de FormStep

  // Rellenamos el formulario con datos válidos
  await formStep.seleccionarEdicion('Educación Superior');
  await formStep.ingresarNombre('John');
  await formStep.ingresarApellido('Doe');
  await formStep.seleccionarCargo('Otro');
  await formStep.ingresarCorreo('166john.doe@yopmail.com');
  await formStep.ingresarTelefono('1234567890');
  await formStep.seleccionarMunicipio('Barbacoas');
  await formStep.ingresarInstitucion('Example Institution');
  await formStep.aceptarTerminos();
  // Enviamos el formulario
  await formStep.iniciarPrueba();
});

Then('the website should display the free trial form module', async function () {
  // Instanciamos la clase de validación
  validationStep = new ValidationStep(driver);
  
  // Definimos el selector del mensaje de éxito
  const messageSelector = "//h5[contains(@class,'text-center text-bold')]";

  // Validamos la visibilidad del mensaje
  const isMessageVisible = await validationStep.validateVisibility(messageSelector);
  
  if (!isMessageVisible) {
      throw new Error('El mensaje de creación no es visible');
  }

  console.log('El mensaje de creación es visible.');
  await driver.quit();
});

Given('user enter to the login', async function () {
  const options = new chrome.Options();

  // Opciones para evitar la detección

  options.addArguments('--no-sandbox'); // Esto puede ayudar en algunos sistemas
  options.addArguments('--disable-dev-shm-usage'); // También puede ayudar a evitar detección en algunos sistemas
  options.addArguments('--disable-extensions'); // Desactivar extensiones
  options.addArguments('--disable-gpu');  // No usar GPU (en algunos casos evita detección)
  options.addArguments('disable-infobars');  // Deshabilitar barras de información
  options.addArguments('disable-browser-side-navigation');  // Deshabilitar navegación del lado del navegador
  options.addArguments('--remote-allow-origins=*');  // Permite el acceso remoto
  options.addArguments('disable-features=VizDisplayCompositor'); // Deshabilita ciertas características experimentales de Chrome

  driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)  // Pasamos las opciones de Chrome
    .build();

  await driver.get('https://site.q10.com/Productos');  // Cambiar por la URL de tu página
});

When('enter valid credentials in login',{timeout: 10000}, async function () {
  loginStep = new LoginStep(driver);  

  // Rellenamos el formulario con datos válidos
  await loginStep.clickFieldUser('13john.doe@yopmail.com');
  await loginStep.clickFieldPassword('10042025Ks$');
  await loginStep.clickButtonSubmit();
});

Given('user click in create register', async function () {
  crudStep = new CrudStep(driver);
  await crudStep.btnOpenModal();
});


When('when user enter valid dates in create register', async function () {
  crudStep = new CrudStep(driver); 

  // Rellenamos el formulario con datos válidos
  await crudStep.clickFieldCode('EJ05');
  await crudStep.clickFieldName('EJEMPLO');
  await crudStep.clickFieldValue('30000');
  await crudStep.clickButtonSubmit();
});


Then('the website should display the message create register', async function () {
  // Instanciamos la clase de validación
  validationStep = new ValidationStep(driver);
  
  // Definimos el selector del mensaje de éxito
  const messageSelector = "//div[@class='alert alert-success']";

  // Validamos la visibilidad del mensaje
  const isMessageVisible = await validationStep.validateVisibility(messageSelector);
  
  if (!isMessageVisible) {
      throw new Error('El mensaje de creación no es visible');
  }

  console.log('El mensaje de creación es visible.');
  await driver.quit();
});

AfterAll(async function () {
 

});
