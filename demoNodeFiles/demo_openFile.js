var fs = require("fs");

fs.open("demo1opened.json", "w", function (err, file) {
  if (err) throw err;
  console.log("Saved!");
});
