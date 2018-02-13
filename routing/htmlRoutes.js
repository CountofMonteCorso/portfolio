module.exports = function(app, path) {
	var publicPath = '../public/';

	app.get("/", function(req, res) {
	    res.sendFile(path.join(__dirname, publicPath + "home.html"));
	});

	app.get("/about", function(req, res) {
	    res.sendFile(path.join(__dirname, publicPath + "about.html"));
	});


	app.get("/contact", function(req, res) {
	    res.sendFile(path.join(__dirname, publicPath + "contact.html"));
	});

	app.get("/projects", function(req, res) {
	    res.sendFile(path.join(__dirname, publicPath + "projects.html"));
	});

	// app.get("*", function(req, res) {
	//     res.redirect('/');
	// });

	app.post("/contact", function(req, res) {
		console.log('req', req.body);
		var nodemailer = require('nodemailer');
		let transporter = nodemailer.createTransport({
		    service: 'gmail',
		 	auth: {
		        user: 'kevdevmailer@gmail.com',
		        pass: process.env.gmailpwd
		    }
		});


		const mailOptions = {
		    from: req.body.firstname + req.body.lastname, // sender address
		    to: 'kcorso89@gmail.com',
		    subject: req.body.subject, 
		    // cc: req.body.email, 
		    html: "<p>" + req.body.message + "</br>" + " That's the end of the message, sir.  It was sent by  FIRST NAME: " + req.body.firstname + " LAST NAME: " + req.body.lastname + " The email address they provided is: " + req.body.email + "</p>"
		};

		transporter.sendMail(mailOptions, function (err, info) {
		   if (err)
		       console.log(err);
		   else
		       console.log(info);
		});
		//res.send('you suck'); you can redirect here also, but do the modal you lazy fuck
	});
}
