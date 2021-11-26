import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const EmptyTask = () => (
  <Box>
    <MaterialIcons name="info" size={22} color="#fff" />
    <EmptyText>Você ainda não possui tarefas.</EmptyText>
  </Box>
);
export default EmptyTask;

const Box = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 7px;
  padding: 7px 5px;
  border-radius: 3px;
  flex: 1;
`;
const EmptyText = styled(Text)`
  color: #fff;
  font-size: 16px;
`;
