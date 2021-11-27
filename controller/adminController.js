const mongoose = require("mongoose");
const Category = require('../models/Category')
const Worker = require('../models/Worker')
const toDelete = require('../middleware/toDelete')
const moment = require('moment');

module.exports.mainAdmin = (req, res, next) => {
    res.render('admin/index', {
        layout: 'admin',
        title: "Admin Page"
    })
};

/* +++++++++++++++++++++++++++++++++++++++ Category ++++++++++++++++++++++++++++++++++++++++++++++ */
module.exports.GetReadCategory = async (req, res, next) => {
    const categorys = await Category.find()
    res.render('admin/categorys', {
        layout: 'admin',
        title: "Create category",
        categorys,
    })
};

module.exports.GetAddCategory = async (req, res, next) => {
    res.render('admin/addCategory', {
        layout: 'admin',
        title: 'Create category',
    })
};

module.exports.GetIDCategory = async (req, res, next) => {
    const { title } = await Category.findById(req.params.id)
    let works = await Category.aggregate([{
        $lookup: {
            from: "works",
            localField: "_id",
            foreignField: "categoryId",
            as: "works"
        }
    },
    {
        $match: {
            _id: mongoose.Types.ObjectId(req.params.id)
        }
    },
    {
        $group: {
            _id: {
                _id: "$_id"
            },
            works: {
                $push: "$works"
            }
        }
    },
    {
        $project: {
            _id: "$_id._id",
            name: "$_id.name",
            price: "$_id.price",
            comment: "$_id.comment",
            adress: "$_id.adress",
            img: "$_id.img",
            works: "$works"
        }
    },
    {
        $unwind: {
            path: "$works"
        }
    },

    ])
    console.log(works);
    if (works.length) {
        works = works[0].works
    } else {
        works = ""
    }
    res.render('admin/category', {
        title: title,
        layout: 'admin',
        works,
    })
};

module.exports.GetEditCategory = async (req, res, next) => {
    const category = await Category.findById(req.params.id)
    res.render('admin/editCategory', {
        layout: 'admin',
        title: 'Edit category',
        category,
    })
};

module.exports.PostAddCategory = async (req, res) => {
    const { name } = req.body

    if (req.file) {
        img = req.file.filename
    } else {
        img = ""
    }

    const category = new Category({
        name,
        img,
    })
    await category.save()
    res.redirect('/admin/categorys')
};

module.exports.PostEditCategory = async (req, res, next) => {
    const { img } = await Category.findById(req.params.id)
    toDelete(img)
    const admin = req.body
    if (req.file) {
        admin.img = req.file.filename
        toDelete(img)
    } else {
        admin.img = img
    }
    admin.img = req.file.filename
    await Category.findByIdAndUpdate(req.params.id, admin, (err) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect("/admin/categorys")
        }
    })
};

module.exports.GetDeleteCategory = async (req, res, next) => {
    const { img } = await Category.findById(req.params.id)
    toDelete(img)
    await Category.findByIdAndDelete(req.params.id)
    res.redirect("/admin/categorys")
};


/* +++++++++++++++++++++++++++++++++++++++ Worker ++++++++++++++++++++++++++++++++++++++++++++++ */


module.exports.GetReadWorker = async (req, res, next) => {
    const works = await Work.find()
    res.render("admin/works", {
        layout: 'admin',
        title: "Works",
        works,
    })
};

module.exports.GetAddWorker = async (req, res, next) => {
    const categorys = await Category.find()
    res.render('admin/addWork', {
        layout: 'admin',
        title: 'Create Work',
        categorys,
    })
};

module.exports.GetIDWorker = async (req, res, next) => {
    const {
        title
    } = await Work.findById(req.params.id)
    const work = await Work.findById(req.params.id)
    console.log(work);
    res.render('admin/work', {
        title: title,
        layout: 'admin',
        work,
    })
};

module.exports.GetEditWorker = async (req, res, next) => {
    const work = await Work.findById(req.params.id)
    const categorys = await Category.find()
    res.render('admin/editWork', {
        layout: 'admin',
        title: 'Edit Work',
        work,
        categorys,
    })
};

module.exports.PostAddWorker = async (req, res, next) => {
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
    const work = new Work({
        name,
        price,
        comment,
        adress,
        img,
        categoryId
    })
    await work.save()
    res.redirect('/admin/works')
};

module.exports.PostEditWorker = async (req, res, next) => {
    const {
        img
    } = await Work.findById(req.params.id)
    toDelete(img)
    const admin = req.body
    if (req.file) {
        admin.img = req.file.filename
        toDelete(img)
    } else {
        admin.img = img
    }
    admin.img = req.file.filename

    await Work.findByIdAndUpdate(req.params.id, admin, (err) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect("/admin/works")
        }
    })
};

module.exports.GetDeleteWorker = async (req, res, next) => {
    const {
        img
    } = await Work.findById(req.params.id)
    toDelete(img)
    await Work.findByIdAndDelete(req.params.id)
    res.redirect("/admin/works")
};