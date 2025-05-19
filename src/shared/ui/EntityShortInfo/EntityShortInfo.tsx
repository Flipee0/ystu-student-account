import { FC, ReactNode } from 'react';
import { InfoBlock, PureLink } from '@/shared/ui';
import { Stack } from '@mui/joy';

type EntityShortInfoProps = {
    title?: ReactNode | ReactNode[];
    children: ReactNode | ReactNode[];
    actions?: ReactNode | ReactNode[];
    href?: string;
};

export const EntityShortInfo: FC<EntityShortInfoProps> = ({
    title,
    children,
    actions,
    href,
}) => {
    const block = (
        <InfoBlock>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
            >
                {title}
                {actions && (
                    <Stack
                        direction="row"
                        onClick={(event) => event.preventDefault()}
                    >
                        {actions}
                    </Stack>
                )}
            </Stack>
            {children}
        </InfoBlock>
    );

    return href ? <PureLink to={href}>{block}</PureLink> : block;
};
