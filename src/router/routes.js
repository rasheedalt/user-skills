import Home from '../pages/home/Home.vue';
import Job from '../pages/job/Job.vue';
import User from '../pages/user/User.vue';

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'job',
        path: '/job/:id',
        component: Job
    },
    {
        name: 'user',
        path: '/user/:username',
        component: User
    },

];

export default routes;