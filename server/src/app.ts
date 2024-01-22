import express from "express";
import channelStore from "./db";
import { getChannelList } from "./controllers/channelController";
import { getChennelMessages } from "./controllers/messageController";
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

app.get("/messages/:channelId", (req, res, next) => {
  try {
    const channelId = req.params.channelId;
    const responseData = getChennelMessages(channelId, channelStore);
    if (responseData.error) {
      const { status, message } = responseData.error;
      return res.status(status).json({ error: message });
    }
    return res.json(responseData.data);
  } catch (error: unknown) {
    return next(error);
  }
});

app.get("/healthCheck", (_req, res) => {
  console.log("pinged");
  console.log(channelStore);

  res.send("OK ");
});

export default app;
