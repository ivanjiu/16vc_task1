const { tools } = require("../../database/tools_database.js")

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    if (req.query.name) {
        const tool = tools.find((tool) => tool.name === req.query.name)
        if (!tool) {
            res.status(404).json({ message: "tool not found" });
        }
        temp = tools.filter((tool) => tool.availability === "available" && tool.name === req.query.name)
        res.status(200).json({ tools: temp })
    } else if (req.query.min && req.query.max) {
        temp = tools.filter((tool) => tool.availability === "available" && tool.price >= req.query.min && tool.price <= req.query.max)
        res.status(200).json({ tools: temp })
    } else {
        res.status(200).json({ tools })
    }
})

router.post("/", (req, res) => {
    tools.push(req.body);
    res.status(200).json({ tools })
})

router.put("/rent/:name", (req, res) => {
    const toolName = req.params.name;
    const tool = tools.find((tool) => tool.name === toolName)
    if (!tool) {
        res.status(404).json({ message: "tool not found" });
    }
    if (tool.availability === "not available") {
        res.status(200).json({
            message: `${toolName} already rented out`,
            tools
        })
    } else {
        tool.availability = "not available";
        res.status(200).json({
            message: `availability of ${toolName} updated`,
            tools
        })
    }
})

router.put("/return/:name", (req, res) => {
    const toolName = req.params.name;
    const tool = tools.find((tool) => tool.name === toolName)
    if (!tool) {
        res.status(404).json({ message: "tool not found" });
    }
    if (tool.availability === "available") {
        res.status(200).json({
            message: `${toolName} already returned`,
            tools
        })
    }
    tool.availability = "available";
    res.status(200).json({
        message: `availability of ${toolName} updated`,
        tools
    })
})

module.exports = router