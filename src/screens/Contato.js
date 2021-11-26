import React from 'react';
import {Text, View} from 'react-native';

const Contato = props => {
  React.useEffect(() => {
    props.navigation.setOptions({
      title: 'Banana',
    });
  }, [props.navigation]);

  return (
    <View>
      <Text>Contato</Text>
    </View>
  );
};

export default Contato;
