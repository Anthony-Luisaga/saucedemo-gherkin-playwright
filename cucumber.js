module.exports = {
  default: {
    require: ["./tests/steps/**/*.ts"],
    paths: ["./tests/features/**/*.feature"],
    requireModule: ["ts-node/register"],
    format: [
      `json:report/json/cucumber-report.json`,
    ],
  },
};
