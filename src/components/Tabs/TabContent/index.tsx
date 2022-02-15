import React, {ReactNode} from 'react';

import {Container} from './styles';

export interface TabContentProps {
  children: ReactNode;
}

const TabContent: React.FC<TabContentProps> = ({children}) => {
  return <Container>{children}</Container>;
};

export default TabContent;
