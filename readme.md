# Saucedemo Gherkin Playwright
This project is a test automation framework for the [Saucedemo](https://www.saucedemo.com/) application, leveraging **Playwright** and **Cucumber** with Gherkin syntax for efficient and readable test scenarios.

---

## 🚀 Key Features

- **End-to-End Testing**: Automates login workflow for the Saucedemo application.
- **Cucumber with Gherkin**: Enables writing human-readable test cases for better collaboration.
- **Playwright Integration**: Provides fast, reliable, and scalable browser automation.
- **Cross-Browser Support**: Compatible with Chrome, Firefox, and WebKit for diverse testing needs.

---

## 🛠️ Getting Started

### Prerequisites

Ensure the following tools are installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- Windows PowerShell (required for running the `run_test.ps1` script)

### Installation Steps

1. Clone the repository:

    ```powershell
    git clone https://github.com/Anthony-Luisaga/saucedemo-gherkin-playwright.git
    cd saucedemo-gherkin-playwright
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

---

## 🧪 Running Tests

### Execute All Tests Using PowerShell

1. Open a PowerShell terminal.
2. Navigate to the project directory:
    ```powershell
    cd c:\Users\TWeeBS\Playwright\saucedemo-playwright
    ```
3. Run the test script:
    ```powershell
    .\run_test.ps1
    ```

### Generate and View Test Reports

The `run_test.ps1` script automatically generates test reports in the following directories:

- **JSON Report**: `report/json/`
- **HTML Report**: `report/html/`

To view the HTML report, open the file in the `report/html` folder using any browser.

Alternatively, you can manually generate the HTML report by running:
```bash
npm run generate-report
```

The HTML report will be saved in the `report/html` folder.

---

## 📂 Project Structure Overview

```plaintext
saucedemo-playwright/
├── src/
│   ├── features/       # Gherkin feature files
│   ├── steps/          # Step definitions
├── report/
│   ├── json/           # JSON test reports
│   ├── html/           # HTML test reports
├── cucumber.js         # Cucumber configuration file
├── generate-report.js  # Script for generating HTML reports
├── run_test.ps1        # PowerShell script to execute tests
├── package.json        # Project dependencies and scripts
```

---

## 🖥️ Technologies and Tools

- **Playwright**: A modern browser automation framework.
- **Cucumber**: A BDD framework for writing test scenarios.
- **Gherkin**: A domain-specific language for defining test cases.

---

## 📧 Contact Information

For inquiries or feedback, please reach out to **Anthony Luisaga**.

---