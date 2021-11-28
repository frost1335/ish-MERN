const mongoose = require("mongoose");
const Category = require("../models/Category");
const Worker = require("../models/Worker");
const toDelete = require("../middleware/toDelete");
const moment = require("moment");

exports.mainAdmin = (req, res, next) => {
  res.send("Admin page")
};

/* +++++++++++++++++++++++++++++++++++++++ Category ++++++++++++++++++++++++++++++++++++++++++++++ */
exports.GetReadCategory = async (req, res, next) => {
  res.send("All Category")
};

exports.GetAddCategory = async (req, res, next) => {
  res.send("Create category Get")
};
exports.PostAddCategory = async (req, res) => {
  res.send("Create category Post")
};

exports.GetIDCategory = async (req, res, next) => {
  res.send("ID Category page")
};
exports.PostEditCategory = async (req, res, next) => {
  res.send("ID Edit category")
};
exports.IdDeleteCategory = async (req, res, next) => {
  res.send("ID Delete category")
};

/* +++++++++++++++++++++++++++++++++++++++ Worker ++++++++++++++++++++++++++++++++++++++++++++++ */

exports.GetReadWorker = async (req, res, next) => {
  res.send("All Worker")
};

exports.GetAddWorker = async (req, res, next) => {
  res.send("Create worker Get")
};
exports.PostAddWorker = async (req, res, next) => {
  res.send("Create worker Post")
};

exports.GetIDWorker = async (req, res, next) => {
  res.send("ID Worker page")
};
exports.PostEditWorker = async (req, res, next) => {
  res.send("ID Edit worker")
};
exports.IdDeleteWorker = async (req, res, next) => {
  res.send("ID Delete worker")
};