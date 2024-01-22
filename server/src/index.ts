import express from "express";
import channelStore from "./db";
const app = express();
app.use(express.json());

const PORT = 3005;

app.get("/healthCheck", (_req, res) => {
  console.log("pinged");
  console.log(channelStore);

  res.send("OK ");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
