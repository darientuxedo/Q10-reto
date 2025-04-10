const fs = require('fs');
const path = require('path');
const reporter = require('cucumber-html-reporter');

// Ruta del directorio donde se generarán los reportes
const reportDir = path.join(__dirname, 'reports');

// Verificar si el directorio 'reports' existe, si no, crearlo
if (!fs.existsSync(reportDir)) {
  fs.mkdirSync(reportDir, { recursive: true });
}

const options = {
  theme: 'bootstrap',
  jsonFile: './reports/cucumber_report.json',  // Ruta del archivo JSON generado
  output: './reports/cucumber_report.html',     // Ruta de salida del archivo HTML
  reportSuiteAsScenarios: true,
  launchReport: true,
};

reporter.generate(options);
