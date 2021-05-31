const express = require("express");
const app = express();

app.listen(3006, () => {
  console.log("Servidor rodando na porta 3006...");
});

const rotaProdutos = require("./routes/produtos");
const rotaPedidos = require("./routes/pedidos");

app.use("/produtos", rotaProdutos);
app.use("/pedidos", rotaPedidos);
