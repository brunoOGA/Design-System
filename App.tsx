import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import styled from 'styled-components/native';
import Accordion from './src/components/acorddion';
import AccordionItem from './src/components/acorddion/accordionItem';
import AlertDialog from './src/components/AlertDialog';
import Button from './src/components/Button';
import Input from './src/components/Input';
import Switch from './src/components/Switch';
import Tabs from './src/components/Tabs';
import TabContent from './src/components/Tabs/TabContent';
import {brandToken, globalTokens} from './tokens';

const TextTabContent = styled.Text`
  font-family: 'Roboto-Regular';
  font-weight: ${globalTokens.fontWeightRegular};
  font-size: ${globalTokens.fontSizeSm};
  color: ${brandToken.neutralColorLowMedium};
  text-align: justify;

  margin-bottom: ${globalTokens.spacingInsetLg};
`;

const App: React.FC = () => {
  const [modalVisible, isModalVisible] = useState(false);
  const [enabled, isEnabled] = useState(false);
  const toggleSwitch = () => isEnabled(previousState => !previousState);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.div}>
        <Tabs tabs={['Account', 'Password']}>
          <TabContent>
            <TextTabContent>
              Faça alterações em sua conta aqui. Clique em salvar quando
              terminar.
            </TextTabContent>
            <Input label="Nome" />
            <Input label="Nome do usuário" />
            <View style={{marginLeft: 'auto'}}>
              <Button
                type="success"
                title="Salvar Alterações"
                onPress={() => {}}
              />
            </View>
          </TabContent>

          <TabContent>
            <TextTabContent>
              Altere sua senha aqui. Após salvar, você será desconectado.
            </TextTabContent>

            <Input label="Senha Atual" />
            <Input label="Nova Senha" />
            <Input label="Confirme a Senha" />

            <View style={{marginLeft: 'auto'}}>
              <Button
                type="success"
                title="Alterar a senha"
                onPress={() => {}}
              />
            </View>
          </TabContent>
        </Tabs>
      </View>
      <View style={styles.div}>
        <View style={{marginLeft: 'auto', marginRight: 'auto'}}>
          <Button title="Button Primary" onPress={() => {}} />
        </View>
      </View>
      <View style={styles.div}>
        <View style={{marginLeft: 'auto', marginRight: 'auto'}}>
          <Button type="cancel" title="Cancelar" onPress={() => {}} />
        </View>
      </View>
      <View style={styles.div}>
        <View style={{marginLeft: 'auto', marginRight: 'auto'}}>
          <Button type="success" title="Salvar alterações" onPress={() => {}} />
        </View>
      </View>
      <View style={styles.div}>
        <View style={{marginLeft: 'auto', marginRight: 'auto'}}>
          <Button
            type="danger"
            title="Sim, excluir conta"
            onPress={() => isModalVisible(true)}
          />
        </View>
      </View>
      <View style={styles.div}>
        <Switch enabled={enabled} toggleSwitch={toggleSwitch} />
      </View>
      <View style={styles.div}>
        <Accordion>
          <AccordionItem
            title="É acessivel?"
            text="Sim. Adere ao padrão de design WAI-ARAI."
          />
          <AccordionItem
            title="É sem estilo?"
            text="Sim. É sem estilo por padrão, dando-lhe liberdade sobre a aparência."
          />
          <AccordionItem
            title="Pode ser animado?"
            text="Sim! Você pode animar o acordeão com CSS ou JavaScript."
          />
        </Accordion>
      </View>
      <AlertDialog
        typeOfButtonSuccess="danger"
        modalVisible={modalVisible}
        onClose={() => {
          isModalVisible(false);
        }}
        onSuccess={() => {
          isModalVisible(false);
        }}
        title="Você tem certeza absoluta?"
        textBody="Essa ação não pode ser desfeita, isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores."
        textButtonSuccess="Sim, excluir conta"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999',
    padding: 4,
  },
  div: {
    borderBottomWidth: 1,
    borderColor: '#222',
    paddingVertical: 8,
  },
});

export default App;
