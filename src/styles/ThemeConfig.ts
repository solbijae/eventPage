import { css } from 'styled-components';

const typoCreator = (
  fontSize: string,
  fontWeight: number,
  letterSpacing: string,
  lineHeight: string,
) => {
  return css`
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    letter-spacing: ${letterSpacing};
    line-height: ${lineHeight};
  `;
};

export const ThemeConfig = {
  colors: {
    background: '#738d5d',
    text: '#171c13',
  },

  shadows: {
    upper: '0px 5px 10px rgba(0, 0, 0, 0.04)',
    card: '0px 8px 15px  0px rgba(0, 0, 0, 0.04)',
    smallMenu: '-2px 8px 30px 45px rgba(0, 0, 0, 0.35)',
    alertCard: '0px 8px 15px 10px rgba(156, 155, 155, 0.07)',
    overlap: '-4px 0px 12px rgba(0,0,0,0.35)',
    input: '0px -5px 10px rgba(0,0,0,0.04)',
    bottomTab: '0px -17px 39px -15px rgba(167,167,167,0.15)',
    dogCard: '0px 2px 7px 0px rgba(0, 0, 0, 0.04);',
  },

  typo: {
    dektop_navbar: typoCreator('1rem', 900, '0', '1'),
    desktop_h1: typoCreator('8.67rem', 900, '0', '1'),
    desktop_h2: typoCreator('5.67rem', 700, '0', '1'),
    desktop_stroke_1: typoCreator('3rem', 500, '0', '1'),
    desktop_stroke_2: typoCreator('2rem', 400, '0', '1'),
    desktop_text_1: typoCreator('1.5rem', 400, '0', '1'),
    desktop_text_2: typoCreator('1.2rem', 400, '0', '1'),
    desktop_text_3: typoCreator('1rem', 400, '0', '1'),
  },
};

export type TColor = keyof (typeof ThemeConfig)['colors'];