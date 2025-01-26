const express = require("express");
const app = express();

const toolsRoutes = require("./api/routes/Tools.js");

const port = 3000

app.use(express.json())
app.use("/tools", toolsRoutes)

app.use((req, res, next) => {
    res.status(404).json({ error: "incorrect endpoint" })
})

app.listen(port, () => {
    console.log(`server running on ${port}`)
})