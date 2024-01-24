import { MessageBoardAction, MessageBoardState } from "types/index";

export const messageBoardReducer = (
  state: MessageBoardState,
  action: MessageBoardAction
): MessageBoardState => {
  switch (action.type) {
    case "SET_CHANNELS":
      return { ...state, channels: action.payload };
    case "SELECT_CHANNEL":
      return { ...state, selectedChannel: action.payload };
    case "SET_MESSAGES":
      return { ...state, messages: action.payload };
    default:
      return state;
  }
};
