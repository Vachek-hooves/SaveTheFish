import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/nav/StackNavigation';

import { useEffect, useState } from 'react';
import Loader from './src/components/Loader';

const App = () => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 5000);
  }, []);

  return (
    <NavigationContainer>
      {loader ? <StackNavigation /> : <Loader />}
    </NavigationContainer>
  );
};

export default App;
