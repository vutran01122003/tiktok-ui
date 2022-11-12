import { Home, Following } from './pages';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import routes, { publicRoutes } from './routes';
import { LayoutDeafault, LayoutOnlyHeader } from './components/Layout';
import { Fragment } from 'react';

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = LayoutDeafault;

                        // if (route.layout) {
                        //     Layout = route.layout;
                        // } else if (route.layout == null) {
                        //     Layout = Fragment;
                        // }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
