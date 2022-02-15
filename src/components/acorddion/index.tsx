import React, {ReactNode} from 'react';

import {Container} from './styles';

interface Props {
  children: ReactNode[];
}

const Accordion: React.FC<Props> = ({children}) => {
  return <Container>{children.map(child => child)}</Container>;
};

export default Accordion;
