Write-Host "Generating Auth State..."
npx ts-node tests/steps/support/auth/generate-auth-state.ts

Write-Host "Running tests..."
npx cucumber-js 

Write-Host "Generating report..."
npm run generate-report