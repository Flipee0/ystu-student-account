import { css } from '@emotion/react';

// DIN Pro
import DINProBlackWoff2 from './DINPro-Black.woff2';
import DINProBlackWoff from './DINPro-Black.woff';
import DINProBlackTtf from './DINPro-Black.ttf';

import DINProBlackItalicWoff2 from './DINPro-BlackItalic.woff2';
import DINProBlackItalicWoff from './DINPro-BlackItalic.woff';
import DINProBlackItalicTtf from './DINPro-BlackItalic.ttf';

import DINProBoldWoff2 from './DINPro-Bold.woff2';
import DINProBoldWoff from './DINPro-Bold.woff';
import DINProBoldTtf from './DINPro-Bold.ttf';

import DINProBoldItalicWoff2 from './DINPro-BoldItalic.woff2';
import DINProBoldItalicWoff from './DINPro-BoldItalic.woff';
import DINProBoldItalicTtf from './DINPro-BoldItalic.ttf';

import DINProItalicWoff2 from './DINPro-Italic.woff2';
import DINProItalicWoff from './DINPro-Italic.woff';
import DINProItalicTtf from './DINPro-Italic.ttf';

import DINProLightWoff2 from './DINPro-Light.woff2';
import DINProLightWoff from './DINPro-Light.woff';
import DINProLightTtf from './DINPro-Light.ttf';

import DINProLightItalicWoff2 from './DINPro-LightItalic.woff2';
import DINProLightItalicWoff from './DINPro-LightItalic.woff';
import DINProLightItalicTtf from './DINPro-LightItalic.ttf';

import DINProMediumWoff2 from './DINPro-Medium.woff2';
import DINProMediumWoff from './DINPro-Medium.woff';
import DINProMediumTtf from './DINPro-Medium.ttf';

import DINProMediumItalicWoff2 from './DINPro-MediumItalic.woff2';
import DINProMediumItalicWoff from './DINPro-MediumItalic.woff';
import DINProMediumItalicTtf from './DINPro-MediumItalic.ttf';

import DINProRegularWoff2 from './DINPro.woff2';
import DINProRegularWoff from './DINPro.woff';
import DINProRegularTtf from './DINPro.ttf';

// DIN Pro Condensed
import DINProCondensedBlackWoff2 from './DINPro-CondensedBlack.woff2';
import DINProCondensedBlackWoff from './DINPro-CondensedBlack.woff';
import DINProCondensedBlackTtf from './DINPro-CondensedBlack.ttf';

import DINProCondensedBlackItalicWoff2 from './DINPro-CondensedBlackItalic.woff2';
import DINProCondensedBlackItalicWoff from './DINPro-CondensedBlackItalic.woff';
import DINProCondensedBlackItalicTtf from './DINPro-CondensedBlackItalic.ttf';

import DINProCondensedBoldWoff2 from './DINPro-CondensedBold.woff2';
import DINProCondensedBoldWoff from './DINPro-CondensedBold.woff';
import DINProCondensedBoldTtf from './DINPro-CondensedBold.ttf';

import DINProCondensedBoldItalicWoff2 from './DINPro-CondensedBoldItalic.woff2';
import DINProCondensedBoldItalicWoff from './DINPro-CondensedBoldItalic.woff';
import DINProCondensedBoldItalicTtf from './DINPro-CondensedBoldItalic.ttf';

import DINProCondensedLightWoff2 from './DINPro-CondensedLight.woff2';
import DINProCondensedLightWoff from './DINPro-CondensedLight.woff';
import DINProCondensedLightTtf from './DINPro-CondensedLight.ttf';

import DINProCondensedLightItalicWoff2 from './DINPro-CondensedLightItalic.woff2';
import DINProCondensedLightItalicWoff from './DINPro-CondensedLightItalic.woff';
import DINProCondensedLightItalicTtf from './DINPro-CondensedLightItalic.ttf';

import DINProCondensedMediumWoff2 from './DINPro-CondensedMedium.woff2';
import DINProCondensedMediumWoff from './DINPro-CondensedMedium.woff';
import DINProCondensedMediumTtf from './DINPro-CondensedMedium.ttf';

import DINProCondensedMediumItalicWoff2 from './DINPro-CondensedMediumItalic.woff2';
import DINProCondensedMediumItalicWoff from './DINPro-CondensedMediumItalic.woff';
import DINProCondensedMediumItalicTtf from './DINPro-CondensedMediumItalic.ttf';

import DINProCondensedItalicWoff2 from './DINPro-CondensedItalic.woff2';
import DINProCondensedItalicWoff from './DINPro-CondensedItalic.woff';
import DINProCondensedItalicTtf from './DINPro-CondensedItalic.ttf';

import DINProCondensedRegularWoff2 from './DINPro-CondensedRegular.woff2';
import DINProCondensedRegularWoff from './DINPro-CondensedRegular.woff';
import DINProCondensedRegularTtf from './DINPro-CondensedRegular.ttf';

const fontUsage = css`
    * {
        font-family: 'DIN Pro', serif;
    }
`;

export const fontFaces = css`
    ${[
        {
            name: 'DIN Pro',
            weight: 900,
            style: 'normal',
            urls: [DINProBlackWoff2, DINProBlackWoff, DINProBlackTtf],
        },
        {
            name: 'DIN Pro',
            weight: 900,
            style: 'italic',
            urls: [
                DINProBlackItalicWoff2,
                DINProBlackItalicWoff,
                DINProBlackItalicTtf,
            ],
        },
        {
            name: 'DIN Pro',
            weight: 'bold',
            style: 'normal',
            urls: [DINProBoldWoff2, DINProBoldWoff, DINProBoldTtf],
        },
        {
            name: 'DIN Pro',
            weight: 'bold',
            style: 'italic',
            urls: [
                DINProBoldItalicWoff2,
                DINProBoldItalicWoff,
                DINProBoldItalicTtf,
            ],
        },
        {
            name: 'DIN Pro',
            weight: 300,
            style: 'normal',
            urls: [DINProLightWoff2, DINProLightWoff, DINProLightTtf],
        },
        {
            name: 'DIN Pro',
            weight: 300,
            style: 'italic',
            urls: [
                DINProLightItalicWoff2,
                DINProLightItalicWoff,
                DINProLightItalicTtf,
            ],
        },
        {
            name: 'DIN Pro',
            weight: 500,
            style: 'normal',
            urls: [DINProMediumWoff2, DINProMediumWoff, DINProMediumTtf],
        },
        {
            name: 'DIN Pro',
            weight: 500,
            style: 'italic',
            urls: [
                DINProMediumItalicWoff2,
                DINProMediumItalicWoff,
                DINProMediumItalicTtf,
            ],
        },
        {
            name: 'DIN Pro',
            weight: 'normal',
            style: 'italic',
            urls: [DINProItalicWoff2, DINProItalicWoff, DINProItalicTtf],
        },
        {
            name: 'DIN Pro',
            weight: 'normal',
            style: 'normal',
            urls: [DINProRegularWoff2, DINProRegularWoff, DINProRegularTtf],
        },
        {
            name: 'DIN Pro Cond',
            weight: 900,
            style: 'normal',
            urls: [
                DINProCondensedBlackWoff2,
                DINProCondensedBlackWoff,
                DINProCondensedBlackTtf,
            ],
        },
        {
            name: 'DIN Pro Cond',
            weight: 900,
            style: 'italic',
            urls: [
                DINProCondensedBlackItalicWoff2,
                DINProCondensedBlackItalicWoff,
                DINProCondensedBlackItalicTtf,
            ],
        },
        {
            name: 'DIN Pro Cond',
            weight: 'bold',
            style: 'normal',
            urls: [
                DINProCondensedBoldWoff2,
                DINProCondensedBoldWoff,
                DINProCondensedBoldTtf,
            ],
        },
        {
            name: 'DIN Pro Cond',
            weight: 'bold',
            style: 'italic',
            urls: [
                DINProCondensedBoldItalicWoff2,
                DINProCondensedBoldItalicWoff,
                DINProCondensedBoldItalicTtf,
            ],
        },
        {
            name: 'DIN Pro Cond',
            weight: 300,
            style: 'normal',
            urls: [
                DINProCondensedLightWoff2,
                DINProCondensedLightWoff,
                DINProCondensedLightTtf,
            ],
        },
        {
            name: 'DIN Pro Cond',
            weight: 300,
            style: 'italic',
            urls: [
                DINProCondensedLightItalicWoff2,
                DINProCondensedLightItalicWoff,
                DINProCondensedLightItalicTtf,
            ],
        },
        {
            name: 'DIN Pro Cond',
            weight: 500,
            style: 'normal',
            urls: [
                DINProCondensedMediumWoff2,
                DINProCondensedMediumWoff,
                DINProCondensedMediumTtf,
            ],
        },
        {
            name: 'DIN Pro Cond',
            weight: 500,
            style: 'italic',
            urls: [
                DINProCondensedMediumItalicWoff2,
                DINProCondensedMediumItalicWoff,
                DINProCondensedMediumItalicTtf,
            ],
        },
        {
            name: 'DIN Pro Cond',
            weight: 'normal',
            style: 'italic',
            urls: [
                DINProCondensedItalicWoff2,
                DINProCondensedItalicWoff,
                DINProCondensedItalicTtf,
            ],
        },
        {
            name: 'DIN Pro Cond',
            weight: 'normal',
            style: 'normal',
            urls: [
                DINProCondensedRegularWoff2,
                DINProCondensedRegularWoff,
                DINProCondensedRegularTtf,
            ],
        },
    ]
        .map(
            ({ name, weight, style, urls }) => `
        @font-face {
          font-family: '${name}';
          src: ${urls.map((url) => `url(${url})`).join(', ')};
          font-weight: ${weight};
          font-style: ${style};
        }
      `,
        )
        .join('\n')}
`;

export default css([fontFaces, fontUsage]);
