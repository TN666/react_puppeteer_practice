module.exports = {
  preset: "jest-puppeteer",
  globals: { URL: "http://localhost:3000" },
  verbose: true,
  reporters: [
    'default',
    ['jest-html-reporters', {
      publicPath: './report',
      filename: 'test-report.html',
      pageTitle: 'Test Report'
    }]],
};