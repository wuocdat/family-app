import { Dispatch, SetStateAction } from 'react';

export interface RoleType {
    _id: string;
    name: string;
}

export interface UserInfo {
    _id: string;
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

export type CurrentUserContextType = {
    profile: UserInfo;
    setProfile: Dispatch<SetStateAction<UserInfo>>;
};

export interface AnyCondition {
    [key: string]: any;
}
