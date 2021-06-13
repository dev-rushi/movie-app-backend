const express = require('express');
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 5500;



const router = require('./router');


const bodyParser = require("body-parser");

app.use(
    cors({
        origin: "*"
    })
)


app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use(router);

app.listen(PORT, () => {


    console.log("i am listening to the Posrt:" + PORT);

})
