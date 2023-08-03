import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import Surveys from './views/Surveys';
import Signup from './views/Signup';
import GuestLayout from './components/GuestLayout';
import DefaultLayout from './components/DefaultLayout';
import NotFound from './views/NotFound';

const RouterComponent = () => (
    <Router>
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route index element={<Dashboard />} />
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='surveys' element={<Surveys />} />
            </Route>
            <Route path='/' element={<GuestLayout />}>
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<Signup />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
);

export default RouterComponent;