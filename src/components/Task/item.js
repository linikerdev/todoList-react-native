import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ItemTask = ({task, removeTask}) => (
  <Item>
    <Task>{task}</Task>
    <Action onPress={removeTask}>
      <MaterialIcons name="delete" size={22} color="#55b8cd" />
    </Action>
  </Item>
);
export default ItemTask;

const Item = styled(View)`
  flex-direction: row;
  margin-top: 7px;
  background-color: #fff;
  padding: 7px 5px;
  border-radius: 3px;
`;
const Task = styled(Text)`
  flex-direction: row;
  flex: 1;
  color: #d94452;
`;
const Action = styled(TouchableOpacity)`
  flex-direction: row;
  color: #222;
`;

ItemTask.propTypes = {
  task: PropTypes.string,
};
