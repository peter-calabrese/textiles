import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import MainLayout from './MainLayout';
import Home from '../components/Home/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
