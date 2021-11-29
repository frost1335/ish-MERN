const mongoose = require("mongoose");
const Category = require("../models/Category");
const Worker = require("../models/Worker");
const toDelete = require("../middleware/toDelete");
const moment = require("moment");
const asyncHandler = require("../middleware/asyncHandler");
const ErrorResponse = require("../utils/errorResponse")

exports.mainAdmin =asyncHandler( async  (req, res, next) => {
  
  res.status(200).json({
    success: true,
  })
});

/* +++++++++++++++++++++++++++++++++++++++ Category ++++++++++++++++++++++++++++++++++++++++++++++ */
exports.GetReadCategory =asyncHandler( async (req, res, next) =>{
  const categorys = await Category.find();

  res.status(200).json({
    success: true,
    data: categorys
  })
});
exports.GetAddCategory =asyncHandler( async (req, res, next) => {
  res.status(200).json({
    success: true,
  })
});
exports.PostAddCategory =asyncHandler( async (req, res) => {
  const { name } = req.body

  if (req.file) {
        img = req.file.filename
  } else {
        img = ""
    }

  const categorys = new Category({
        name,
        img,
    })
    await categorys.save()
  res.status(201).json({
    success: true,
    data: categorys
  })
});
exports.GetIDCategory =asyncHandler( async (req, res, next) => {
  const categorys = await Category.findById(req.params.id);
  if(!categorys){
    return next(new ErrorResponse(`Category with id ${req.params.id} was not found`, 404));
  }
  res.status(200).json({
    success: true,
    data: categorys
  })
});

exports.GetEditCategory =asyncHandler( async (req, res, next) => {
  const categorys = await Category.findById(req.params.id);
  if(!categorys){
    return next(new ErrorResponse(`Category with id ${req.params.id} was not found`, 404));
  }
  res.status(200).json({
    success: true,
    data: categorys
  })
});
exports.PostEditCategory =asyncHandler( async (req, res, next) => {
  let categorys = await Category.findById(req.params.id);
  if(!categorys){
    return next(new ErrorResponse(`Category with id ${req.params.id} was not found`, 404));
  }
  const { img } = await Category.findById(req.params.id)
    const admin = req.body
    if (req.file) {
        toDelete(img)
        admin.img = req.file.filename
    } else {
        admin.img = img
    }
    categorys = await Category.findByIdAndUpdate(req.params.id, admin, (err) => {
    if(err){
      console.log(err)
    } else {
      res.status(201).json({
        success: true,
        data: categorys
      })
    }
  });
});
exports.IdDeleteCategory =asyncHandler( async (req, res, next) => {
  let categorys = await Category.findById(req.params.id);
  if(!categorys){
    return next(new ErrorResponse(`Category with id ${req.params.id} was not found`, 404));
  }
  const { img } = await Category.findById(req.params.id)
  toDelete(img)
  await categorys.remove();
  res.status(201).json({
    success: true,
    data: categorys
  })
});

/* +++++++++++++++++++++++++++++++++++++++ Worker ++++++++++++++++++++++++++++++++++++++++++++++ */

exports.GetReadWorker =asyncHandler( async (req, res, next) => {
  const workers = await Worker.find();
  res.status(200).json({
    success: true,
    data: workers
  })
});
exports.GetAddWorker =asyncHandler( async (req, res, next) => {
  const categorys = await Category.find();
  res.status(200).json({
    success: true,
    data: categorys
  })
});
exports.PostAddWorker =asyncHandler( async (req, res, next) => {
  const {
    name,
    price,
    comment,
    adress,
    categoryId
} = req.body
if (req.file) {
    img = req.file.filename
} else {
    img = ""
}
const workers = new Work({
    name,
    price,
    comment,
    adress,
    img,
    categoryId
})
await workers.save()
  
  
  res.status(201).json({
    success: true,
    data: workers
  })
});
exports.GetIDWorker =asyncHandler( async (req, res, next) => {
  const workers = await Worker.findById(req.params.id);
  if(!workers){
    return next(new ErrorResponse(`Worker with id ${req.params.id} was not found`, 404));
  }
  res.status(200).json({
    success: true,
    data: workers
  })
});
exports.GetEditWorker =asyncHandler( async (req, res, next) => {
  const workers = await Worker.findById(req.params.id);
  const categorys = await Category.find();
  if(!workers){
    return next(new ErrorResponse(`Worker with id ${req.params.id} was not found`, 404));
  }
  res.status(200).json({
    success: true,
    data: workers, categorys //{workers,categorys}
  })
});
exports.PostEditWorker =asyncHandler( async (req, res, next) => {
  let workers = await Worker.findById(req.params.id);
  if(!workers){
    return next(new ErrorResponse(`Worker with id ${req.params.id} was not found`, 404));
  }
  const { img } = await Worker.findById(req.params.id)
    const admin = req.body
    if (req.file) {
        toDelete(img)
        admin.img = req.file.filename
    } else {
        admin.img = img
    }
  workers = await Worker.findByIdAndUpdate(req.params.id, admin, (err) => {
    if(err){
      console.log(err)
    } else {
      res.status(201).json({
        success: true,
        data: workers
      })
    }
  });
});
exports.IdDeleteWorker =asyncHandler( async (req, res, next) => {
  let workers = await Worker.findById(req.params.id);
  if(!workers){
    return next(new ErrorResponse(`Worker with id ${req.params.id} was not found`, 404));
  }
  const { img } = await Worker.findById(req.params.id)
  toDelete(img)
  await workers.remove();
  res.status(201).json({
    success: true,
    data: workers
  })
});