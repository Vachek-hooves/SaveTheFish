import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/nav/StackNavigation';
import Loader from './src/components/Loader';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;
