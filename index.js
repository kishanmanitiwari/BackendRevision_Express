import express from 'express';
import path from "path";
import bodyParser from 'body-parser'; //middleware

const __dirname = path.resolve("./");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Custom middleware
function validateUser(req, res, next) {
    if (req.body.userid === 'abc' && req.body.pass === 'def') {
        res.send("User login Success!");
    } else {
        res.status(401).send("Unauthorized");
    }
}

// Route definitions
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get("/about", (req, res) => {
    res.send("About Us");
});

app.get('/user', (req, res) => {
    res.sendFile(__dirname + '/user.json');
    console.log(__dirname + '/user.json');
});

app.post('/submit', validateUser, (req, res) => {
    // If validateUser middleware doesn't end the request, this will run
    res.send("Form submitted");
});

// Server initialization
app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
