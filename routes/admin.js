const { Router } = require('express')
const router = Router()
const fileMiddleware = require("../middleware/fileUpload")
const adminController = require("../controller/adminController")

router.get('/', adminController.mainAdmin);

/* +++++++++++++++++++++++++++++++++++++++ Category ++++++++++++++++++++++++++++++++++++++++++++++ */

router.get('/category', adminController.GetReadCategory);

router.get('/category/add', adminController.GetAddCategory);

router.get('/category/:id', adminController.GetIDCategory);

router.get('/category/edit/:id', adminController.GetEditCategory);

router.post('/category/add', fileMiddleware.single("img"), adminController.PostAddCategory);

router.post("/category/edit/:id", fileMiddleware.single("img"), adminController.PostEditCategory);

router.get("/category/delete/:id", adminController.GetDeleteCategory);

/* +++++++++++++++++++++++++++++++++++++++ Worker ++++++++++++++++++++++++++++++++++++++++++++++ */

router.get("/worker", adminController.GetReadWorker);

router.get('/worker/add', adminController.GetAddWorker);

router.get("/worker/:id", adminController.GetIDWorker);

router.get("/worker/edit/:id", adminController.GetEditWorker);

router.post('/worker/add', fileMiddleware.single("img"), adminController.PostAddWorker);

router.post("/worker/edit/:id", fileMiddleware.single("img"), adminController.PostEditWorker);

router.get("/worker/delete/:id", adminController.GetDeleteWorker);

module.exports = router;