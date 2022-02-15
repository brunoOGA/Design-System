import React from 'react';
import {Container, Label, ContainerInput} from './styles';

interface Props {
  label: string;
}

const Input: React.FC<Props> = ({label}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <ContainerInput />
    </Container>
  );
};

export default Input;
