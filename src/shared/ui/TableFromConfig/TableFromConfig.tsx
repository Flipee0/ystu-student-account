import { ReactNode, useMemo } from 'react';
import { Box, Table } from '@mui/joy';
import { useTranslation } from 'react-i18next';

export type TableConfig<
    TData extends Record<string, string | ReactNode> & { id: string },
> = {
    headersKeys: {
        [key in keyof Omit<TData, 'id'>]: string;
    };
    lines: TData[];
};

type TableFromConfigProps<
    TData extends Record<string, string | ReactNode> & { id: string },
> = {
    config: TableConfig<TData>;
};

export const TableFromConfig = <
    TData extends Record<string, string | ReactNode> & { id: string },
>({
    config,
}: TableFromConfigProps<TData>) => {
    const { t } = useTranslation();

    const headerKeys = useMemo(
        () => Object.keys(config.headersKeys) as (keyof Omit<TData, 'id'>)[],
        [config],
    );

    return (
        <Box
            sx={{
                overflowX: 'auto',
                borderRadius: '10px',
            }}
        >
            <Table sx={{ tableLayout: 'auto', padding: 0 }}>
                <thead>
                    <tr>
                        {headerKeys.map((key) => (
                            <th key={key as string}>
                                {t(config.headersKeys[key])}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {config.lines.map((rowData) => (
                        <tr key={rowData.id}>
                            {headerKeys.map((key) => (
                                <td key={`${rowData.id}-${key as string}`}>
                                    {rowData[key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Box>
    );
};
