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

	app.get("*", function(req, res) {
	    res.redirect('/');
	});

}
