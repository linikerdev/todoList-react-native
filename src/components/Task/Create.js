import React from 'react';
import {Button, TextInput, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CreateTask = ({handle}) => {
  const [task, setTask] = React.useState('');

  const handleLocal = () => {
    handle(task);
    setTask('');
  };

  return (
    <ContainerInput>
      <TaskInput
        placeholder="Insira sua tarefa"
        placeholderTextColor="#fff"
        onChangeText={setTask}
        value={task}
      />

      <ButtonTask>
        <MaterialIcons
          name="keyboard-arrow-up"
          size={28}
          color="#FFF"
          onPress={handleLocal}
        />
      </ButtonTask>
      {/* <ButtonTask title="enviar" /> */}
    </ContainerInput>
  );
};

export default CreateTask;

const ContainerInput = styled(View)`
  border-radius: 3px;
  flex-direction: row;
`;

const TaskInput = styled(TextInput)`
  padding-left: 5px;
  padding-right: 5px;
  flex: 1;
  margin: 5px;
  background-color: #fff8;
  border-radius: 5px;
  color: #222;
`;
const ButtonTask = styled(TouchableOpacity)`
  background-color: #55b8cd;
  width: 50px;
  margin: 5px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
