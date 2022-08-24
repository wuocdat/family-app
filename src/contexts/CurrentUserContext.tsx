import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';
import { createContext, useEffect, useMemo, useState } from 'react';
import TokenService from '../services/auth/token.service';
import UserService from '../services/users/user.service';
import { CurrentUserContextType, UserInfo } from '../types';

type ChildrenProps = {
    children: React.ReactNode;
};

const initialProfile: UserInfo = {
    _id: '',
    username: '',
    email: '',
};

export const CurrentUserContext = createContext<CurrentUserContextType>({
    profile: initialProfile,
    setProfile: (): void => {
        throw new Error('setProfile function must be overridden');
    },
});

const CurrentUserContextProvider = ({ children }: ChildrenProps) => {
    const { enqueueSnackbar } = useSnackbar();

    const currentUser = TokenService.getUser();

    const [profile, setProfile] = useState<UserInfo>(initialProfile);

    const value = useMemo(() => ({ profile, setProfile }), [profile]);

    const fetchUsers = async () => {
        try {
            const { data } = await UserService.getProfile(currentUser._id);
            data && setProfile(data);
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
        fetchUsers();
    }, []);

    return (
        <CurrentUserContext.Provider value={value}>
            {children}
        </CurrentUserContext.Provider>
    );
};

export default CurrentUserContextProvider;
