const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());
require("dotenv").config();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.post("/contact-me", (req, res) => {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER_ID,
      pass: process.env.PASS_ID,
    },
  });

  var mailOptions = {
    from: process.env.USER_ID,
    to: process.env.SEND_TO_ID,
    subject: "Discussion with Shubham",
    text: "That was easy!",
    html: `<h1>Hey Shubham!</h1><p>${name} needs to contact with you! Please find the below message from ${name}</p>
  <p>${message}</p> <span>Sender's Email Id: ${email}</span>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.send({ status: false, errorMessage: "Something went wrong :(" });
      console.log(error);
    } else {
      res.send({ status: true, responseMessage: "Email sent successfully!" });
      console.log("Email sent: " + info.response);
    }
  });
});
app.listen(port, () => {
  console.log(`Server is running :) at port ${port}`);
});
