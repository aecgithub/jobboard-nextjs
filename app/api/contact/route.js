import nodemailer from 'nodemailer';
import { NextResponse } from "next/server";


export async function POST(request){
    const {name,email,subject,message} = await request.json()
    let res = []
    const transporter = nodemailer.createTransport({
        host:  `mail.all-european-careers.com`,
    port: 465,
    secure: true,
    auth: {
      user: `info@all-european-careers.com`,
        pass: `vEw9.DTYjAr7`,
    },
    })

    try {
        const emailRes = await transporter.sendMail({
        from: 'info@all-european-careers.com',
        //   to : 'info@all-european-careers.com',
          to : 'malin.pramoditha@gmail.com',
          subject: `Contact form submission from ${new Date().toLocaleString('en-US', { timeZone: 'Europe/Madrid' })} `,
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
                                    <img src="https://aec-nextjs.netlify.app/images/logo.png" width="200px"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="text-align: center;">
                                    <p style="font-weight : bold; ">${subject}</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>${message}</p>
                                    ${name}<br>
                                    ${email}<br>
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