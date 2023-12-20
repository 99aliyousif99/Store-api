const express = require("express");
const app = express();
const client = require("./routers/client");

const port = 3000;



app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/client", client);





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  