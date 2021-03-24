import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router5';
import { RouterView } from '@components';
import { store } from '@store';
import { configureRouter } from './router/create-router';
import routes from './router/routes';

const router = configureRouter();

router.start(() => {
  ReactDOM.render(
    <Provider store={store}>
      <RouterProvider router={router}>
        <RouterView routes={routes} />
      </RouterProvider>
    </Provider>,
    document.getElementById('root'),
  );
});
