import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Express");
    
});










app.listen(4444, () => console.log("Server is running on port 4444"));