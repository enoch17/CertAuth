const bodyParser = require('body-parser');
const express = require('express');

const cors = require('cors');

const app = express();
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


app.get('/api/v1/w', (req, res) =>
	res.json({ message: 'Hello World! Welcome' })
);

const PORT = 3000;
app.listen(PORT, () => {
	
	console.log(`server started on port ${PORT}`);
});