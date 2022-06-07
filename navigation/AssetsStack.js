import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AssetDetails from '../Screens/AssetDetails';
import AssetsScreen from '../Screens/Assets';

const Stack = createNativeStackNavigator()

function AssetsStack() {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Assets" component={AssetsScreen} />
            <Stack.Screen name="AssetDetails" component={AssetDetails}  />
        </Stack.Navigator>
  )
}

export default AssetsStack