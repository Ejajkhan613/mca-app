const express = require("express");

const app = express();
app.use(express.json());

const PORT = 4000;

app.get("/", async (req, res) => {
    res.send("Server is up");
});

app.get("/data", async (req, res) => {
    res.status(200).send({ university: "ADTU", class: "MCA", semester: "II" });
});

app.get("/health", async (req, res) => {
    res.status(200).send("server is healthy");
});

app.listen(PORT, () => {
    console.log(`Server running: ${PORT}`);
});
