import styled from 'styled-components/native';
import {globalTokens, brandToken} from '../../../../tokens';

interface Props {
  focus: boolean;
}
export const Button = styled.TouchableWithoutFeedback``;

export const Container = styled.View<Props>`
  flex: 1;
  justify-content: center;
  align-items: center;

  border-color: ${({focus}) =>
    focus
      ? brandToken.brandColorPrimaryPure
      : brandToken.neutralColorLowMedium};
  border-bottom-width: ${({focus}) =>
    focus ? globalTokens.borderWidthThin : globalTokens.borderWidthHairline};
  border-radius: ${globalTokens.borderRadiusNone};
  background-color: ${brandToken.neutralColorHighPure};
  padding: ${globalTokens.spacingInsetXs};
`;

export const Title = styled.Text<Props>`
  text-align: center;

  font-family: 'Roboto-Regular';
  font-weight: ${globalTokens.fontWeightRegular};
  font-size: ${globalTokens.fontSizeSm};
  line-height: ${globalTokens.lineHeightDefault};
  color: ${({focus}) =>
    focus
      ? brandToken.brandColorPrimaryPure
      : brandToken.neutralColorLowMedium};
`;
