import React from 'react';
import {Image} from 'react-native';

const Logo = ()=>{
  return (
        <Image style={{width:'70%',resizeMode:'contain'}} source={require('../assets/logo.png')}/>
    )
}

export default Logo