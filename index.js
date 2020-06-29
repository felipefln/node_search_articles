const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const cors = require("cors");

const searchRoute = require("./routes/search");

app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

app.use("/api/search", searchRoute);

app.listen(PORT, () => console.log(`Server API run in port ${PORT}`));
