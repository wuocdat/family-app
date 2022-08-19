import { Navigate, Outlet } from 'react-router-dom';
import TokenService from '../../services/auth/token.service';

export const ProtectedLayout = () => {
    const user = TokenService.getUser();

    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <>
            <Outlet />
        </>
    );
};
