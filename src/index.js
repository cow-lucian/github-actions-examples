// Simple Hello World application
// Used as a target for path-based workflow triggers in our GitHub Actions examples

const APP_NAME = "github-actions-examples";
const VERSION = "1.0.0";

function greet(name = "World") {
  return `Hello, ${name}! Welcome to ${APP_NAME} v${VERSION}.`;
}

function main() {
  console.log(greet());
  console.log("This repository demonstrates all GitHub Actions workflow features.");
}

main();

module.exports = { greet, APP_NAME, VERSION };
