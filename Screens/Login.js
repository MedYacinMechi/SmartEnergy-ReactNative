import React, { useState } from 'react';
import { View, Text, StatusBar, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch } from "react-redux";
import AuroraButton from '../Components/AuroraButton';
import Logo from '../Components/logo';
import { Root, Popup, Toast } from 'popup-ui';
import { getLogin } from '../redux/actions';


const SignIn = () => {
  const [username, onChangeUsername] = useState("amine@sofia-technologies.com");
  const [password, onChangePassword] = useState("amine25416990");
  const dispatch = useDispatch();

  async function validate() {
    if (username == '' && password == '') {
      Popup.show({
        type: 'Warning',
        title: 'Unable to sign in',
        textBody: 'please fill in all fields',
        buttontext: 'Try again',
        callback: () => Popup.hide(),
      });
    } else if (username == '') {
      Popup.show({
        type: 'Warning',
        title: 'Unable to sign in',
        textBody: 'please enter your username',
        buttontext: 'Try again',
        callback: () => Popup.hide(),
      });
    } else if (password == '') {
      Popup.show({
        type: 'Warning',
        title: 'Unable to sign in',
        textBody: 'please enter your password',
        buttontext: 'Try again',
        callback: () => Popup.hide(),
      });
    } else {
      dispatch(getLogin({ username, password }))
    }
  }
    return (
      <Root>
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
        <View style={styles.body}>
          <View animation="zoomInUp" style={styles.topSection}>
            <Logo />
          </View>
          <ScrollView style={styles.bottomSection} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>

            <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <View style={{ width: '95%', height: 50 }}>
              </View>
              <View style={{ width: '80%', marginBottom: 20 }}>
                <Text style={{ color: '#fff', fontSize: 40, marginTop: 10, marginBottom: 30 }}>Welcome {'\n'}Back</Text>
                <TextInput value={username} onChangeText={text => onChangeUsername(text)} style={{ height: 52, width: '100%', color: 'white', borderRadius: 10, borderWidth: 1, borderColor: 'white', paddingLeft: 10 }} placeholderTextColor="#fff" placeholder="Username" />
                <TextInput value={password} onChangeText={text => onChangePassword(text)} secureTextEntry={true} style={{ height: 52, width: '100%', color: 'white', borderRadius: 10, marginTop: 10, borderWidth: 1, borderColor: 'white', paddingLeft: 10 }} placeholderTextColor="#fff" placeholder="Password" />
              </View>
              <AuroraButton buttonFunction={() => validate()} bgcolor="white" text="Sign in" color={"black"} outline={false} />
            </View>
          </ScrollView>
        </View>
      </Root>
  )
}

export default SignIn
const styles = StyleSheet.create({
  topSection: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '30%',

  },
  body: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  bottomSection: {
    width: '100%',
    height: '70%',
    backgroundColor: '#ED8B00',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  }

})