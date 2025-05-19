import { Table } from '@mui/joy';
import { ComponentProps, FC } from 'react';

type AlignedListProps = {
    items: { key: string | number; label: string; value: string }[];
} & ComponentProps<typeof Table>;

export const AlignedList: FC<AlignedListProps> = ({ items, ...tableProps }) => {
    return (
        <Table
            borderAxis="none"
            sx={{
                textAlign: 'left',
                tableLayout: 'auto',
                '& tbody tr td:nth-of-type(1)': {
                    opacity: '70%',
                    paddingX: 0,
                },
            }}
            {...tableProps}
        >
            <tbody>
                {items.map((item) => (
                    <tr key={item.key}>
                        <td>{item.label}</td>
                        <td>{item.value}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};
