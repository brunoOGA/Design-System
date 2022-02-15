import React from 'react';

import {Container, Title, Button} from './styles';

interface Props {
  title: string;
  onFocus: boolean;
  onPress: () => void;
}

const TabsTrigger: React.FC<Props> = ({title, onFocus, onPress}) => {
  return (
    <Button onPress={onPress}>
      <Container focus={onFocus}>
        <Title focus={onFocus}>{title}</Title>
      </Container>
    </Button>
  );
};

export default TabsTrigger;
