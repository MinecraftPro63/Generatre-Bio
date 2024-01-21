// api/generate-page.js

const fs = require('fs');

module.exports = (req, res) => {
  const { name } = req.body;

  // Create a unique filename based on name
  const fileName = `${name}-${Math.random().toString(36).substring(7)}.html`;

  // Your HTML content
  const htmlContent = `<html><body><h4>${name}</h4></body></html>`;

  // Path to save the file
  const filePath = `/tmp/${fileName}`;

  // Save HTML content to the file
  fs.writeFileSync(filePath, htmlContent);

  return res.status(200).json({ fileName });
};
