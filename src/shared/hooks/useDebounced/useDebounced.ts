import { useEffect, useState } from 'react';

export const useDebounced = <T>(
    value: T,
    delay: number = 1000,
    onSetDebounced?: (value: T) => void,
): T => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
            onSetDebounced?.(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay, onSetDebounced]);

    return debouncedValue;
};
