const nodemailer=require("nodemailer");
let transporter=nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:465,
    secure:true,
    requireSSL:true,
    auth:{
        user:"ujjuguptu@gmail.com",
        pass:"vmtp nkob sjcp dqdg"
    }
});
let mailOptions = {
    from: `${from_info} <ujjuguptu@gmail.com>`,
    to: toSendMail,
    subject: `${subject}`,
    // text:`${text}`,
     html:text
};
transporter.sendMail(mailOptions,(err,info)=>{
    if(err){
     console.log("Not sent")
    }
    else{
     console.log("Sent")
    }
})