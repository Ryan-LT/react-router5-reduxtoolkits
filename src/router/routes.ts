import loadable, { LoadableComponent } from '@loadable/component';
import { preloadDetail, preloadHome, Store } from '@store';
import { Route as Router5Route, State } from 'router5';

const routes: Route[] = [
  {
    name: 'home',
    path: '/',
    preloadData: preloadHome,
    Component: loadable(() => import('../pages/home')),
  },
  {
    name: 'detail',
    path: '/detail',
    preloadData: preloadDetail,
    Component: loadable(() => import('../pages/detail')),
  },
];

export default routes;

export interface Route extends Router5Route {
  Component: LoadableComponent<Record<string, unknown>>;
  preloadData?: (store: Store, toState?: State) => void;
}
