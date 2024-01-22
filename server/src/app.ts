import express from "express";
import channelStore from "./db";
const app = express();
app.use(express.json());

app.get("/healthCheck", (_req, res) => {
  console.log("pinged");
  console.log(channelStore);

  res.send("OK ");
});

export default app;
