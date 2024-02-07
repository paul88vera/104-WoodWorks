var fs = require("fs");

fs.appendFile("demo.html", "Hello World", function (err) {
  if (err) throw err;
  console.log("Saved!");
});
