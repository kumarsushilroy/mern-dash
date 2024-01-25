
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
dotenv.config();

// For Deploy.....
const path = require('path');

// Routes
const userRoute = require('./Routes/UserRoute');
const productRoute = require('./Routes/ProductRoute');

const app = express();

// For Connection
const connect = require('./Connection');

//Middle Ware
app.use(express.json());
app.use(cors());

//Route
app.use(userRoute);
app.use(productRoute);


// Static files for deploy......
app.use(express.static(path.join(__dirname, './client/dist')));

// function for deployment............
app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, "./client/dist/index.html"))
});



const PORT = process.env.PORT || 4000



// app.get('/get',(req,res)=>{
//     res.send({msg:'true'})
// })

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
    connect();
})