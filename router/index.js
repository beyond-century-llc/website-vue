const express = require("express")
const router = express.Router()
const nodemailer = require('nodemailer');
const axios = require('axios');


let clientId = '363262242717-pee092aho9jn0lnht1bfqqv7s8qaa6ov.apps.googleusercontent.com';
let clientSecret = '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';
let refreshToken =
    '1//04LbNsxRBxva_CgYIARAAGAQSNwF-L9Irs9pAChmypWo7jbK0adC3ZvFgcqvi_7QE-HQ0J3uXwIqk5mTPpm4chZY0ghfJJjrGQCc';
let accessToken =
    'ya29.a0AfB_byA-lRowPlICiJsyiP3dHFEnoAhtq8KVxnt_68gZQrsRatxekeZYM_MtgCR3mOhRVJS7-2ErPQQxFBWJu_gCKbWX9SI827rKCjnRHKJGn9dwJ9wUZv1R2Bm7R_jbhr9ShBHOsHpUVpB_1hMawulNLKvHMyHM5ZllaCgYKAVsSARESFQHGX2Mi1W-9Q98VBxHWgMc4A__CmA0171'






//挂载具体路由 GET
router.get("/user", (req, res) => {
    const query = req.query //url中携带的信息
    res.send({
        status: 0,
        msg: 'GET请求成功',
        data: query
    })
})


// const res = await ctx.curl("https://accounts.google.com/o/oauth2/token", {
//       method: "POST",
//       contentType: "json",
//       dataType: "json",
//       data: {
//         client_id: clientId,
//         client_secret: clientSecret,
//         refresh_token: refreshToken,
//         grant_type: "refresh_token",
//       },
//     });
//     const { access_token } = res.data || {};

//挂载具体路由 POST
router.post("/userInfo", (req, res) => {
    const body = req.body //请求体
    console.log(body.access_token, 'body')
    
    // 创建发送邮件的传输器对象
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        // proxy: 'http://127.0.0.1:1087/',
    
        auth: {
            type: "OAuth2",
            user: "beyondcc.001@gmail.com",
            clientId: "363262242717-pee092aho9jn0lnht1bfqqv7s8qaa6ov.apps.googleusercontent.com",
            clientSecret: "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",
            refreshToken: "1//04LbNsxRBxva_CgYIARAAGAQSNwF-L9Irs9pAChmypWo7jbK0adC3ZvFgcqvi_7QE-HQ0J3uXwIqk5mTPpm4chZY0ghfJJjrGQCc",
            accessToken: body.access_token,
        },
    
    });
    
    
    // 设置邮件内容
    // beyondcc.002@gmail.com
    let mailOptions = {
        from: 'beyondcc.001@gmail.com', // 发件人地址
        to: 'beyondcc.002@gmail.com', // 收件人地址
        subject: '来自客户' + body.userInfo.name + '的咨询', // 邮件主题
        text: `
            name:${body.userInfo.name};
            phone: ${body.userInfo.phone};
            email: ${body.userInfo.email};
            Consultation content: ${body.userInfo.text}
        `

        // 邮件正文内容
    };

    // 发送邮件
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
            res.send({
                status: 1,
                msg: '邮件发送失败：' + error + ';请联系管理员',
                // data: body
            })
        } else {
            res.send({
                status: 0,
                msg: '邮件发送成功',
                // data: body
            })
            console.log('邮件发送成功:', info.response);
        }
    });



})
module.exports = router