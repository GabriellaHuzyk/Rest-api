const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const db = require("./routes/database/db");

app.listen(3006, () => {
  console.log("Servidor rodando na porta 3006...");
});

const rotaProdutos = require("./routes/products");
const rotaPedidos = require("./routes/orders");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Acess-Control-Allow-Origin", "*");
  res.header(
    "Acess-Control-Allow-Header",
    "Origin, X-Requested-With",
    "Content-Type, Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    res.header("Acces-Control-Allow-Methods", "PUT, POST, GET, PATCH, DELETE");
    return res.status(200).send({});
  }
  next();
});

app.use("/products", rotaProdutos);
app.use("/orders", rotaPedidos);

app.use((req, res, next) => {
  const erro = new Error("Não encontrado");
  erro.status = 404;
  next(erro);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    erro: {
      mensagem: error.message,
    },
  });
});
