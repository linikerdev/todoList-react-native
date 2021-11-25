import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components/native';
const App = () => {
  const [valor, setValor] = React.useState(0);
  const arr = [...Array(50).keys()].map(() => Math.floor(Math.random() * 100));

  console.log('teste');

  const aumentaValor = () => setValor(valor + 1);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominique'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

export default App;

const Container = styled(View)`
  background-color: #fff;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Title = styled(Text)`
  font-size: 22px;
  color: red;
  font-weight: bold;
`;

const Box = styled(Text)`
  width: 100%;
  height: 20px;
  background-color: #ccc;
  margin: 10px;
  text-align: center;
  justify-content: center;
  text-align: center;
`;
