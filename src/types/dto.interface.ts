import { UserInfo } from './index';
export interface ConversationType<T> {
    members: T[];
    _id: string;
    lastMessage?: string;
    timestamp?: string;
}

export interface OneToOneConversationType {
    _id: string;
    friend: UserInfo;
    me: UserInfo;
    lastMessage?: string;
    timestamp?: string;
}
