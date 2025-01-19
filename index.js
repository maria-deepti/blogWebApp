import express from "express";

// import bodyParser from "body-parser";

const app = express();
const port =3000;
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.get("/blog1",(req,res)=>{
    res.render("pages/blog1.ejs");
})

app.get("/blog2",(req,res)=>{
    res.render("pages/blog2.ejs");
})

app.listen(port,() =>{
    console.log(`listening on port ${port}`);
})