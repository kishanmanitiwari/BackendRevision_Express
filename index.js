import express from 'express';
import path from "path";
const __dirname = path.resolve("./");
const app = express();

//Route define

app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/index.html');

});

app.get("/about",(req,res)=>{
    res.send("About Us");
})

app.get('/user',(req,res)=>{
    res.sendFile(__dirname+'/user.json')
    console.log(__dirname+'/user.json');
    
})


//Server initialise
app.listen(3000,()=>{
    console.log(`Server is running on port 3000`);
});