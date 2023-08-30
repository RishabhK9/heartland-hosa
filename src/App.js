import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import MeetTheTeam from './pages/MeetTheTeam';
import Resources from './pages/Resources';

function App() {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <Home />
                        </Layout>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <Layout>
                            <About />
                        </Layout>
                    }
                />
                <Route
                    path="/resources"
                    element={
                        <Layout>
                            <Resources />
                        </Layout>
                    }
                />
                <Route
                    path="/meet-the-team"
                    element={
                        <Layout>
                            <MeetTheTeam />
                        </Layout>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <Layout>
                            <Contact />
                        </Layout>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
