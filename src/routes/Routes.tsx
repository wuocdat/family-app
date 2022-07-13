import routes from '../config/routes';
import MainLayout from '../layouts/MainLayout/MainLayout';
import SignInLayout from '../layouts/SignInLayout/SignInLayout';
import Chats from '../pages/Chats';
import Contacts from '../pages/Contacts';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';
import SignIn from '../pages/SignIn/SignIn';

export const publicRoutes = [
    { path: routes.profile, component: Profile, layout: MainLayout },
    { path: routes.chats, component: Chats, layout: MainLayout },
    { path: routes.contacts, component: Contacts, layout: MainLayout },
    { path: routes.settings, component: Settings, layout: MainLayout },
    { path: routes.signIn, component: SignIn, layout: SignInLayout },
];
