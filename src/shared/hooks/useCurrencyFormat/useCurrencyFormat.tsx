import { useTranslation } from 'react-i18next';

export const useCurrencyFormat = () => {
    const { i18n } = useTranslation();

    return (value: number | string) => {
        const formatValue =
            typeof value === 'string' ? parseFloat(value) : value;
        return new Intl.NumberFormat(i18n.language, {
            style: 'currency',
            currency: 'RUB',
            minimumFractionDigits: 2,
        }).format(formatValue);
    };
};
