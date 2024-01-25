import { MessageBoardState, MessageBoardAction } from '../types';

export const messageBoardReducer = (
  state: MessageBoardState,
  action: MessageBoardAction
): MessageBoardState => {
  switch (action.type) {
    case 'SET_CHANNELS':
      return { ...state, channels: action.payload };
    case 'SELECT_CHANNEL':
      return { ...state, selectedChannel: action.payload };
    case 'SET_MESSAGES': {
      const { channelId, messages } = action.payload;
      return {
        ...state,
        messages: new Map(state.messages).set(channelId, messages),
      };
    }
    default:
      return state;
  }
};
