const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const port = process.env.PORT || 4000;
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//   })
// );
app.use(express.json());
require("dotenv").config();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.post("/contact-me", (req, res) => {
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header(
  //   "Access-Control-Allow-Headers",
  //   "Origin, X-Requested, Content-Type, Accept Authorization"
  // );
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
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Methods", "POST, PUT, PATCH, GET, DELETE");
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
