module.exports = {
  default: {
    timeout: 60 * 1000,
    require: ["./tests/steps/**/*.ts"],
    paths: ["./tests/features/**/*.feature"],
    requireModule: ["ts-node/register"],
    format: [`json:report/json/cucumber-report.json`],
  },
};
