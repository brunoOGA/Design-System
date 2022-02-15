import React from 'react';
import {View} from 'react-native';
import Button from '../Button';

import {
  Modal,
  Background,
  Container,
  Header,
  HeaderTitle,
  Body,
  BodyText,
  Footer,
} from './styles';

interface Props {
  modalVisible: boolean;
  title: string;
  textBody: string;
  textButtonSuccess: string;
  typeOfButtonSuccess?: 'default' | 'success' | 'danger';
  onClose: () => void;
  onSuccess: () => void;
}

const AlertDialog: React.FC<Props> = ({
  modalVisible,
  title,
  textBody,
  textButtonSuccess,
  typeOfButtonSuccess = 'default',
  onClose,
  onSuccess,
}) => {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={modalVisible}
      onRequestClose={onClose}>
      <Background>
        <Container>
          <Header>
            <HeaderTitle>{title}</HeaderTitle>
          </Header>
          <Body>
            <BodyText>{textBody}</BodyText>
          </Body>
          <Footer>
            <Button type="cancel" title="Cancelar" onPress={onClose} />
            <Button
              type={typeOfButtonSuccess}
              title={textButtonSuccess}
              onPress={onSuccess}
            />
          </Footer>
        </Container>
      </Background>
    </Modal>
  );
};

export default AlertDialog;
