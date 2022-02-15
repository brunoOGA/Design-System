import styled from 'styled-components/native';
import {globalTokens, brandToken} from '../../../tokens';

export const Modal = styled.Modal``;

export const Background = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  justify-content: flex-end;
  margin: 8px;

  background-color: ${brandToken.neutralColorHighPure};
  border-radius: ${globalTokens.borderRadiusMd};
  padding: ${globalTokens.spacingInsetLg};
`;

export const Header = styled.View`
  margin-bottom: ${globalTokens.spacingInsetSm};
`;

export const HeaderTitle = styled.Text`
  font-family: 'Roboto-Regular';
  font-weight: ${globalTokens.fontWeightBold};
  font-size: ${globalTokens.fontSizeXl};
  color: ${brandToken.neutralColorLowPure};
`;

export const Body = styled.View`
  margin-bottom: ${globalTokens.spacingInsetSm};
`;
// TODO line-height
export const BodyText = styled.Text`
  font-family: 'Roboto-Regular';
  font-weight: ${globalTokens.fontWeightMedium};
  font-size: ${globalTokens.fontSizeLg};
  line-height: ${globalTokens.lineHeightMd};
  color: ${brandToken.neutralColorLowMedium};
`;

export const Footer = styled.View`
  flex-direction: row;
`;
