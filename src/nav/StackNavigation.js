import { createStackNavigator } from '@react-navigation/stack';

import TabNav from './TabNav';
import Onboard from '../screens/stack/Onboard';
import CatcherGame from '../screens/stack/CatcherGame';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboard" component={Onboard} />
      <Stack.Screen name="TabNav" component={TabNav} />
      <Stack.Screen name="CatcherGame" component={CatcherGame} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
