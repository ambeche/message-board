import axios from 'axios';
import { Channel } from './types';

const baseUrl = 'http://localhost:3005';

const getChannels = async () => {
  try {
    const channels = await axios.get<Channel[]>(`${baseUrl}/channels`);
    return channels.data;
  } catch (error) {
    console.log(error);
  }
};

const APIService = { getChannels };
export default APIService;
