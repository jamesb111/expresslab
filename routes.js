"use strict";
const express = require("express");
const router = express.Router();
const pool = require("./connections");

function selectAll(res) {
    pool.query("Select * from shoppingcart order by id").then(result => res.json(result.rows));
}

router.get("/cart-items", function(req, res) {
    selectAll(res);
});

router.post("/cart-items", function(req, res) {
    pool.query("insert into shoppingcart (product, price, quantity) values ($1::text, $2::int, $3::int)", [req.body.product, req.body.price, 
    req.body.quantity]).then(function () {
        selectAll(res);
    });
});

router.put("/cart-items/:id", function(req, res) {
    pool.query("update shoppingcart set product=$1::text, price=$2::int, quantity=$3::int where id=$4::int", [req.body.product, req.body.price, 
        req.body.quantity, Number(req.params.id)]).then(function () {
            selectAll(res);
        });
});

router.delete("/cart-items/:id", function(req, res) {
    pool.query("delete from shoppingcart where id=$1::int", [req.params.id]).then(function () {
        selectAll(res);
    })
});


module.exports = router;