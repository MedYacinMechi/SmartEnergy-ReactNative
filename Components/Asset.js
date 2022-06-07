import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Text, Icon } from 'react-native-elements';
import { Button, DefaultTheme, Provider as PaperProvider  } from 'react-native-paper';
import Animated from 'react-native-reanimated';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fa2',
  },
};
const Asset = ({ item,onClick ,c }) => {
  const navigation = useNavigation();

  return (
    <PaperProvider theme={theme}>
      <TouchableOpacity activeOpacity={.8} style={styles.asset} onPress={() => {
        onClick();
      }}>
        <View style={styles.itemContainer}>
          <View style={styles.item}>
            <Text>{item.type} {item.number} </Text>
            <Icon 
              name='chevron-down'
              type='evilicon'
            />
            </View>
            {item.number == c && (
              <View>
              <View style={styles.expanded}>
                <Text>Content overview</Text>
              </View>
              <Button
                style={{marginTop:10,alignSelf:'flex-end',borderRadius:6,}}
                mode="text"
                onPress={()=>{navigation.navigate('AssetDetails', item)}}>
                  More details
              </Button>
              </View>
              
            )}
            
          </View>
    </TouchableOpacity>
    </PaperProvider>
  );
};

export default Asset;
const styles = StyleSheet.create({
  asset: {
    backgroundColor: '#fff',
    elevation:5,
    borderRadius: 10,
    marginBottom:20,
    padding:20,
    marginHorizontal:10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemContainer: {
    flexDirection: 'column'
  },
  expanded: {
    alignSelf:'center',
    marginTop:15,
    paddingVertical:80,
    paddingHorizontal:110,
    borderRadius:10,
    backgroundColor:'#eee',
  }
}
)