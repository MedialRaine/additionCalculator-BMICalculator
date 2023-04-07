const express = require("express");
const bodyParser = require("body-parser");
//We import our modules 

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;
//Then we initialize the app express, we prepare the bodyparser as well and initialize the port in which we are gonna hear the activity. We just need to adress to the localhost:3000 in the browser

//Then we create the first get petition and we render the file index.html
app.get("/", function (req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
	var n1 = Number(req.body.n1);
	var n2 = Number(req.body.n2);
	var result = n1 + n2;

	res.send("Your the result of your addition is  " + result);
	//Here once the petition post is asked, then we can get do some functionality, in this case make the computing for an addition and then send the result as well.
});

//Then when the  user is going to click in the link to the bmi calculator then we are manage the rout by the action property of the form that we already prepared on the file bmicalculator.html.
app.get("/bmicalculator.html", function (req, res) {
	res.sendFile(__dirname + "/bmiCalculator.html");
	//we prepare the answer as well, so we send the requested file
});

app.post("/bmicalculator", function (req, res) {
	var weight = parseFloat(req.body.weight);
	var height = parseFloat(req.body.height);

	var bmi = Math.floor(weight / (height * height));

	res.send("Your BMI is " + bmi);
	//Finally we handle the data provided by the user, we save them in variables, for the precess them and storage them in another variable called bmi, in which we are going to show the result to the user
});

app.listen(port, function () {
	console.log("Server started on port 3000");
});
