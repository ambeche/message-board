import { Channel, Message } from "./stateTypes";

export type MessageBoardAction =
  | { type: "SET_CHANNELS"; payload: Channel[] }
  | { type: "SELECT_CHANNEL"; payload: Channel }
  | { type: "SET_MESSAGES"; payload: Message[] }
  | { type: "ADD_MESSAGE"; payload: Message };
