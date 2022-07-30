export type FetchData<T> = {
    data?: T;
    type?: string;
};

export interface UserInfo {
    id: string;
    firstName: string;
    lastName: string;
    address: string;
    age: string;
    email: string;
    description?: string;
    online?: string;
    createdAt: string;
    numberPhone?: string;
    username: string;
    src?: string;
}

export interface GroupType {
    type: string;
    data: Array<UserInfo>;
}

export interface Conversation {
    friend: UserInfo;
    id: string;
    lastMessage: LastMessage;
}

export interface LastMessage {
    lastContent: string;
    sender: string;
    lastTime: string;
}
