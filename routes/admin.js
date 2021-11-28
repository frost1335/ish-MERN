const { Router } = require('express')
const router = Router()
const fileMiddleware = require("../middleware/fileUpload")
const adminController = require("../controller/adminController")

router
    .route("/")
    .get(adminController.mainAdmin);
    
/* +++++++++++++++++++++++++++++++++++++++ Category ++++++++++++++++++++++++++++++++++++++++++++++ */

router
    .route("/category")
    .get(adminController.GetReadCategory);

router
    .route("/category/add")
    .get(adminController.GetAddCategory)
    .post(fileMiddleware.single("img"), adminController.PostAddCategory);
router
    .route("/category/:id")
    .get(adminController.GetIDCategory)
    .put(fileMiddleware.single("img"), adminController.PostEditCategory)
    .delete(adminController.GetDeleteCategory);

/* +++++++++++++++++++++++++++++++++++++++ Worker ++++++++++++++++++++++++++++++++++++++++++++++ */

router
    .route("/worker")
    .get(adminController.GetReadWorker);
router
    .route("/worker/add")
    .get(adminController.GetAddWorker)
    .post(fileMiddleware.single("img"), adminController.PostAddWorker);
router
    .route("/worker/:id")
    .get(adminController.GetIDWorker)
    .put(fileMiddleware.single("img"), adminController.PostEditWorker)
    .delete(adminController.GetDeleteWorker);

module.exports = router;