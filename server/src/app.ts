import express from "express";
import channelStore from "./db";
import { getChannelList } from "./controllers/channelController";
const app = express();
app.use(express.json());

app.get("/channels", (_req, res, next) => {
  try {
    const channelList = getChannelList(channelStore);
    res.json(channelList);
  } catch (error: unknown) {
    next(error);
  }
});

app.get("/messages/:channelId", (_req, res, next) => {
  try {
    const channelList = getChannelList(channelStore);
    res.json(channelList);
  } catch (error: unknown) {
    next(error);
  }
});

app.get("/healthCheck", (_req, res) => {
  console.log("pinged");
  console.log(channelStore);

  res.send("OK ");
});

export default app;
