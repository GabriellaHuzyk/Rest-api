const express = require("express");
const router = express.Router();
//RETORNA todos os produtos
router.get("/", (req, res, next) => {
  res.status(200).send({
    mensagem: "Usando o GET dentro da rota de produtos",
  });
});
//INSERE um produto
router.post("/", (req, res, next) => {
  res.status(201).send({
    mensagem: "Usando o POST dentro da rota de produtos",
  });
});
//RETORNA os dados de um produto
router.get("/:id_produto", (req, res, next) => {
  const id = req.params.id_produto;

  if (id === "especial") {
    id: id;
    res.status(200).send({
      mensagem: "Usando o GET de um produto exclusivo",
      id: id,
    });
  } else {
    res.status(200).send({
      mensagem: "Você passou um id",
    });
  }

  //ALTERA um produto
  router.patch("/", (req, res, next) => {
    res.status(201).send({
      mensagem: "Usando o PATCH dentro da rota de produtos",
    });
  });

  //DELETA um produto
  router.delete("/", (req, res, next) => {
    res.status(201).send({
      mensagem: "Usando o DELETE dentro da rota de produtos",
    });
  });
});

module.exports = router;
