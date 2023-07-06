const express = require("express");
const router = express.Router();

const db = require("../base-orm/sequelize-init");

router.get("/api/rockets", async function (req, res, next) {
    let data = await db.rockets.findAll({
    });
    res.json(data);
});

module.exports = router;