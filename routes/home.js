var data = require('../data.json');

/*
 * GET home page.
 */
 exports.view = function(req, res){
 	console.log("[DEBUG] Home ran");
 	res.render('home', data);
 };