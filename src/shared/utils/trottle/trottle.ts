export const throttle = <TArgs extends unknown[]>(
    callback: (...args: TArgs) => void,
    wait: number = 500,
) => {
    let timeout: NodeJS.Timeout | null = null;

    return (...args: TArgs) => {
        if (!timeout) {
            callback(...args);
            timeout = setTimeout(() => {
                timeout = null;
            }, wait);
        }
    };
};
