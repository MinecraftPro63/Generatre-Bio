document.addEventListener('DOMContentLoaded', () => {
  const pageForm = document.getElementById('pageForm');
  const generatedPageContainer = document.getElementById('generatedPage');

  pageForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const pageName = document.getElementById('pageName').value;

    // Generate a unique ID for the page
    const pageId = generateRandomString(30);

    // Create a new HTML content
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${pageName}'s Page</title>
      </head>
      <body>
        <h4>${pageName}</h4>
      </body>
      </html>
    `;

    // Display the link to the generated page
    generatedPageContainer.innerHTML = `<a href="/pages/${pageId}" target="_blank">View Your Page</a>`;
  });

  function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
});
