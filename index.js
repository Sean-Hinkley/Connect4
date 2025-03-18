const bodyParser = require("body-parser");
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const http = require('http');
const socketIO = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const connectionString = "mongodb+srv://seanhinkley567:hi6yIe40@school.9eciq.mongodb.net/?retryWrites=true&w=majority&appName=School";

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);
    socket.on("buttonPressed", (data) => {
        console.log(data);
    })
})



MongoClient.connect(connectionString, {autoSelectFamily: false})
.then(client => {
    console.log('connected to database');
    const db = client.db('chatroom');
    const messagesCollection = db.collection;
}).catch(console.error)
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.render('index');
})

const port = 3000
server.listen(port,function () {
    console.log(`IP: http://localhost:${port}`)
})