"use strict";
const express = require("express");
const cartItems = require("./cart-items");
const router = express.Router();

router.get("/cart-items", function(req, res) {
    res.json(cartItems);
});

router.post("/cart-items", function(req, res) {
    console.log(req.body);
    cartItems.push(req.body);
    res.json(cartItems);
});

router.put("/cart-items/:id", function(req, res) {
    console.log(req.params.id);
    console.log(req.param.body);
});

router.delete("/cart-items/:id", function(req, res) {
    console.log(req.params.id);
});


module.exports = router;