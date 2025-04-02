import { User } from './user';
export type Chat = {
    _id: string;
    name: string;
    type: "USER" | "GROUP";
    participants: Array<User>;
    firstTS: number;
    lastTS: number;
    feAttr?: {
        unReadCount: number;
        lastMsg: string;
    };
};
//# sourceMappingURL=chat.d.ts.map