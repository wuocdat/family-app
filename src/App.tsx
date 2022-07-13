import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes/Routes';

function App() {
    return (
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
    );
}

export default App;
