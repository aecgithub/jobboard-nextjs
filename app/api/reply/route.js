import nodemailer from 'nodemailer';
import { NextResponse } from "next/server";


export async function POST(request){
    const {name,email} = await request.json()
    let res = []
    const transporter = nodemailer.createTransport({
        host:  `mail.be-consultancy-group.com`,
    port: 465,
    secure: true,
    auth: {
        user: `info@be-consultancy-group.com`,
        pass: `8z$rY^fH0JbZ`,
    },
    })

    try {
        const emailRes = await transporter.sendMail({
            from: 'no-reply@all-european-careers.com',
        //   to : 'info@all-european-careers.com',
          to : email,
            subject: `We have received your message`,
          html: `
             <!DOCTYPE html>
                    <html>
                    <head>
                        <title>Your Email Title</title>
                    </head>
                    <body style="font-family: Arial, sans-serif;">

                        <table cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto; border-collapse: collapse;">
                            <tr>
                                <td style="background-color: #f4f4f4; padding: 20px; text-align: center;">
                                    <img src="https://bec-new.netlify.app//images/logo.png" width="200px"/>
                                </td>
                            </tr>
                            <tr>
                                <td >
                                    <p style="text-align: center; padding: 0 20px; margin-bottom: 10px;">Hi  ${name},<br>
                                        Thank you for contacting us!
                                        <br>We have received your message and will respond as soon as possible.<br> Have a great day!</p>
                                </td>
                            </tr>
                            <tr>
                                <td style="background-color: #f4f4f4; padding: 20px; text-align: center; margin-top: 10px;">
                                    <p style="color: #888;">This email has been generated automatically from www.be-consultancy-group.com.</p>
                                </td>
                            </tr>
                        </table>

                    </body>
                </html>
          `

        })
        // emailRes
       
         res = emailRes
    } catch (error) {
        console.log(error)
        
    }
    // return NextResponse.json({message: 'message sent'},{status : 200})
    return NextResponse.json(res)

}