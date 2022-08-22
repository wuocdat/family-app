import { Dispatch, SetStateAction } from 'react';

export type FetchData<T> = {
    data?: T;
    type?: string;
};

export interface RoleType {
    _id: string;
    name: string;
}

export interface UserInfo {
    id: string;
    username: string;
    firstName?: string;
    lastName?: string;
    email: string;
    address?: string;
    age?: string;
    description?: string;
    online?: string;
    createdAt?: string;
    phoneNumber?: string;
    src?: string;
    roles?: RoleType[];
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

export type CurrentUserContextType = {
    profile: UserInfo;
    setProfile: Dispatch<SetStateAction<UserInfo>>;
};
