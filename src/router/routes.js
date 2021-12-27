import Home from '../pages/home/Home.vue';
import Job from '../pages/job/Job.vue';
import RelatedUser from '../pages/related_users/RelatedUser.vue';
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
    {
        name: 'related-users',
        path: '/related-users/:skill',
        component: RelatedUser
    },

];

export default routes;