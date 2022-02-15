import styled from 'styled-components/native';
import {globalTokens, brandToken} from '../../../../tokens';

interface Props {
  open: boolean;
}
export const Container = styled.View`
  background-color: ${brandToken.neutralColorHighPure};
`;

export const Header = styled.TouchableWithoutFeedback``;

export const HeaderContent = styled.View`
  padding: ${globalTokens.spacingInsetLg};
  border-bottom-width: ${globalTokens.borderWidthHairline};
  border-color: ${brandToken.neutralColorLowLight};

  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
  font-family: 'Roboto-Regular';
  font-weight: ${globalTokens.fontWeightMedium};
  font-size: ${globalTokens.fontSizeMd};

  color: ${brandToken.brandColorPrimaryPure};
`;

export const HeaderIcon = styled.Image`
  height: 30px;
  width: 30px;
`;

export const Body = styled.View<Props>`
  display: ${({open}) => (open ? 'flex' : 'none')};
  padding: ${globalTokens.spacingInsetLg};
  border-bottom-width: ${globalTokens.borderWidthHairline};
  border-color: ${brandToken.neutralColorLowLight};
  background-color: ${brandToken.neutralColorHighLight};
`;

export const BodyText = styled.Text`
  font-family: 'Roboto-Regular';
  font-weight: ${globalTokens.fontWeightMedium};
  font-size: ${globalTokens.fontSizeMd};
  color: ${brandToken.neutralColorLowMedium};
  text-align: justify;
`;
