const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();



//conexao com o banco de dados mongodb
//senha padrao (lembrar)
mongoose.connect("mongodb+srv://rodrigo:SENHA@cluster0-okzyc.mongodb.net/test?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3334);