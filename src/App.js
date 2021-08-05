import React from 'react';
import styled from 'styled-components/native';
import Input from './Input';

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <Container>
      <Input />
    </Container>
  );
}
