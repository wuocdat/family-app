import { Navigate } from 'react-router-dom';
import TokenService from '../services/auth/token.service';

export const ProtectedRoute = ({ children }: any) => {
    const user = TokenService.getUser();

    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
};
