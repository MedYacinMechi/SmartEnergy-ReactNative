import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import Asset from '../Components/Asset';
import { getLogout } from '../redux/actions';


const assetsList = [
  {
    type: 'Asset',
    number: '1'
  },
  {
    type: 'Asset',
    number: '2'
  },
  {
    type: 'Asset',
    number: '3'
  },
  ,
  {
    type: 'Asset',
    number: '4'
  },
  {
    type: 'Asset',
    number: '5'
  },
]


function Assets() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(getLogout());
    }
  return (

    <View style={styles.container}>
      <StatusBar backgroundColor="#E8EAED" barStyle="dark-content" />
      <View style={styles.assetsWrapper}>
        <TouchableOpacity onPress={()=>handleLogout()}><Text style={styles.title}>Assets</Text></TouchableOpacity>
        <ScrollView style={styles.assets}>
          <View>
            {assetsList.map((l, i) => (
              <Asset key={i} item={l} c={currentIndex} onClick={() => setCurrentIndex(l.number == currentIndex ? null : l.number)} />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  )
};
export default Assets
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  assetsWrapper: {
    paddingTop: 80,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  assets: {
    marginTop: 50,
    marginBottom: 40,
  },
  assetText: {
    fontSize: 15,
  },

});