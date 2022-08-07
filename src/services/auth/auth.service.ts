import api from '../api';
import TokenService from './token.service';

const register = (username: string, email: string, password: string) => {
    return api.post('/auth/signup', {
        username,
        email,
        password,
    });
};

const login = async (username: string, password: string) => {
    const response = await api.post('/auth/signin', {
        username,
        password,
    });
    if (response.data.accessToken) {
        TokenService.setUser(response.data);
    }
    return response.data;
};

const logout = () => {
    TokenService.removeUser();
};

const getCurrentUser = () => {
    const userItem = localStorage.getItem('user');
    return userItem && JSON.parse(userItem);
};

const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
};
export default AuthService;
