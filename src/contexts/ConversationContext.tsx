import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';
import { createContext, FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TokenService from '../services/auth/token.service';
import ChatService from '../services/chat/chat.service';
import { OneToOneConversationType } from '../types/dto.interface';

type ChildrenProps = {
    children: React.ReactNode;
};

const defaultValue: OneToOneConversationType = {
    _id: '',
    friend: {
        _id: '',
        username: '',
        email: '',
    },
    me: {
        _id: '',
        username: '',
        email: '',
    },
};

const ConversationContext = createContext(defaultValue);

const ConversationContextProvider: FC<ChildrenProps> = ({ children }) => {
    const { enqueueSnackbar } = useSnackbar();

    const { _id: conversationId } = useParams();
    const currentUserId = TokenService.getUser()._id;

    const [conversation, setConversation] =
        useState<OneToOneConversationType>(defaultValue);

    const fetchConversation = async () => {
        try {
            const { data } = await ChatService.getConversationById(
                conversationId!,
            );
            if (data) {
                const friend = data.members.find(
                    (member) => member._id !== currentUserId,
                );
                const me = data.members.find(
                    (member) => member._id === currentUserId,
                );
                setConversation({
                    _id: data._id,
                    friend: friend || defaultValue.friend,
                    me: me || defaultValue.me,
                });
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                if (
                    error.response &&
                    error.response?.data &&
                    error.response?.data.message
                )
                    enqueueSnackbar(error.response.data.message, {
                        variant: 'error',
                    });
                else enqueueSnackbar(error.message, { variant: 'error' });
            } else console.log(error);
        }
    };

    useEffect(() => {
        fetchConversation();
    }, [conversationId]);

    return (
        <ConversationContext.Provider value={conversation}>
            {children}
        </ConversationContext.Provider>
    );
};

export { ConversationContext, ConversationContextProvider };
