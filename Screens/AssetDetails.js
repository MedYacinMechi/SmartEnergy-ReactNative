import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Header from '../Components/Header';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fff',
    accent: '#f1c40f',
  },
};

const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: () => "rgba(42,133,255,0.2)",
    labelColor: () => `#555`,
    barPercentage: 1,

  };
const AssetDetails = ({ route }) => {
    const l = route.params;
    const data = {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          data: [50, 45, 28, 80, 99]
        }
      ],
      barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"]
    };
    return (
    <PaperProvider theme={theme}>
      <StatusBar  backgroundColor="#fff" barStyle="dark-content"/>
      <Header title={"Asset " + l.number}/>
      <View style={styles.Container}>
        <View style={styles.chartsContainer}>
          <BarChart
            data={data}
            width={400}
            height={300}
            fromZero
            yAxisLabel="kW "
            chartConfig={chartConfig}
            style={{
              borderRadius: 16,
              paddingTop: 30,
            }} />
          <Text style={{alignSelf:'center',marginTop:20, fontWeight:'bold'}}>More Elemnts ...</Text>
        </View>
      </View>
    </PaperProvider>

    )
  }
export default AssetDetails

const styles = StyleSheet.create({
    Container: {
        flex:1,
        backgroundColor: '#E8EAED',
        alignItems: 'center'
      },
      HeaderBar: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingHorizontal:10,
        paddingTop:20,
      },
    chartsContainer: {
        marginTop: 20,

    },
    text: {
        textAlign: 'center',
        fontSize:20,
        fontWeight:'bold'
    }
})