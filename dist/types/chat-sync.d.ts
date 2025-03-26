import { MutationType } from "../enums/mutation-type";
import { Message } from "./message";
import { Chat } from "./chat";
export type ChatSync = {
    _id: string;
    mutationType: MutationType;
    record: Message | Chat;
};
//# sourceMappingURL=chat-sync.d.ts.map