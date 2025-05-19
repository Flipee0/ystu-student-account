import { FC } from 'react';
import { Stack, styled, Typography, useTheme } from '@mui/joy';
import avatar from 'public/bobrito-bandito.jpg';
import { AlignedList, InfoBlock } from '@/shared/ui';
import { useTranslation } from 'react-i18next';
import { useDeviceInfo } from '@/shared/hooks';
import { useCurrencyFormat } from '@/shared/hooks/useCurrencyFormat/useCurrencyFormat';

type StudentProfileProps = {};

const Image = styled('img')({});

export const StudentProfile: FC<StudentProfileProps> = () => {
    const theme = useTheme();
    const { t } = useTranslation();
    const { isMobile } = useDeviceInfo();
    const currency = useCurrencyFormat();

    const mainInfoItems = [
        {
            key: 'Status',
            label: t('Status'),
            value: t('Student'),
        },
        {
            key: 'Faculty',
            label: t('Faculty'),
            value: t('InstituteOfDigitalSystems'),
        },
        {
            key: 'Group',
            label: t('Group'),
            value: `${t('DIS')}-47`,
        },
        {
            key: 'FieldOfStudy',
            label: t('FieldOfStudy'),
            value: `09.03.02 - ${t('InformationSystemsAndTechnologies')}`,
        },
        {
            key: 'LearningProfile',
            label: t('LearningProfile'),
            value: t('InformationSystemsAndTechnologies'),
        },
    ];

    return (
        <Stack spacing={2}>
            <Stack direction="row" spacing={2}>
                <Image
                    src={avatar}
                    sx={{
                        borderRadius: '10px',
                        [theme.breakpoints.down('sm')]: {
                            width: '7rem',
                        },
                        [theme.breakpoints.up('sm')]: {
                            width: '15rem',
                        },
                        [theme.breakpoints.up('md')]: {
                            width: '20rem',
                        },
                    }}
                />
                <Stack>
                    <Typography component="h3" level="h3">
                        Черных Никита Алексеевич
                    </Typography>
                    {!isMobile && <AlignedList items={mainInfoItems} />}
                </Stack>
            </Stack>
            <InfoBlock>
                <AlignedList
                    items={[
                        ...(isMobile ? mainInfoItems : []),
                        {
                            key: 'FundingSource',
                            label: t('FundingSource'),
                            value: t('Budget'),
                        },
                        {
                            key: 'Qualification',
                            label: t('Qualification'),
                            value: t('Bachelor'),
                        },
                        {
                            key: 'FormOfTraining',
                            label: t('FormOfTraining'),
                            value: t('Offline'),
                        },
                        {
                            key: 'DateOfBirth',
                            label: t('DateOfBirth'),
                            value: '06.04.2003',
                        },
                        {
                            key: 'AddressOfRegistration',
                            label: t('AddressOfRegistration'),
                            value: t(
                                '124121, Ярославская обл, Ярославский р-н, Ярославль г, , Гагарина ул, 11, , 6601',
                            ),
                        },
                        {
                            key: 'EMail',
                            label: t('EMail'),
                            value: t(
                                'dokweb0987@gmail.com chernihna.21@edu.ystu.ru',
                            ),
                        },
                        {
                            key: 'PhoneNumber',
                            label: t('PhoneNumber'),
                            value: t('+7(123)456-78-90'),
                        },
                        {
                            key: 'LibraryDebts',
                            label: t('LibraryDebts'),
                            value: currency(0),
                        },
                        {
                            key: 'AccountingDebts',
                            label: t('AccountingDebts'),
                            value: currency(900),
                        },
                        {
                            key: 'Hostel',
                            label: t('Hostel'),
                            value: t('Living'),
                        },
                        {
                            key: 'ReadersCard',
                            label: t('ReadersCard'),
                            value: '18DE835782',
                        },
                        {
                            key: 'Login',
                            label: t('Login'),
                            value: 'mylogin.24',
                        },
                    ]}
                />
            </InfoBlock>
        </Stack>
    );
};
