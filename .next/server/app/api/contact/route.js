"use strict";(()=>{var e={};e.id=386,e.ids=[386],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},2081:e=>{e.exports=require("child_process")},6113:e=>{e.exports=require("crypto")},9523:e=>{e.exports=require("dns")},2361:e=>{e.exports=require("events")},7147:e=>{e.exports=require("fs")},3685:e=>{e.exports=require("http")},5687:e=>{e.exports=require("https")},1808:e=>{e.exports=require("net")},2037:e=>{e.exports=require("os")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},4404:e=>{e.exports=require("tls")},7310:e=>{e.exports=require("url")},3837:e=>{e.exports=require("util")},9796:e=>{e.exports=require("zlib")},9479:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>x,originalPathname:()=>g,patchFetch:()=>f,requestAsyncStorage:()=>u,routeModule:()=>c,serverHooks:()=>m,staticGenerationAsyncStorage:()=>d,staticGenerationBailout:()=>h});var o={};r.r(o),r.d(o,{POST:()=>l});var a=r(5419),s=r(9108),i=r(9678),n=r(8140),p=r(8984);async function l(e){let{name:t,email:r,subject:o,message:a}=await e.json(),s=[],i=n.createTransport({host:"mail.all-european-careers.com",port:465,secure:!0,auth:{user:"info@all-european-careers.com",pass:"vEw9.DTYjAr7"}});try{s=await i.sendMail({from:"info@all-european-careers.com",to:"info@all-european-careers.com",subject:`Contact form submission from ${new Date().toLocaleString("en-US",{timeZone:"Europe/Madrid"})} `,html:`
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
                                    <p style="font-weight : bold; ">${o}</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>${a}</p>
                                    ${t}<br>
                                    ${r}<br>
                                </td>
                            </tr>
                            <tr>
                                <td style="background-color: #f4f4f4; padding: 20px; text-align: center; margin-top: 10px;">
                                    <p style="color: #888;">This email has been generated automatically from www.all-european-careers.com/.</p>
                                </td>
                            </tr>
                        </table>

                    </body>
                </html>
          `})}catch(e){console.log(e)}return p.NextResponse.json(s)}let c=new a.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/contact/route",pathname:"/api/contact",filename:"route",bundlePath:"app/api/contact/route"},resolvedPagePath:"/Users/malin/Projects/nextjs/aec/app/api/contact/route.js",nextConfigOutput:"",userland:o}),{requestAsyncStorage:u,staticGenerationAsyncStorage:d,serverHooks:m,headerHooks:x,staticGenerationBailout:h}=c,g="/api/contact/route";function f(){return(0,i.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:d})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[638,234],()=>r(9479));module.exports=o})();