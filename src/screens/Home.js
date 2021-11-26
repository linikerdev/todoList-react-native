import React, {useState} from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import CreateTask from '../components/Task/Create';
import EmptyTask from '../components/Task/Empty';
import ItemTask from '../components/Task/item';
import Title from '../components/Task/Title';

const Home = ({navigation}) => {
  const [listTask, setTask] = useState([]);

  const handleTask = value => [setTask([...listTask, value])];
  const removeTask = value => setTask(listTask.filter(v => v !== value));

  return (
    <Container>
      <Title title="Lista de Tarefas" />
      <ContainerTasks>
        {listTask.length === 0 && <EmptyTask />}
        {listTask.length > 0 &&
          listTask.map((item, i) => (
            <ItemTask task={item} key={i} removeTask={() => removeTask(item)} />
          ))}
      </ContainerTasks>
      <CreateTask handle={handleTask} />
    </Container>
  );
};

export default Home;

const Container = styled(SafeAreaView)`
  padding: 10px;
  background-color: #d94452;
  flex: 1;
`;

const ContainerTasks = styled(View)`
  margin-top: 10px;
  flex: 1;
`;
