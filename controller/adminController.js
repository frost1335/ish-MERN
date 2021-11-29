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
exports.GetReadCategory =asyncHandler( async (req, res, next) => {
  const category = await Category.find();

  res.status(200).json({
    success: true,
    data: category
  })
});
exports.GetAddCategory =asyncHandler( async (req, res, next) => {
  res.status(200).json({
    success: true,
  })
});
exports.PostAddCategory =asyncHandler( async (req, res) => {
  const category = await Category.create(req.body);
  res.status(201).json({
    success: true,
    data: category
  })
});
exports.GetIDCategory =asyncHandler( async (req, res, next) => {
  const category = await Category.findById(req.params.id);
  if(!category){
    return next(new ErrorResponse(`Category with id ${req.params.id} was not found`, 404));
  }
  res.status(200).json({
    success: true,
    data: category
  })
});
exports.GetEditCategory =asyncHandler( async (req, res, next) => {
  const category = await Category.findById(req.params.id);
  if(!category){
    return next(new ErrorResponse(`Category with id ${req.params.id} was not found`, 404));
  }
  res.status(200).json({
    success: true,
    data: category
  })
});
exports.PostEditCategory =asyncHandler( async (req, res, next) => {
  let category = await Category.findById(req.params.id);
  if(!category){
    return next(new ErrorResponse(`Category with id ${req.params.id} was not found`, 404));
  }
  category = await Category.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators: true});
  res.status(201).json({
    success: true,
    data: category
  })
});
exports.IdDeleteCategory =asyncHandler( async (req, res, next) => {
  let category = await Category.findById(req.params.id);
  if(!category){
    return next(new ErrorResponse(`Category with id ${req.params.id} was not found`, 404));
  }
  await category.remove();
  res.status(201).json({
    success: true,
    data: category
  })
});

/* +++++++++++++++++++++++++++++++++++++++ Worker ++++++++++++++++++++++++++++++++++++++++++++++ */

exports.GetReadWorker =asyncHandler( async (req, res, next) => {
  const worker = await Worker.find();

  res.status(200).json({
    success: true,
    data: worker
  })
});
exports.GetAddWorker =asyncHandler( async (req, res, next) => {
  res.status(200).json({
    success: true,
  })
});
exports.PostAddWorker =asyncHandler( async (req, res, next) => {
  const worker = await Worker.create(req.body);
  res.status(201).json({
    success: true,
    data: worker
  })
});
exports.GetIDWorker =asyncHandler( async (req, res, next) => {
  const worker = await Worker.findById(req.params.id);
  if(!worker){
    return next(new ErrorResponse(`Worker with id ${req.params.id} was not found`, 404));
  }
  res.status(200).json({
    success: true,
    data: worker
  })
});
exports.GetEditWorker =asyncHandler( async (req, res, next) => {
  const worker = await Worker.findById(req.params.id);
  if(!worker){
    return next(new ErrorResponse(`Worker with id ${req.params.id} was not found`, 404));
  }
  res.status(200).json({
    success: true,
    data: worker
  })
});
exports.PostEditWorker =asyncHandler( async (req, res, next) => {
  let worker = await Worker.findById(req.params.id);
  if(!worker){
    return next(new ErrorResponse(`Worker with id ${req.params.id} was not found`, 404));
  }
  worker = await Worker.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators: true});
  res.status(201).json({
    success: true,
    data: worker
  })
});
exports.IdDeleteWorker =asyncHandler( async (req, res, next) => {
  let worker = await Worker.findById(req.params.id);
  if(!worker){
    return next(new ErrorResponse(`Worker with id ${req.params.id} was not found`, 404));
  }
  await worker.remove();
  res.status(201).json({
    success: true,
    data: worker
  })
});