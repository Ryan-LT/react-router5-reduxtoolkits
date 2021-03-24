import createRouter from 'router5';
import routerBrowserPlugin from 'router5-plugin-browser';
import { reduxPlugin } from 'redux-router5';
import { store } from '@store';
import routes from './routes';

export const configureRouter = () => {
  const router = createRouter(routes, {
    defaultRoute: 'home',
  });

  router.setDependencies({ store });

  router.usePlugin(routerBrowserPlugin());
  router.usePlugin(reduxPlugin(store.dispatch));

  return router;
};

export type Routes = ReturnType<typeof configureRouter>;
