const reporter = require("cucumber-html-reporter");

const options = {
    theme: "bootstrap",
    jsonFile: "reports/cucumber_report.json",
    output: "reports/cucumber_report.html",
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "Project": "API BDD Tests",
        "Test Environment": process.env.ENV || "dev",
        "Platform": process.platform,
        "Executed": "Local",
    },
};

reporter.generate(options);
