const { Router } = require('express')
const router = Router()
const mongoose = require('mongoose')
const fileMiddleware = require("../middleware/fileUpload")
const adminController = require("../controller/adminController")



module.exports = router;