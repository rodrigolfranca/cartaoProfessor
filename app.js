const express = require('express');
const cors = require("cors");
const app = express();
const port = 3000;

const configCors = {
    origin: false
}

const professor = {
    "greeting":"Hi! I guess it's better talk about me in a json, sup? :p",
    "aboutMe":"I call myself an digital highlander, i past last years walking alone here and doing nasty tech stuff on my house",
    "email":"leonardociberxon@gmail.com",
    "linkedin":"https://www.linkedin.com/in/leonardo-araujo-pimentel-26619972/",
    "mobileNumber":"+5571988889706",
    "reminder":"If you seeing this on your web browser, ya you doing right"
}

app.use(cors())

app.get("/aboutme", cors(configCors) , (req, res) => {
    res.json(professor)
});

app.listen(port, () => console.log(`Backend listening on port ${port}!`));