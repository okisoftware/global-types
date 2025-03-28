import { MessageType } from "../enums/message-type";
import { User } from "./user";
export type Message = {
    _id: string;
    chatId: string;
    userID: string;
    payload: string;
    participants?: Array<User>;
    type: MessageType;
    ts: number;
    feAttr?: {
        unReadCount: number;
    };
};
//# sourceMappingURL=message.d.ts.map