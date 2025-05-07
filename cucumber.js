module.exports = {
  default: {
    require: ["./src/steps/**/*.ts"],
    paths: ["./src/features/**/*.feature"],
    requireModule: ["ts-node/register"],
    format: [
      `json:report/json/cucumber-report.json`,
    ],
  },
};
