import express from "express";

const app = express();
const port = process.env.PORT || 8080; // default port to listen

app.get("/", (req, res) => {
  res.send("Well done!");
});

app.listen(port, () => {
  console.log(`server running http://localhost:${port}`);
  console.log(`press CTRL+C to stop server`);
});
