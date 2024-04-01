import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import MainLayout from './MainLayout';
import Home from '../components/Home/Home';
import Shop from '../components/Shop/Shop';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path={'shop'} element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
