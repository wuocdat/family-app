import { ThemeProvider } from '@mui/material';
import { createContext, useEffect, useMemo, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import TokenService from './services/auth/token.service';
import { darkTheme, lightTheme } from './styles/Theme';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
    const navigate = useNavigate();
    const currentUser = TokenService.getUser();
    const [mode, setMode] = useState<'light' | 'dark'>('light');
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === 'light' ? 'dark' : 'light',
                );
            },
        }),
        [],
    );
    const theme = useMemo(
        () => (mode === 'light' ? lightTheme : darkTheme),
        [mode],
    );
    useEffect(() => {
        if (!currentUser) navigate('/login', { replace: true });
    }, []);
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route path="/login" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/*" element={<MainLayout />} />
                </Routes>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
