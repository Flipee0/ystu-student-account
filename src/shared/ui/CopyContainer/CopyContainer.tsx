import { useState, ReactNode, FC } from 'react';
import { Box, Tooltip } from '@mui/joy';
import { useTranslation } from 'react-i18next';

interface CopyContainerProps {
    text: string;
    children: ReactNode;
}

export const CopyContainer: FC<CopyContainerProps> = ({ text, children }) => {
    const { t } = useTranslation();

    const [isHovered, setIsHovered] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleCopy = async () => {
        if (!isCopied || !isError) {
            try {
                await navigator.clipboard.writeText(text);
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000);
            } catch {
                setIsError(true);
                setTimeout(() => setIsError(false), 2000);
            }
        }
    };

    const color = isError ? 'danger' : isCopied ? 'success' : 'neutral';
    const title = isError
        ? t('CopyToClipboardFails')
        : isCopied
          ? t('CopyToClipboardSuccess')
          : t('CopyToClipboard');

    return (
        <Tooltip
            title={title}
            placement="top"
            open={isHovered || isCopied || isError}
            color={color}
        >
            <Box
                onClick={handleCopy}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                sx={{
                    cursor: 'pointer',
                }}
            >
                {children}
            </Box>
        </Tooltip>
    );
};
