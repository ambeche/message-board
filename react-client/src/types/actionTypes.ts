import { Channel, Message } from './stateTypes';

export type SetMessagePayload = { messages: Message[]; channelId: string };
export type MessageBoardAction =
  | { type: 'SET_CHANNELS'; payload: Channel[] }
  | { type: 'SELECT_CHANNEL'; payload: Channel }
  | { type: 'SET_MESSAGES'; payload: SetMessagePayload }
  | { type: 'ADD_MESSAGE'; payload: { message: Message; channelId: string } };