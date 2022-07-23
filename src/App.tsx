import { ThemeProvider } from '@mui/material';
import { createContext, useMemo, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes/Routes';
import { darkTheme, lightTheme } from './styles/Theme';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
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
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        {publicRoutes.map((item, index) => {
                            const CurrentLayout = item.layout;
                            const Page = item.component;
                            return (
                                <Route
                                    key={index}
                                    path={item.path}
                                    element={
                                        <CurrentLayout>
                                            <Page />
                                        </CurrentLayout>
                                    }
                                ></Route>
                            );
                        })}
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
