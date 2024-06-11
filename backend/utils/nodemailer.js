import nodemailer from "nodemailer";

export async function sendEmail(to, from) {
  const { email, g_Otp , subject, name, phone , address , totalAmount , postal_code , message} = to;
  let output = "";

  if (subject === "Reset Password Code") {
    output = `
    <h3>Password Reset Code</h3>
    <p>This link will expire in 15 minutes</p>
    <p> ${g_Otp}</p>
  `;
  };

  if(subject === "New Order"){
    output = `
    <h3>New Order</h3>
    <p> From : ${name}</p>
    <p> Phone : ${phone}</p>
    <p> Address : ${address}</p>
    <p> postal Code : ${postal_code}</p>
    <p> Total Amount : ${totalAmount}</p>
  `;
  }

  if(subject === "New Message"){
    output = `
    <h3>New Message</h3>
    <p> From : ${name}</p>
    <p> Email : ${email}</p>
    <p> Phone : ${phone}</p>
    <p> Message : ${message}</p>
  `;
  }

  let transport = nodemailer.createTransport({
    host: "smtp.titan.email",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_AUTH_USER_EMAIL,
      pass: process.env.EMAIL_AUTH_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailoptions = {
    from: process.env.EMAIL_AUTH_USER_EMAIL,
    to: subject === "Reset Password Code" ? email : "never.reply87@gmail.com",
    subject: subject,
    html: output,
  };

  transport.sendMail(mailoptions, (error, info) => {
    if (error) {
      return false;
    }
    return true;
  });
}
