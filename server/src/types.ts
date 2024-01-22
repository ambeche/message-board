import Message from "./models/message";

export type APIResponse = {
  data?: Message[];
  error?: {
    status: number;
    message: string;
  };
};
