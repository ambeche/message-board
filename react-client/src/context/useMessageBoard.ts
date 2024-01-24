import { useContext } from 'react';
import { MessageBoardContext } from './MessageBoardContext';

export const useMessageBoard = () => useContext(MessageBoardContext);
