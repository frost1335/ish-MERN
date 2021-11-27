require("dotenv").config("./.env");
const express = require("express");

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`👏 Server running on port ${PORT}...`));
