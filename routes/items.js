var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://paolo:1598753@ds111798.mlab.com:11798/task-list', ['items']);

// get ALL items
router.get('/items', function (req, res, next) {
    db.items.find(function (err, items) {
        if (err) {
            res.send(err);
        }
        res.json(items);
    });
});

// get Single item
router.get('/item/:id', function (req, res, next) {
    db.items.findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, item) {
        if (err) {
            res.send(err);
        }
        res.json(item);
    });
});

//save item
router.post('/item', function (req, res, next) {
    var item = req.body;
    if (!item.title || !(item.isDone + '')) {
        res.status(400);
        res.json({
            "error": "Bad data"
        });
    } else {
        db.items.save(item, function (err, item) {
            if (err) {
                res.send(err);
            }
            res.json(item);
        });
    }

});

//delete a item
router.delete('/item/:id', function (req, res, next) {
    db.items.remove({ _id: mongojs.ObjectId(req.params.id) }, function (err, item) {
        if (err) {
            res.send(err);
        }
        res.json(item);
    });
});

//Update
router.put('/item/:id', function (req, res, next) {
    var item = req.body;
    var upditem = {};

    if (item.isDone) {
        upditem.isDone = item.isDone;
    }

    if (item.title) {
        upditem.title = item.title;
    }

    if (!upditem) {
        res.status(400);
        res.json({
            "error": "Bad data"
        })
    } else {
        db.items.update({ _id: mongojs.ObjectId(req.params.id) }, upditem, {}, function (err, item) {
            if (err) {
                res.send(err);
            }
            res.json(item);
        });
    }
});

module.exports = router;
