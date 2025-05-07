const reporter = require("cucumber-html-reporter");
const path = require("path");

const jsonReportPath = path.join(__dirname, `report/json/cucumber-report.json`); 
const htmlReportPath = path.join(__dirname, `report/html/cucumber-html-report.html`);

const options = {
  theme: "bootstrap",
  jsonFile: jsonReportPath, 
  output: htmlReportPath, 
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "Test Environment": "STAGING",
    "Tester": "Anthony Luisaga",
    "Browser": "Chrome",
    "Platform": "Windows 11",
    "Executed": "Local",
  },
};

reporter.generate(options);

console.log(`🚀 Cucumber HTML report generated at: ${htmlReportPath}`);