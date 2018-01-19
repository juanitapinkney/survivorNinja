// Requires the path package to the html.
var path = require('path');
// Route 
module.exports = function(app) {
	// HTML GET Requests
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, + './routes/index.html'));
	});
	// User is routed to the Game page.
	app.get('/Game', function(req, res) {
		res.sendFile(path.join(__dirname, + './routes/Game.html'));
	});
	// // User is routed to the default page.
	app.get('/data/user', function(req, res) {
		res.sendFile(path.join(__dirname, + './routes/hmtl-routes.js'));
	});

	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, + './routes/index.html'));
	});
}