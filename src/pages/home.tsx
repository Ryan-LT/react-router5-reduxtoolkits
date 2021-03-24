import React, { FunctionComponent } from 'react';
import { useRouter } from 'react-router5';

const Home: FunctionComponent = () => {
  const router = useRouter();
  return (
    <div>
      <h2>This is home page</h2>
      <button type="button" onClick={() => router.navigate('detail')}>
        Navigate
      </button>
    </div>
  );
};

export default Home;
