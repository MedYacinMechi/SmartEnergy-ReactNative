import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector, useDispatch } from 'react-redux';
import { persistAuth } from '../redux/actions';
import LogInScreen from '../Screens/Login';
import AssetsStack from './AssetsStack';

const Stack = createNativeStackNavigator()

function MainStack() {
  
  const dispatch = useDispatch();
  dispatch(persistAuth());
  const auth = useSelector((state) => state.token)
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {auth ? (
          <Stack.Screen name="AssetsStack" component={AssetsStack} />
        ) : (
          <Stack.Screen name="Login" component={LogInScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStack