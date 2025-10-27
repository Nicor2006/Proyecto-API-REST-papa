const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = 10000;
const bodyParser = require("body-parser");
const Postroutes = require("./routes/post");
app.use(bodyParser.json());

app.use("/services", Postroutes);

app.get("/", (req, res) => {
  res.send("Respuesta prueba 1");
});

mongoose
  .connect(
    "mongodb+srv://nicolay_db_user:BaYWCLVpSyUP6pQU@cluster0.p61kt1e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Conexión exitosa a la base de datos"))
  .catch((error) =>
    console.error("Error de conexión a la base de datos:", error)
  );

app.listen(port);
