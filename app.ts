import express from "express";

import { IndexRouter } from "./controllers/v0/index.router";

const app = express();
const port = process.env.PORT || 8080; // default port to listen

app.use("/api/v0/", IndexRouter);

// Root URI call
app.get("/", async (req, res) => {
  res.send("/api/v0/");
});

app.listen(port, () => {
  console.log(`server running http://localhost:${port}`);
  console.log(`press CTRL+C to stop server`);
});
