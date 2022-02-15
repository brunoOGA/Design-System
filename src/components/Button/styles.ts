import styled, {css} from 'styled-components/native';
import {brandToken, globalTokens} from '../../../tokens';

interface Props {
  pressed: boolean;
  type: 'default' | 'cancel' | 'success' | 'danger';
}

export const Container = styled.Pressable`
`;

export const ContainerButton = styled.View<Props>`
  align-items: center;
  justify-content: center;

  ${({type}) => {
    switch (type) {
      case 'cancel':
        return css`
          border-radius: ${globalTokens.borderRadiusSm};
          padding: ${globalTokens.spacingInsetXxs} ${globalTokens.spacingInsetLg};
        `;
      case 'success':
      case 'danger':
        return css`
          border-radius: ${globalTokens.borderRadiusMd};
          padding: ${globalTokens.spacingInsetXxs} ${globalTokens.spacingInsetLg};
        `;
      default:
        return css`
          border-radius: ${globalTokens.borderRadiusMd};
          padding: ${globalTokens.spacingInsetXxs} ${globalTokens.spacingInsetLg};
        `;
    }
  }}
  background-color: ${({pressed, type}) => {
    switch (type) {
      case 'cancel':
        return pressed
          ? brandToken.neutralColorLowLight
          : brandToken.neutralColorHighLight;
      case 'success':
        return pressed
          ? brandToken.feedbackColorSuccessMedium
          : brandToken.feedbackColorSuccessLight;
      case 'danger':
        return pressed
          ? brandToken.feedbackColorErrorLight
          : brandToken.feedbackColorErrorMedium;
      default:
        return pressed
          ? brandToken.neutralColorHighLight
          : brandToken.neutralColorHighPure;
    }
  }};
`;

export const Title = styled.Text<Props>`
  ${({type}) => {
    switch (type) {
      case 'cancel':
        return css`
          font-family: 'Roboto-Regular';
          font-size: ${globalTokens.fontSizeMd};
          font-weight: ${globalTokens.fontWeightMedium};
          line-height: ${globalTokens.lineHeightDefault};
        `;
      case 'success':
      case 'danger':
        return css`
          font-family: 'Roboto-Regular';
          font-size: ${globalTokens.fontSizeMd};
          font-weight: ${globalTokens.fontWeightMedium};
          line-height: ${globalTokens.lineHeightDefault};
        `;
      default:
        return css`
          font-family: 'Roboto-Regular';
          font-size: ${globalTokens.fontSizeMd};
          font-weight: ${globalTokens.fontWeightMedium};
          line-height: ${globalTokens.lineHeightDefault};
        `;
    }
  }}

  color: ${({type}) => {
    switch (type) {
      case 'cancel':
        return brandToken.neutralColorLowDark;
      case 'success':
        return brandToken.feedbackColorSuccessPure;
      case 'danger':
        return brandToken.feedbackColorErrorPure;
      default:
        return brandToken.brandColorPrimaryPure;
    }
  }};
`;
