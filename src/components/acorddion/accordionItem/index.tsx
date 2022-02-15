import React, {useState} from 'react';
import ArrowUp from '../../../../assets/ic_up_arrow.png';
import ArrowDown from '../../../../assets/ic_down_arrow.png';

import {
  Container,
  Header,
  HeaderContent,
  HeaderTitle,
  Body,
  BodyText,
  HeaderIcon,
} from './styles';

interface Props {
  title: string;
  text: string;
}

const AccordionItem: React.FC<Props> = ({title, text}) => {
  const [open, isOpen] = useState(false);
  return (
    <Container>
      <Header onPress={() => isOpen(previousState => !previousState)}>
        <HeaderContent>
          <HeaderTitle>{title}</HeaderTitle>
          <HeaderIcon
            resizeMode="contain"
            source={open ? ArrowUp : ArrowDown}
          />
        </HeaderContent>
      </Header>
      <Body open={open}>
        <BodyText>{text}</BodyText>
      </Body>
    </Container>
  );
};

export default AccordionItem;
