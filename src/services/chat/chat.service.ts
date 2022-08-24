import { AnyCondition, UserInfo } from './../../types/index';
import api from '../api';
import querystring from 'query-string';
import {
    ConversationType,
    OneToOneConversationType,
} from '../../types/dto.interface';

const encodeJSONtoQueryString = (condition: AnyCondition) => {
    if (Object.keys(condition).length) {
        return `${querystring.stringify(condition)}`;
    }

    return null;
};

const parseApiWithJSONQueryToString = (
    apiName: string,
    condition: AnyCondition,
) => {
    const query = encodeJSONtoQueryString(condition);

    if (!query) return apiName;
    return `${apiName}?${query}`;
};

const getConversationByMemberIds = (members: string[]) => {
    const url = parseApiWithJSONQueryToString('/chat', {
        memberIds: members,
    });
    return api.get<ConversationType<string>>(url);
};

const getConversationById = (id: string) => {
    return api.get<ConversationType<UserInfo>>(`/chat/${id}`);
};

const getAllConversationByUserId = (id: string) => {
    return api.get<OneToOneConversationType[]>(`/chat/all/${id}`);
};

const ChatService = {
    getConversationByMemberIds,
    getConversationById,
    getAllConversationByUserId,
};

export default ChatService;
