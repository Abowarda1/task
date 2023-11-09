const express = require ('express');
const mongoose = require('mongoose');


let app = express();

mongoose.connect("mongodb://0.0.0.0:27017/students", (err)=>{
    if (!err) console.log('DB now is connected');
else console.log (err)
})

//schema

const studentSchema= new mongoose.Schema({
    name : String,
    age : Number,
    phone : String,
    address : string
})

//convert schema to model ( class)
let studentModel = new  mongoose.model("students",studentSchema); 

let newuser = studentModel({

name : "omar ahmed",
age : 21 , 
phone : "01111111111",
address : "egypt: new cairo"

}).save();

let youssif = studentModel({
    name : "youssif",
    age : 22,
    phone : "01222222222",
    adress : "egypt: portsaid"
    
}).save();

let ali =studentModel({
name : "ali",
age : 20,
phone : "01555555555",
adrress: "egypt : ismaelia"

}).save();

const courseSchema = new mongoose.Schema({
    name : string,
    description : string
})

let coursemodel =new mongoose.model1("courses", courseSchema);

let firstcourse =coursemodel({
    name : "history",
    description : "theortical subject"
}).save();
    
let secondcourse = coursemodel({
    name : "physics",
    description: "practical subject"
}).save();


app.get('/students', async (req,res)=>{
    let allstudents= await studentModel.find();
    res.status(200);
    console.log(allstudents.length)
    res.json(allstudents)

})



app.get('/courses', async (req,res)=>{
    let allcourses= await coursemodel.find();
    res.status(200);
    console.log(allcourses.length)
    res.json(allcourses)

})

app.get('', async (req,res)=>{
res.send(" ahla wa shalaa")

})



app.listen(3000, function(){
console.log('server now is opened')
} )