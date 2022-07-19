export type UserItemProps = {
    fullName: string;
    src?: string;
    latestMessage?: string;
    time: string;
    active: boolean;
};

export type User = {
    id: string;
    name: string;
    active?: boolean;
};

export interface GroupType {
    type: string;
    data: Array<User>;
}
