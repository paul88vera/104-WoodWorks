var fs = require("fs");

fs.writeFile(
  "summer.html",
  `<!DOCTYPE html>
  <html>
  <body>
  <h1>Summer</h1>
  <p>I love the sun!</p>
  </body>
  </html>`,
  function (err) {
    if (err) throw err;
    console.log(
      "Saved in the same file or created a new file if it doesn't exist"
    );
  }
);
