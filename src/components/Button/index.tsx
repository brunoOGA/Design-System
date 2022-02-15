import React from 'react';
import {Pressable} from 'react-native';

import {ContainerButton, Container, Title} from './styles';

type Props = {
  type?: 'default' | 'cancel' | 'success' | 'danger';
  title: string;
  onPress: () => void;
};

const Button: React.FC<Props> = ({title, onPress, type = 'default'}) => {
  return (
    <Container onPress={onPress}>
      {({pressed}) => (
        <ContainerButton type={type} pressed={pressed}>
          <Title type={type} pressed={pressed}>
            {title}
          </Title>
        </ContainerButton>
      )}
    </Container>
  );
};

export default Button;
