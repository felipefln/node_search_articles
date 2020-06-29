const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

// rota post para buscar o palavra enviada no POST
router.post("/", async (req, res) => {
  const { searchInput } = req.body;
  if (searchInput !== "") {
    try {
      const data = await fetch(`https://core.ac.uk:443/api-v2/articles/search/${searchInput}?page=${req.body.indexPage}&pageSize=10&metadata=true&fulltext=true&citations=false&similar=false&duplicate=false&urls=false&faithfulMetadata=false&apiKey=${process.env.CORE_API_KEY}
        `);
      const items = await data.json();
      await res.status(200).send(items);
    } catch {
      console.error();
    }
  }
});

// rota para buscar o ID de determinado artigo
router.get("/", async (req, res) => {
  const { id: coreId } = req.query;
  if (coreId !== "") {
    try {
      const data = await fetch(`https://core.ac.uk:443/api-v2/articles/get/${coreId}?metadata=true&fulltext=true&citations=false&similar=false&duplicate=false&urls=false&faithfulMetadata=false&apiKey=${process.env.CORE_API_KEY}
        `);
      const items = await data.json();
      await res.status(200).send(items);
    } catch {
      console.error();
    }
  }
});

module.exports = router;
