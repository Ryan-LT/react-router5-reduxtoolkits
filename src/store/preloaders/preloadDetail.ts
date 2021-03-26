import { getDetail } from '@store';
import { Store } from '../create-store';

export const preloadDetail = async ({ dispatch }: Store) => {
  await dispatch(getDetail());
};
