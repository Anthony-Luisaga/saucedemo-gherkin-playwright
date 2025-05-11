Write-Host "Running tests..."
npx cucumber-js

Write-Host "Generating report..."
npm run generate-report