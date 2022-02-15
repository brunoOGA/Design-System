import React from 'react';
import {brandToken} from '../../../tokens';

import {Container} from './styles';

interface Props {
  enabled: boolean;
  toggleSwitch: () => void;
}

const Switch: React.FC<Props> = ({enabled, toggleSwitch}) => {
  return (
    <Container
      trackColor={{
        false: brandToken.neutralColorLowLight,
        true: brandToken.brandColorPrimaryPure,
      }}
      thumbColor={
        enabled
          ? brandToken.neutralColorHighPure
          : brandToken.neutralColorHighPure
      }
      ios_backgroundColor={brandToken.neutralColorLowLight}
      onValueChange={toggleSwitch}
      value={enabled}
    />
  );
};

export default Switch;
