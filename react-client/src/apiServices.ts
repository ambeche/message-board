import axios from 'axios';
import { Channel, Message } from './types';

const baseUrl = 'http://localhost:3005';

// Fetch a list of uniquely named channels from the server
const getChannels = async () => {
  try {
    const response = await axios.get<Channel[]>(`${baseUrl}/channels`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Fetches all the messages for a specific channel
const getChannelsMessages = async (channelId: string) => {
  try {
    const response = await axios.get<Message[]>(
      `${baseUrl}/messages/${channelId}`
    );
    console.log('messagesFromServer: ', response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Adds message to a given channel, returning the saved message with timestamp and id
const addMessage = async (channelId: string, message: string) => {
  try {
    const response = await axios.post<Message>(`${baseUrl}/${channelId}`, {
      message,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const APIService = { getChannels, getChannelsMessages, addMessage };
export default APIService;
