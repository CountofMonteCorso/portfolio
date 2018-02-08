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
		var nodemailer = require('nodemailer');
		var transporter = nodemailer.createTransport({
		    service: 'gmail',
		 	auth: {
		        user: 'kevdevmailer@gmail.com',
		        pass: process.env.gmailpwd
		    }
		});

		const mailOptions = {
		    from: 'kevdevmailer@gmail.com', // sender address
		    to: 'kcorso89@gmail.com', // list of receivers
		    subject: 'Dev Test', // Subject line
		    html: '<p>Blah</p>'// plain text body
		};

		transporter.sendMail(mailOptions, function (err, info) {
		   if (err)
		       console.log(err);
		   else
		       console.log(info);
		});
	});
}
