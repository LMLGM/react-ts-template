import { Navigate } from 'react-router-dom';
import Home from '../pages/Home';

export default [
  {
    path: '/home',
    element: <Home />,
  },
  {
    // 重定向
    path: '/',
    element: <Navigate to='/home' />,
  },
] as {
  path: string
  element: JSX.Element
}[]