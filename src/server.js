const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const port = 8000
const users_collection1 = require('./userdatabase/userdata.js')
require("./userdatabase/mongoose_connection.js")

const app = express();

app.use(bodyparser.urlencoded(
    {
        extended: true
    })
)
app.use(express.json())//it is used to go to specified middleware functions.......
let mainfolder = path.join(__dirname, "../");


app.get('/', (req, res) => {
    res.send('home page')
});

app.get('/register', (req, res) => {
    res.sendFile(mainfolder + "/contacts.html")
});
console.log('hello');

app.post('/register',(req, res) => {
    console.log('hello');

    let req_userdata = new users_collection1(req.body);
    
    req_userdata.save();
    res.sendFile(mainfolder + "/contacts.html")
})


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})