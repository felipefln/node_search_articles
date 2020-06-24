const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.post("/", async (req, res) => {
  if (req.body.searchInput !== "") {
    const data = await fetch(`https://core.ac.uk:443/api-v2/articles/search/${req.body.searchInput}?page=${req.body.indexPage}&pageSize=10&metadata=true&fulltext=true&citations=false&similar=false&duplicate=false&urls=false&faithfulMetadata=false&apiKey=${process.env.CORE_API_KEY}
        `);
    const items = await data.json();
    await res.status(200).send(items);
  }
});

module.exports = router;
