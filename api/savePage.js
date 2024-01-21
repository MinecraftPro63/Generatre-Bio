// api/savePage.js
const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
  try {
    const { pageId, htmlContent } = req.body;

    // Create a 'pages' directory if it doesn't exist
    const pagesDir = path.join(process.cwd(), 'pages');
    if (!fs.existsSync(pagesDir)) {
      fs.mkdirSync(pagesDir);
    }

    // Save the HTML content to a file in the 'pages' directory
    const filePath = path.join(pagesDir, `${pageId}.html`);
    fs.writeFileSync(filePath, htmlContent, 'utf-8');

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to save page.' });
  }
};
