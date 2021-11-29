const { Router } = require('express')
const router = Router()
const fileMiddleware = require("../middleware/fileUpload")
const adminController = require("../controller/adminController")

router
    .route("/")
    .get(adminController.mainAdmin);
/* +++++++++++++++++++++++++++++++++++++++ Category ++++++++++++++++++++++++++++++++++++++++++++++ */
router
    .route("/categorys")
    .get(adminController.GetReadCategory);

router
    .route("/categorys/add")
    .get(adminController.GetAddCategory)
    .post(fileMiddleware.single("img"), adminController.PostAddCategory);
router
    .route("/categorys/:id")
    .get(adminController.GetIDCategory)
    .delete(adminController.IdDeleteCategory);
router
    .route("/categorys/edit/:id")
    .get(adminController.GetEditCategory)
    .put(fileMiddleware.single("img"), adminController.PostEditCategory);
/* +++++++++++++++++++++++++++++++++++++++ Worker ++++++++++++++++++++++++++++++++++++++++++++++ */
router
    .route("/workers")
    .get(adminController.GetReadWorker);
router
    .route("/workers/add")
    .get(adminController.GetAddWorker)
    .post(fileMiddleware.single("img"), adminController.PostAddWorker);
router
    .route("/workers/:id")
    .get(adminController.GetIDWorker)
    .delete(adminController.IdDeleteWorker);
router
    .route("/workers/edit/:id")
    .get(adminController.GetEditWorker)
    .put(fileMiddleware.single("img"), adminController.PostEditWorker);

module.exports = router;