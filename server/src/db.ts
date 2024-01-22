import { Channels } from "./models/channel";

// In-memory database for channels and their messages
const channelStore: Channels = new Map([
  [
    1,
    {
      id: 1,
      name: "General",
      description: "General discussions",
      messages: [],
    },
  ],
  [2, { id: 2, name: "Random", description: "Random topics", messages: [] }],
]);

export default channelStore;
