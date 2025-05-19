import { Box, CircularProgress, Stack } from '@mui/joy';
import { ReactNode, useEffect, useRef } from 'react';
import { DefinedUseInfiniteQueryResult } from '@tanstack/react-query';

type InfiniteScrollContainerProps<TData, TError> = {
    children: (
        data: DefinedUseInfiniteQueryResult<TData, TError>['data'],
    ) => ReactNode | ReactNode[];
    query: DefinedUseInfiniteQueryResult<TData, TError>;
};

export const InfiniteScrollContainer = <TData, TError>({
    children,
    query,
}: InfiniteScrollContainerProps<TData, TError>) => {
    const observerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !query.isLoading) {
                    query.fetchNextPage().then();
                }
            },
            { threshold: 1.0 },
        );

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => observer.disconnect();
    }, [query, query.isLoading]);

    return (
        <Stack>
            {query.data && children(query.data)}
            <Box ref={observerRef} height={10} />
            {query.isLoading && (
                <CircularProgress sx={{ alignSelf: 'center' }} />
            )}
        </Stack>
    );
};
