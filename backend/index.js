const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.post("/contact-me", (req, res) => {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "shubhamdhkarad@gmail.com",
      pass: "kssffubvwkwvkypa",
    },
  });

  var mailOptions = {
    from: "shubhamdhkarad@gmail.com",
    to: "shubhkrd@gmail.com",
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
app.listen(4000, () => {
  console.log("Server is running :)");
});
