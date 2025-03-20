import {MessageType} from "../enums/message-type";

export type Message = {
   _id: string;
   chatId: string;
   userID: string
   payload: string
   type: MessageType
   ts: number;
   feAttr?: {
      unReadCount: number
   };
};
