import express from 'express';
import "express-async-errors";

const app = express();

app.get("/planets", (req, res) => {
    res.send([
        { name: "Mercury" },
        { name: "Venus" }
    ]);
});

export default app;
