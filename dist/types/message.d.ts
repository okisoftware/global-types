import { MessageType } from "../enums/message-type";
import { User } from "./user";
export type Message = {
    _id: string;
    chatId: string;
    userID: string;
    payload: string;
    participants?: Array<User>;
    type: MessageType;
    timestamp: number;
    feAttr?: {};
};
//# sourceMappingURL=message.d.ts.map