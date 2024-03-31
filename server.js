const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
var cors = require('cors');
const bodyParser = require("body-parser"); 

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://brohithkumar:9976188669@cluster0.2wl7tuh.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});


// User model
const User = mongoose.model('User',{
    name: { type: String },
});



app.post("/", (req, res) => {
    const Name = req.body.Name
    console.log(Name);
    
    //Creating new user
    var new_user = new User({
        name: Name,
    })

    try {
        const dataToSave = new_user.save();
        console.log("Data saved!");
    } catch (error) {
        console.log("Error");
    }
     
  res.send("Data Saved!");

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
