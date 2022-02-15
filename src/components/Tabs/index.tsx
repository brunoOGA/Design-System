import React, {ReactElement, ReactNode, useEffect, useState} from 'react';
import {Text} from 'react-native';

import {Container, Header, Body} from './styles';
import TabContent, {TabContentProps} from './TabContent';
import TabsTrigger from './TabsTrigger';

interface Props {
  tabs: string[];
  children: ReactElement<TabContentProps>[];
}

const Tabs: React.FC<Props> = ({tabs, children}) => {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <Container>
      <Header>
        {tabs.map((tab, i) => (
          <TabsTrigger
            key={i}
            title={tab}
            onFocus={selected === tab}
            onPress={() => {
              setSelected(tab);
            }}
          />
        ))}
      </Header>
      {children[tabs.findIndex(tabs => tabs === selected)]}
    </Container>
  );
};

export default Tabs;
