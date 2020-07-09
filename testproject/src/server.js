<<<<<<< HEAD
const bodyParser = require('body-parser');
const express = require('express');

const cors = require('cors');

const app = express();
=======

const bodyParser = require('body-parser');
const log = require('morgan')('dev');
const express = require('express');
const cors = require('cors');


>>>>>>> 2d9a6844b4b1d655c73661a9429896cd2a1d6bbc
app.use(bodyParser.urlencoded({extended: true}));
// Configure bodyparser
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });
const bodyParserRaw = bodyParser.raw();
const bodyParserText = bodyParser.text();

// Configure app.use()
app.use(express.json());
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);
app.use(bodyParserRaw);
app.use(bodyParserText);
app.use(cors());

const router = require("./route");

app.use("/api/v1", router);


<<<<<<< HEAD
app.get('/api/v1/w', (req, res) =>
	res.json({ message: 'Hello World! Welcome' })
=======
app.get('/api/v1', (req, res) =>
	res.json({ message: 'Hello World! Welcome to iDeyPay Till Engine' })
>>>>>>> 2d9a6844b4b1d655c73661a9429896cd2a1d6bbc
);

const PORT = 3000;
app.listen(PORT, () => {
	
	console.log(`server started on port ${PORT}`);
<<<<<<< HEAD
});
=======
});
>>>>>>> 2d9a6844b4b1d655c73661a9429896cd2a1d6bbc
