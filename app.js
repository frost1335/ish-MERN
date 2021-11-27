require("dotenv").config("./.env");
const express = require("express");
const adminRouter = require('./routes/admin')
const app = express();

app.use(express.json());
app.use('/admin', adminRouter);

require("./helper/db")();

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`👏 Server running on port ${PORT}...`));
