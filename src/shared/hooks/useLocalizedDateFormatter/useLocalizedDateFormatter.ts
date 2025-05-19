import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export const useLocalizedDateFormatter = () => {
    const { i18n } = useTranslation();

    return useCallback(
        (dateString: string, options?: Intl.DateTimeFormatOptions): string => {
            const date = new Date(dateString);

            if (isNaN(date.getTime())) {
                throw new Error(`Invalid date string: ${dateString}`);
            }

            const defaultOptions: Intl.DateTimeFormatOptions = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            };

            const formattingOptions = options || defaultOptions;

            try {
                return date.toLocaleString(i18n.language, formattingOptions);
            } catch {
                throw new Error(
                    `Failed to format date for locale ${i18n.language}`,
                );
            }
        },
        [i18n.language],
    );
};
