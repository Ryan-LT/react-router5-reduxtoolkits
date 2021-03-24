import loadable, { LoadableComponent } from '@loadable/component';
import { Route as Router5Route } from 'router5';

export default [
  {
    name: 'home',
    path: '/',
    Component: loadable(() => import('../pages/home')),
  },
  {
    name: 'landing',
    path: '/landing',
    Component: loadable(() => import('../pages/landing')),
  },
  {
    name: 'detail',
    path: '/detail',
    Component: loadable(() => import('../pages/detail')),
  },
];

export interface Route extends Router5Route {
  Component: LoadableComponent<Record<string, unknown>>;
}
