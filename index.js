let express=require("express");
let cors=require("cors");
const nodemailer=require("nodemailer");
const app=express();
app.use(express.json())
app.use(cors());
let dotenv=require("dotenv")
dotenv.config();
app.get("/",(req,resp)=>{
    resp.send("backend working")
})
app.get("/sendmail/:recepient",(req,resp)=>{
    let tosendEmail=req.params.recepient;
    let transporter=nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:465,
        secure:true,
        requireSSL:true,
        auth:{
            user:process.env.PROVIDER,
            pass:process.env.SMTP_AUTH
        }
    });
    let mailOptions = {
        from: `${`Selection at JASPL`} <ujjuguptu@gmail.com>`,
        to: tosendEmail,
        subject: `${`You have been selected at JASPL`}`,
        html:"<h4>Dear User</h4><br/>Team JASPL hopes you are doing great,<br/>It's to kindly update you that you have been selected at JASPL and will be provided further informations soon.Soon your interview slots will be updated.<br/>With best Reagrds<br/>Team JASPL"
        
    };
    transporter.sendMail(mailOptions,(err,info)=>{
        if(err){
         resp.send({result:"Error sending mail",success:false})
        }
        else{
            resp.send({result:"Mail sent",success:true})

        }
    })
})

  
app.listen(7000);