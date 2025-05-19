import { FC } from 'react';
import { Button } from '@mui/joy';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useTranslation } from 'react-i18next';
import { download } from '@/shared/utils';

type AttachmentProps = {
    url: string;
};

export const Attachment: FC<AttachmentProps> = ({ url }) => {
    const { t } = useTranslation();

    return (
        <Button
            variant="plain"
            color="neutral"
            startDecorator={<FileDownloadIcon />}
            onClick={() => download(url)}
        >
            {t('File')}
        </Button>
    );
};
