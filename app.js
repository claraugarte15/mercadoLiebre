const path = require("path");
const express = require("express");
const app = express();


app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"))
});

app.listen(4000, () => {
console.log("Servidor corriendo en el puerto 4000")
});