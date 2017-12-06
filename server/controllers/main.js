'use strict';

var request = require('request');
var nodemailer = require('nodemailer');

exports.test = function(req, res){
	console.log('Test api call');
}


exports.emailApplicant = function(req,res){
	var email = req.body.email,
	message = req.body.message,
	name = req.body.name;
	res.json(snedEmail(name, email, message, 'an applicant'));
}

exports.emailStudent = function(req,res){
	var email = req.body.email,
	message = req.body.message,
	name = req.body.name;
	res.json(snedEmail(name, email, message, 'an enrolled student'));
}

exports.emailUni = function(req,res){
	var email = req.body.email,
	message = req.body.message,
	name = req.body.name;
	res.json(snedEmail(name, email, message, 'a university or college'));
}

exports.emailPress = function(req,res){
	var email = req.body.email,
	message = req.body.message,
	name = req.body.name;
	res.json(snedEmail(name, email, message, 'a press contact'));
}

var snedEmail = function(name, email, message, type){
	var directConfig = 'direct:?name=hostname';
	var mailOptions = {
		host: 'smtp.gmail.com',
		port: 465,
	    secure: true, // use SSL
	    auth: {
	    	user: 'ryan@layers.studio',
	    	pass: 'Runaway121'
	    }
	}    

	var transporter = nodemailer.createTransport(mailOptions);

	// setup e-mail data with unicode symbols 
	var mailOptions = {
	    from: email, // sender address 
	    to: ['ryan@layers.studio'], // list of receivers 
	    subject: 'Website contact from ' + email, // Subject line 
	    text: message, // plaintext body 
	    html: `
	    <p>You have received a new email from an `+ type + `</p>
	    <p>Name: ` + name + `<p>
	    <p>Email: ` + email + `<p>
	    <p>Message:</p>
	    <p> ` + message + `</p>`
	};

	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			return {msg:'failed', err:error};
		} else {
			verificationEmail(name, email);
			return {msg:'ok'};
		}
	});
}


var verificationEmail = function(name, email){
	console.log('verificationEmail')
	var directConfig = 'direct:?name=hostname';

	var mailOptions = {
		host: 'smtp.gmail.com',
		port: 465,
	    secure: true, // use SSL
	    auth: {
	    	user: 'ryan@layers.studio',
	    	pass: 'Runaway121'
	    }
	}    

	var transporter = nodemailer.createTransport(mailOptions);

	// setup e-mail data with unicode symbols 
	var mailOpt = {
	    from: 'ryan@layers.studio', // sender address 
	    to: email, // list of receivers 
	    subject: 'Thanks for contacting StudyAtlas', // Subject line 
	    text: 'Your message was submitted', // plaintext body 
	    html: `
	    <style type="text/css">
	    .logo{margin: 35px auto 43px auto;width: 197px;height: 122px;}
	    .logo img{width: 197px;height: 122px;}
	    .image{width: 118px;height: 98px;margin: 0 auto;}
	    .image-tick{width: 98px;height: 98px;margin: 0 auto;}
	    .image-tick img{width: 98px;height: 98px;}
	    .image-warning{width: 82px;height: 82px;margin: 0 auto}
	    .image-warning img{width: 82px;height: 82px;}
	    .image-question{ width: 48px;height: 74px;object-fit: contain;margin: 0 auto}
	    .image-question img{ width: 48px;height: 74px;object-fit: contain;}
	    .text{width:100%;font-family: Roboto, Arial, Helvetica, sans-serif;font-size: 20px;line-height: 1.2;text-align: center;color: rgba(0, 0, 0, 0.87);margin-bottom: 24px;}
	    .text-one{max-width: 560px;height: 48px;font-family: Roboto, Arial, Helvetica, sans-serif;font-size: 20px;line-height: 1.2;text-align: center;color: rgba(0, 0, 0, 0.87);margin:0 auto 24px auto;}
	    .text-one span{color: #00a4b9;}
	    .text-sub{max-width:392px;font-family: Roboto, Arial, Helvetica, sans-serif;font-size: 16px;line-height: 1.25;text-align: center;color: rgba(0, 0, 0, 0.87);margin:24px auto 24px auto;}
	    .text-small{max-width:392px;font-family: Roboto, Arial, Helvetica, sans-serif;font-size: 13px;line-height: 1.38;text-align: center;color: rgba(0, 0, 0, 0.87);margin:24px auto 48px auto;}
	    .text-small-one{max-width:392px;font-family: Roboto, Arial, Helvetica, sans-serif;font-size: 13px;line-height: 1.38;text-align: center;color: rgba(0, 0, 0, 0.87);margin:24px auto 24px auto;}
	    .text-small-two{max-width:392px;font-family: Roboto, Arial, Helvetica, sans-serif;font-size: 13px;line-height: 1.38;text-align: center;color: rgba(0, 0, 0, 0.87);margin:24px auto 48px auto;}
	    .btn-container{width:100%;text-align: center;}
	    .btn-container-one{width:100%;text-align: center;margin-bottom: 40px;}
	    .btn{display:inline-block;width: 285px;padding:11px 0;border-radius: 4px;background-color: #4dd0e1;font-family: Rubik, Arial, Helvetica, sans-serif;font-size: 14px;line-height: 1.14;text-align: center;color: #37474f;margin:0 auto;text-decoration: none;}
	    .social-container{width:285px;margin:46px auto 0 auto;padding-bottom: 24px;}
	    .social-icon{width:33%;float:left;text-align: center;}
	    .social{width:24px;display: inline-block;}
	    .social img{width:24px;height: 24px;}
	    .social-one img{width:28px;height: 24px;}
	    .footer-container{width:100%;padding:24px 0;border-top:1px solid rgba(69, 90, 100, 0.24);}
	    .footer-logo{width: 159px;height: 48px;object-fit: contain;float: left;}
	    .footer-logo img{width: 159px;height: 48px;object-fit: contain; }
	    .footer-two{width: 112px;height: 47px;float:left;margin:0 24px 0 29px;}
	    .footer-two img{width: 112px;height: 47px;}
	    .footer-info{width: 230px;height: 36px;float:right;}
	    .footer-info p{font-family: Roboto, Arial, Helvetica, sans-serif;font-size: 8px;line-height: 1.5;text-align: left;color: rgba(0, 0, 0, 0.87);}
	    .footer-info a{color: #00a4b9;text-decoration: none;}
	    .box{max-width: 600px;padding:53px 24px 24px 24px;background-color: #eceff1;margin:0 auto 40px auto;}
	    .box-one{max-width: 560px;padding:16px 24px 24px 24px;background-color: #eceff1;}
	    .box-one p{font-family: Roboto, Arial, Helvetica, sans-serif;font-size: 12px;line-height: 1.33;text-align: left;color: rgba(0, 0, 0, 0.87);}
	    .box-one a{font-family: Roboto, Arial, Helvetica, sans-serif;font-size: 12px;line-height: 1.33;text-align: left;color: #00a4b9;}
	    .box-div{float: left;width:33.33%;text-align: center}
	    .box-image{width: 62px;height: 62px;margin:0 auto;}
	    .box-title{font-family: Rubik;font-size: 18px;font-weight: 500;line-height: 1.56;color: #37474f;}
	    .box-content{font-family: Roboto, Arial, Helvetica, sans-serif;font-size: 12px;line-height: 1.33;text-align: center;color: rgba(0, 0, 0, 0.87)}
	    .notice{max-width:530px;opacity: 0.54;font-family: Roboto, Arial, Helvetica, sans-serif;font-size: 12px;font-style: italic;line-height: 1.33;text-align: center;color: rgba(0, 0, 0, 0.87);margin:40px auto 40px auto}
	    .notice-one{max-width:100%;font-family:Roboto, Arial, Helvetica, sans-serif;font-size: 12px;font-style:italic;line-height: 1.33;text-align: center;color: rgba(0, 0, 0, 0.87);margin:32px 0 24px 0;}
	    .clear{clear:both}
	    </style>

	    <table class="m_970596860839143474main">
	    <tbody>
	    <tr>
	    <td class="m_970596860839143474wrapper">
	    <table border="0" cellpadding="0" cellspacing="0">
	    <tbody>
	    <tr>
	    <td class="m_970596860839143474title"></td>
	    </tr>
	    <tr>
	    <td>
	    <div class="logo">
	    <img src="https://dev.studyatlas.net/images/emails/logo.png" alt="logo" />
	    </div>

	    <p class="text">
	    Hello `+ name +`, thanks for getting in touch. 
	    </p>

	    <p class="text-sub">
	    We have received your email and will get back to you shortly.
	    </p>

	    <div class="social-container">
	    <div class="social-icon">
	    <a href="https://www.facebook.com/studyatlashq/" class="social">
	    <img src="https://dev.studyatlas.net/images/emails/face.png" alt="social">
	    </a>
	    </div>
	    <div class="social-icon">
	    <a href="https://twitter.com/studyatlashq" class="social-one">
	    <img src="https://dev.studyatlas.net/images/emails/twitter.png" alt="social">
	    </a>
	    </div>
	    <div class="social-icon">
	    <a href="mailto:info@studyatlas.com" class="social-one">
	    <img src="https://dev.studyatlas.net/images/emails/email.png" alt="social">
	    </a>
	    </div>
	    <div class="clear"></div>
	    </div>

	    <div class="footer-container">
	    <div class="footer-logo">
	    <img src="https://dev.studyatlas.net/images/emails/logo-footer.png" alt="social">
	    </div>
	    <div class="footer-two">
	    <img src="https://dev.studyatlas.net/images/emails/footer-one.png" alt="social">
	    </div>

	    <div class="footer-info">
	    <p>©2017 StudyAtlas. 
	    <a href="">Unsubscribe</a> or 
	    <a href="">view in browser.</a> <br>
	    675 Ponce de Leon Ave NE, Suite 5000, Atlanta, GA 30308.<br>
	    </p>
	    </div>
	    </div>
	    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
	    <link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet">
	    </td>
	    </tr>
	    </tbody>
	    </table>
	    </td>
	    </tr>
	    </tbody>
	    </table>
	    `
	};

	transporter.sendMail(mailOpt, function(error, info){});
}
