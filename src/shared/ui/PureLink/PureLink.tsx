import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import { styled, useTheme } from '@mui/joy';
import { SxProps } from '@mui/joy/styles/types';

type PureLinkProps = {
    sx?: SxProps;
} & LinkProps;

export const PureLink: FC<PureLinkProps> = (props) => {
    const theme = useTheme();

    const StyledLink = styled(Link)({
        textDecoration: 'none',
        color: theme.palette.text.secondary,
    });

    return <StyledLink {...props} />;
};
