import { getHome } from '@store';
import { Store } from '../create-store';

export const preloadHome = async ({ dispatch }: Store) => {
  await dispatch(getHome());
};
