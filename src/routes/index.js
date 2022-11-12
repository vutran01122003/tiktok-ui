import { Home, Following, Profile, Upload } from '~/pages';
import { LayoutOnlyHeader } from '~/components/Layout';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile, layout: LayoutOnlyHeader },
    { path: '/upload', component: Upload, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
