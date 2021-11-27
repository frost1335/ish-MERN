require("dotenv").config("./.env");
const express = require("express");
const app = express();

const errorHandler = require("./middleware/errorHandler");

require("./helper/db")();

app.use(express.json());

app.use("/admin", require("./routes/admin"));

app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`👏 Server running on port ${PORT}...`));
