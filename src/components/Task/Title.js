import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Title = ({title}) => (
  <TitleBox>
    <TitleText>{title}</TitleText>
  </TitleBox>
);
export default Title;

const TitleBox = styled(View)`
  background-color: #55b8cd;
  padding: 20px 10px;
  border-radius: 5px;
  border: 1px solid #fff;
`;
const TitleText = styled(Text)`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  text-align: center;
`;

Title.propTypes = {
  title: PropTypes.string,
};
