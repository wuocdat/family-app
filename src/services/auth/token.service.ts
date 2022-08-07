type StorageUser = {
    refreshToken: string;
    accessToken: string;
};

const getLocalRefreshToken = () => {
    const userItem = localStorage.getItem('user');
    const user = (userItem && JSON.parse(userItem)) || {};
    return user.refreshToken;
};

const getLocalAccessToken = () => {
    const userItem = localStorage.getItem('user');
    const user = (userItem && JSON.parse(userItem)) || {};
    return user.accessToken;
};

const updateLocalAccessToken = (token: string) => {
    const userItem = localStorage.getItem('user');
    let user = (userItem && JSON.parse(userItem)) || {};
    user.accessToken = token;
    localStorage.setItem('user', JSON.stringify(user));
};

const getUser = () => {
    const userItem = localStorage.getItem('user');
    return userItem && JSON.parse(userItem);
};

const setUser = (user: StorageUser) => {
    localStorage.setItem('user', JSON.stringify(user));
};

const removeUser = () => {
    localStorage.removeItem('user');
};

const TokenService = {
    getLocalRefreshToken,
    getLocalAccessToken,
    updateLocalAccessToken,
    getUser,
    setUser,
    removeUser,
};
export default TokenService;
