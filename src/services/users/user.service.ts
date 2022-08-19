import { UserInfo } from './../../types/index';
import api from '../api';

const getPublicContent = () => {
    return api.get('/test/all');
};

const getUserBoard = () => {
    return api.get('/test/user');
};

const getModeratorBoard = () => {
    return api.get('/test/mod');
};

const getAdminBoard = () => {
    return api.get('/test/admin');
};

const getProfile = (id: string) => {
    return api.get<UserInfo>(`/profile/${id}`);
};

const UserService = {
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard,
    getProfile,
};
export default UserService;
