import { ComponentProps, FC } from 'react';
import { Sheet } from '@mui/joy';

type InfoBlockProps = ComponentProps<typeof Sheet>;

export const InfoBlock: FC<InfoBlockProps> = ({
    children,
    sx,
    variant,
    ...other
}) => {
    return (
        <Sheet
            variant={variant ?? 'soft'}
            sx={{
                borderRadius: '20px',
                padding: '1em',
                width: '100%',
                ...sx,
            }}
            {...other}
        >
            {children}
        </Sheet>
    );
};
