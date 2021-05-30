const express = require("express");
const router = express.Router();

//RETORNA todos os produtos
router.get("/", (req, res, next) => {
  res.status(200).send({
    mensagem: "Retorna os produtos",
  });
});

//INSERE um produto
router.post("/", (req, res, next) => {
  res.status(201).send({
    mensagem: "Insere um produto",
  });
});

//RETORNA os dados de um produto
router.get("/:id_pedido", (req, res, next) => {
  const id = req.params.id_produto;
  if (id === "especial") {
    res.status(200).send({
      mensagem: "Você descobriu o Id especial",
      id: id,
    });
  } else {
    res.status(200).send({
      mensagem: "Você passou um id",
    });
  }

  //ALTERA um pedido
  router.patch("/", (req, res, next) => {
    res.status(201).send({
      mensagem: "Alterando um pedido",
    });
  });

  //DELETA um pedido
  router.delete("/", (req, res, next) => {
    res.status(201).send({
      mensagem: "Deletando um pedido",
    });
  });
});

module.exports = router;
