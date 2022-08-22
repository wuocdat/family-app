import { createContext, useEffect, useMemo, useState } from 'react';
import TokenService from '../services/auth/token.service';
import UserService from '../services/users/user.service';
import { CurrentUserContextType, UserInfo } from '../types';

type ChildrenProps = {
    children: React.ReactNode;
};

const initialProfile: UserInfo = {
    id: '',
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
    const currentUser = TokenService.getUser();

    const [profile, setProfile] = useState<UserInfo>(initialProfile);

    const value = useMemo(() => ({ profile, setProfile }), [profile]);

    const fetchUsers = async () => {
        const { data } = await UserService.getProfile(currentUser.id);
        data && setProfile(data);
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
