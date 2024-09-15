const exp=require("express");

const app = exp();

app.get("/", (req,res) => {
    res.send("<h1>HOME PA<h1>");
})

app.get("/about", (req,res) => {
    res.send("<h1>ABOUT PAGE<h1>");
})

app.listen("5000","localhost", () => {
    console.log("Port in 5000 lol")
});