import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Appbar, ToggleButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Header = (props) => {
  const headerTitle = props.title;
  const navigation = useNavigation();
  const back = () => {
    navigation.goBack()
  };
  const [value, setValue] = React.useState('today');
  return (
    <Appbar.Header style={styles.Header} statusBarHeight={10}>
      <Appbar.Action icon="chevron-left" onPress={back} />
      <Appbar.Content title={headerTitle} subtitle="Asset name" />
      <ToggleButton.Group
            onValueChange={value => setValue(value)}
            value={value}>
        <ToggleButton style={styles.toggleButton} icon={()=><View><Text>Today</Text></View>} value="today" />
        <ToggleButton style={styles.toggleButton} icon={()=><View><Text>Month</Text></View>} value="month" />
        <ToggleButton style={styles.toggleButton} icon={()=><View><Text>Year</Text></View>} value="year" />
    </ToggleButton.Group>
    </Appbar.Header>
  );
};

export default Header;

const styles = StyleSheet.create({
  Header: {
    marginBottom:10,
  },
  toggleButton: {
    width: 60,
    borderRadius: 6,
  }
});