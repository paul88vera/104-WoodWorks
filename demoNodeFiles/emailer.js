var nodemailer = require("nodemailer");

var transporter = createTransporter({
  service: "gmail",
  auth: {
    user: "",
    password: "",
  },
});

var mailOptions = {
  from: "",
  to: "",
  subject: "",
  text: "",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent:" + info.response);
  }
});
