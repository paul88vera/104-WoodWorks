var fs = require("fs");

fs.rename("demo.html", "index.html", function (err) {
  if (err) throw err;
  console.log("File Renamed");
});
