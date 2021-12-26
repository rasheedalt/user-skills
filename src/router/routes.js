import Home from '../pages/Home';
import JobDetail from '../pages/JobDetail';
import UserDetails from '../pages/UserDetails';

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'job',
        path: '/job/:id',
        component: JobDetail
    },
    {
        name: 'user',
        path: '/user/:username',
        component: UserDetails
    },

];

export default routes;