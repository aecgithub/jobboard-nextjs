"use strict";(()=>{var e={};e.id=546,e.ids=[546],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},2081:e=>{e.exports=require("child_process")},6113:e=>{e.exports=require("crypto")},9523:e=>{e.exports=require("dns")},2361:e=>{e.exports=require("events")},7147:e=>{e.exports=require("fs")},3685:e=>{e.exports=require("http")},5687:e=>{e.exports=require("https")},1808:e=>{e.exports=require("net")},2037:e=>{e.exports=require("os")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},4404:e=>{e.exports=require("tls")},7310:e=>{e.exports=require("url")},3837:e=>{e.exports=require("util")},9796:e=>{e.exports=require("zlib")},2355:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>m,originalPathname:()=>g,patchFetch:()=>y,requestAsyncStorage:()=>c,routeModule:()=>u,serverHooks:()=>x,staticGenerationAsyncStorage:()=>d,staticGenerationBailout:()=>h});var a={};t.r(a),t.d(a,{POST:()=>n});var o=t(5419),s=t(9108),i=t(9678),p=t(8140),l=t(8984);async function n(e){let{name:r,email:t}=await e.json(),a=[],o=p.createTransport({host:"mail.all-european-careers.com",port:465,secure:!0,auth:{user:"info@all-european-careers.com",pass:"vEw9.DTYjAr7"}});try{a=await o.sendMail({from:"no-reply@all-european-careers.com",to:t,subject:"We have received your message",html:`
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
                                <td >
                                    <p style="text-align: center; padding: 0 20px; margin-bottom: 10px;">Hi  ${r},<br>
                                        Thank you for contacting us!
                                        <br>We have received your message and will respond as soon as possible.<br> Have a great day!</p>
                                </td>
                            </tr>
                            <tr>
                                <td style="background-color: #f4f4f4; padding: 20px; text-align: center; margin-top: 10px;">
                                    <p style="color: #888;">This email has been generated automatically from www.all-european-careers.com.</p>
                                </td>
                            </tr>
                        </table>

                    </body>
                </html>
          `})}catch(e){console.log(e)}return l.NextResponse.json(a)}let u=new o.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/reply/route",pathname:"/api/reply",filename:"route",bundlePath:"app/api/reply/route"},resolvedPagePath:"/Users/malin/Projects/nextjs/aec/app/api/reply/route.js",nextConfigOutput:"",userland:a}),{requestAsyncStorage:c,staticGenerationAsyncStorage:d,serverHooks:x,headerHooks:m,staticGenerationBailout:h}=u,g="/api/reply/route";function y(){return(0,i.patchFetch)({serverHooks:x,staticGenerationAsyncStorage:d})}}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[638,234],()=>t(2355));module.exports=a})();