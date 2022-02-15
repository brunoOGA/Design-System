import styled from 'styled-components/native';
import {globalTokens, brandToken} from '../../../tokens';

export const Container = styled.View`
  flex: 1;
  align-items: flex-start;
`;

export const Label = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: ${globalTokens.fontSizeXs};

  color: ${brandToken.neutralColorLowPure};

  margin-bottom: ${globalTokens.spacingInsetXs};
`;

export const ContainerInput = styled.TextInput`
  width: 100%;

  font-family: 'Roboto-Regular';
  font-size: ${globalTokens.fontSizeMd};
  font-weight: ${globalTokens.fontWeightMedium};
  color: ${brandToken.brandColorPrimaryPure};

  border: ${globalTokens.borderWidthHairline};
  border-radius: ${globalTokens.borderRadiusMd};
  border-color: ${brandToken.neutralColorLowLight};

  margin-bottom: ${globalTokens.spacingInsetXs};

  padding: 8px 4px;
`;
