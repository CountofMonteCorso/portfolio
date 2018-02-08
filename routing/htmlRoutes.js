module.exports = function(app, path) {
	var publicPath = '../public/';

	app.get("/", function(req, res) {
	    res.sendFile(path.join(__dirname, publicPath + "home.html"));
	});

	app.get("/about", function(req, res) {
	    res.sendFile(path.join(__dirname, publicPath + "about.html"));
	});

	app.get("/projects", function(req, res) {
	    res.sendFile(path.join(__dirname, publicPath + "projects.html"));
	});

	// app.get("*", function(req, res) {
	//     res.redirect('/');
	// });

	app.post("/contact", function(req, res) {
		var gmailNode = require('gmail-node');
		var clientSecret = {
		    installed: {
		        client_id: "943233085776-09riqtcnhp62pv3j2erb7e20lq0pirr9.apps.googleusercontent.com",
		        project_id: "helical-chemist-194601",
		        auth_uri: "https://accounts.google.com/o/oauth2/auth",
		        token_uri: "https://accounts.google.com/o/oauth2/token",
		        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
		        client_secret: "ov9uNjbWlipSx3QynazX0atJ"
		    }
		};
		gmailNode.init(clientSecret, '../../client_id.json', function(err,data) {
			console.log('gmail init', err, data);
			var emailMessage = {
			    to: 'kcorso89@gmail.com',		
			    subject: 'suhh dude',
			    message: 'suh'
			};
			gmailNode.send(emailMessage, function (err, data) {
				console.log('send email', err, data);
			});
		});

	});
}
