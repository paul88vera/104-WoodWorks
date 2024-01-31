var fs = require("fs");

fs.unlink("demo2.html", function (err) {
  if (err) throw err;
  console.log("deleted file specified");
});
