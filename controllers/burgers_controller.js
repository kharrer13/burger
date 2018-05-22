const expr = require('express');
const burger = require('../models/burger');
const router = expr.Router();

router.get('/', function(req,res) {
	res.redirect('/burger')
});

router.get('/burger', function(req,res) {

	Burger.all(data => {
		let hbsObject = {burgers : data}
		console.log(hbsObject)
		res.render('index', hbsObject);
	});
});

router.post('/burger/create', (req,res) => {
	burger.create(['name', 'devoured'], [req.body.name, req.body.devoured], (data) => {
		res.redirect('/burger')
	});
});

router.put('/burger/update/:id', (req,res) => {
	let condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	burger.update({'devoured' : req.body.devoured}, condition, (data) => {
		res.redirect('/burger');
	});
});
