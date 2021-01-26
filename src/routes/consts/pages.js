import Home from '../../components/home';
import Login from '../../components/login';

const pages = [
  {
    path: '/home',
    component: Home,
    protected: true,
  },
  {
    path: '/login',
    component: Login,
    protected: false,
  },
];

export default pages;
